"use client"

interface Testimonial {
  initials: string;
  name: string;
  position: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function Testimonials() {
  // Duplicate testimonials array for seamless scrolling
  const testimonials: Testimonial[] = [
    {
      initials: "RG",
      name: "Rahul Gupta",
      position: "Corporate Lawyer, Delhi",
      text: "The document analysis feature has saved me countless hours reviewing contracts. It accurately identifies key clauses and potential issues that need attention."
    },
    {
      initials: "PS", 
      name: "Priya Sharma",
      position: "Legal Consultant, Mumbai",
      text: "The flowchart generator has been invaluable for explaining complex legal procedures to clients. It makes my job easier and improves client satisfaction."
    },
    {
      initials: "AK",
      name: "Amit Kumar", 
      position: "Law Firm Partner, Bangalore",
      text: "The AI Legal Chatbot has become our 24/7 first-line response for client inquiries. It handles routine questions efficiently, allowing our team to focus on complex matters."
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 min-w-[350px] mx-4">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-xl mr-4">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-slate-500 text-sm">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-slate-700 mb-4">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="flex text-amber-400">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Legal Professionals</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how JurisSmart is transforming legal practice for lawyers, law firms, and organizations.
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="overflow-hidden relative">
          <div 
            className="flex"
            style={{
              width: 'calc(350px * 6 + 32px * 6)', // 6 cards * (350px width + 32px margin)
              animation: 'marquee 20s linear infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-350px * 3 - 32px * 3));
          }
        }
      `}</style>
    </section>
  );
}