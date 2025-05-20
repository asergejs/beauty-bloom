
import { Palette, Flower, User, CircleUser } from "lucide-react";

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
      icon: CircleUser,
      title: "Signature Facial Treatments",
      description: "Experience our award-winning facial treatments using organic ingredients. Our signature rose petal facial leaves skin glowing for weeks.",
      delay: 0.2
    },
    {
      icon: Flower,
      title: "Advanced Skin Therapy",
      description: "Transform your complexion with our state-of-the-art treatments including diamond microdermabrasion and custom-formulated chemical peels.",
      delay: 0.3
    },
    {
      icon: User,
      title: "Professional Makeup Artistry",
      description: "From natural everyday looks to glamorous event makeup, our certified makeup artists use premium products for flawless, long-lasting results.",
      delay: 0.4
    },
    {
      icon: Palette,
      title: "Personalized Beauty Consultation",
      description: "Discover your perfect skincare routine with a comprehensive analysis and custom product recommendations tailored to your unique skin needs.",
      delay: 0.5
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-fade-in">Premium Beauty Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            Each treatment is customized to enhance your natural beauty using luxury products and cutting-edge techniques perfected over 15 years in the industry.
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
