
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-gradient-to-r from-beauty-50 to-gold-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="block">Reveal Your</span>
              <span className="text-beauty-500">Natural Beauty</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md animate-fade-in" style={{animationDelay: '0.4s'}}>
              Experience personalized beauty treatments that enhance your unique features and boost your confidence.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-beauty-500 hover:bg-beauty-600">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-beauty-300 text-beauty-800 hover:bg-beauty-50">
                View Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-beauty-100 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gold-100 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Beauty Treatment"
                className="w-full h-auto rounded-xl shadow-lg object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
