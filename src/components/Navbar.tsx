
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-medium text-beauty-800">
            Bella Beauty
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-beauty-500 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-beauty-500 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-beauty-500 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-beauty-500 transition-colors">
              Contact
            </a>
            <Button size="sm" className="bg-beauty-500 hover:bg-beauty-600">
              Book Now
            </Button>
          </div>
          
          <button 
            className="md:hidden text-beauty-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 animate-fade-in">
            <div className="flex flex-col space-y-3 px-4">
              <a 
                href="#services" 
                className="text-sm font-medium hover:text-beauty-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-beauty-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="text-sm font-medium hover:text-beauty-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-beauty-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                size="sm" 
                className="bg-beauty-500 hover:bg-beauty-600 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
