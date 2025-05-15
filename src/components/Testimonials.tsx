
import { useState } from "react";

const TestimonialCard = ({ name, role, text, imageSrc, active = false }) => {
  return (
    <div className={`p-6 rounded-xl transition-all duration-300 ${active ? 'bg-white shadow-md scale-105' : 'bg-gray-50 opacity-75'}`}>
      <div className="flex items-center mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-serif text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="relative">
        <p className="text-gray-600 italic">
          <span className="absolute -left-3 -top-3 text-4xl text-beauty-200">"</span>
          {text}
          <span className="absolute -right-3 bottom-0 text-4xl text-beauty-200">"</span>
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Client",
      text: "Isabella's facial treatments have transformed my skin. Her approach is personalized and truly effective. I've never looked better!",
      imageSrc: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Emily Davis",
      role: "Bride",
      text: "I booked Isabella for my wedding makeup and couldn't be happier. She understood exactly what I wanted and made me feel beautiful on my special day.",
      imageSrc: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Michael Chen",
      role: "Client",
      text: "The skincare consultation with Isabella was eye-opening. She recommended products that actually work for my sensitive skin. Highly recommended!",
      imageSrc: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-beauty-50 to-gold-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer"
            >
              <TestimonialCard 
                name={testimonial.name} 
                role={testimonial.role} 
                text={testimonial.text} 
                imageSrc={testimonial.imageSrc}
                active={index === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
