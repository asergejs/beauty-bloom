
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-5/12 mb-10 md:mb-0 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-beauty-200 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1594225513388-8a640391eee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Sofia Martinez, Master Esthetician"
                className="w-full h-auto rounded-xl shadow-lg object-cover relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-beauty-100 z-0"></div>
            </div>
          </div>
          
          <div className="md:w-7/12 md:pl-16">
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Badge className="mb-4 bg-beauty-100 text-beauty-700 hover:bg-beauty-200">Meet Your Specialist</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Sofia Martinez, Master Esthetician
              </h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience and training at the prestigious Paris Academy of Cosmetic Arts, I've dedicated my career to the science and artistry of skincare. My approach combines time-tested European techniques with cutting-edge innovations.
              </p>
              <p className="text-gray-600 mb-6">
                After serving as lead esthetician at renowned spas in New York and Los Angeles, I established Serenity Beauty Studio to offer truly personalized care. My philosophy centers on enhancing what makes you uniquely beautiful, not conforming to passing trends.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="p-4 bg-gold-50 rounded-lg">
                <h3 className="text-3xl font-serif font-medium text-beauty-800">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-beauty-50 rounded-lg">
                <h3 className="text-3xl font-serif font-medium text-beauty-800">3K+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
