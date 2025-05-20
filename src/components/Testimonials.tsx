
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
      name: "Alexandra Rivera",
      role: "Client for 3+ Years",
      text: "Sofia's signature facial treatment completely transformed my skin. After struggling with persistent acne for years, my complexion is now consistently clear. Her expertise and personalized approach are unmatched.",
      imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Jennifer Clarke",
      role: "Wedding Client",
      text: "I booked Sofia for my wedding day makeup after being impressed by her consultation approach. She created a look that enhanced my features while still feeling like myself. My makeup lasted flawlessly through tears, dancing, and photographs.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "David Chen",
      role: "Skincare Client",
      text: "After my consultation with Sofia, I finally understand my skin type and needs. The personalized regimen she created has made a remarkable difference - even my colleagues have commented on how refreshed I look. Truly worth the investment.",
      imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-beauty-50 to-gold-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from real clients. See how our personalized approach to beauty has transformed lives and boosted confidence.
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
