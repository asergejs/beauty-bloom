
import { Palette, Spa, Face, Lipstick } from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in"
      style={{animationDelay: `${delay}s`}}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-beauty-100 rounded-full text-beauty-600">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-serif ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Face,
      title: "Facial Treatments",
      description: "Customized facials targeting specific skin concerns, from hydration to anti-aging solutions.",
      delay: 0.2
    },
    {
      icon: Spa,
      title: "Skin Therapy",
      description: "Advanced skin therapies including microdermabrasion, chemical peels, and LED treatments.",
      delay: 0.3
    },
    {
      icon: Lipstick,
      title: "Makeup Services",
      description: "Professional makeup application for special events, photoshoots, or everyday glam.",
      delay: 0.4
    },
    {
      icon: Palette,
      title: "Beauty Consulting",
      description: "Personalized beauty consultations to help you find the right products and routines.",
      delay: 0.5
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-fade-in">Our Beauty Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            Discover our range of personalized beauty treatments designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
