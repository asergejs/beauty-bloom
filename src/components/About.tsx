
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
                src="https://images.unsplash.com/photo-1543297031-d102cd432d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Beauty Specialist"
                className="w-full h-auto rounded-xl shadow-lg object-cover relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-beauty-100 z-0"></div>
            </div>
          </div>
          
          <div className="md:w-7/12 md:pl-16">
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Badge className="mb-4 bg-beauty-100 text-beauty-700 hover:bg-beauty-200">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Hi, I'm Isabella Thompson
              </h2>
              <p className="text-gray-600 mb-6">
                With over 10 years of experience in the beauty industry, I've dedicated my career to helping clients look and feel their best. After training at the prestigious London Academy of Beauty, I worked at several high-end spas before opening my own studio.
              </p>
              <p className="text-gray-600 mb-6">
                My approach is centered on enhancing your natural beauty rather than masking it. I believe that each client is unique, which is why I tailor all my treatments to your specific needs and preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="p-4 bg-gold-50 rounded-lg">
                <h3 className="text-3xl font-serif font-medium text-beauty-800">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-beauty-50 rounded-lg">
                <h3 className="text-3xl font-serif font-medium text-beauty-800">2K+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
