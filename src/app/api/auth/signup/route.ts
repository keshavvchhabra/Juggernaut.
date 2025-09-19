import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

// Maximum number of retries for DB operation
const MAX_RETRIES = 3;
// Delay between retries (in ms)
const RETRY_DELAY = 1000; 

// Utility function to wait for given ms (used in retry logic)
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: Request) {
  let retries = 0; // Track retry attempts
  
  while (retries < MAX_RETRIES) {
    try {
      // Parse request body
      const request = await req.json();
      console.log('Incoming request')

      // Validate body
      if (!request || typeof request !== "object") {
        console.error("Invalid request body");
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
      }

      // Ensure password is provided
      if (!request.password) {
        console.error("Missing password in request");
        return NextResponse.json({ error: "Password required" }, { status: 400 });
      }

      // Hash password before saving to DB
      const hashedPassword = await bcrypt.hash(request.password, 10);
      
      try {
        // Check if user already exists by email
        const existingUser = await prisma.user.findUnique({
          where: { email: request.email },
        });

        if (existingUser) {
          // Reject duplicate users
          return NextResponse.json(
            { error: "User with this email already exists" },
            { status: 400 }
          );
        }

        // Create new user in DB
        const user = await prisma.user.create({
          data: {
            username: request.username,
            email: request.email,
            password: hashedPassword,
          },
        });

        // Return created user
        return NextResponse.json({ user }, { status: 200 });
      } catch (dbError) {
        // Handle DB connection pool issue with retry
        if (dbError instanceof Error && dbError.message.includes('connection pool')) {
          retries++;
          if (retries < MAX_RETRIES) {
            console.log(`Retrying database operation. Attempt ${retries + 1} of ${MAX_RETRIES}`);
            await wait(RETRY_DELAY); // Wait before retry
            continue; // Retry loop
          }
        }
        // Re-throw if not retry-able or out of retries
        throw dbError; 
      }

    } catch (error) {
      // Handle unexpected errors
      console.error("Error occurred:", {
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined
      });
      return NextResponse.json({ 
        error: "User creation failed",
        details: error instanceof Error ? error.message : "Unknown error"
      }, { status: 500 });
    }
  }

  // Final fallback if retries are exhausted
  return NextResponse.json({ 
    error: "Database connection failed after multiple attempts"
  }, { status: 500 });
}
