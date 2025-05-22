
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useBooking } from "@/contexts/BookingContext";

const Contact = () => {
  const { toast } = useToast();
  const { openBooking } = useBooking();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request received!",
      description: "Thank you for reaching out. Sofia will personally respond within 24 hours.",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Start Your Beauty Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about which treatment is right for you? Ready to schedule your personalized consultation? Sofia personally responds to all inquiries within 24 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-serif mb-6">Studio Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-beauty-700 mb-2">Location</h4>
                <p className="text-gray-600">
                  Serenity Beauty Studio<br />
                  527 Luminous Lane, Suite 202<br />
                  Beverly Hills, CA 90210
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-beauty-700 mb-2">Studio Hours</h4>
                <p className="text-gray-600">
                  Tuesday - Friday: 10am - 7pm<br />
                  Saturday: 9am - 5pm<br />
                  Sunday & Monday: Closed
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-beauty-700 mb-2">Contact Details</h4>
                <p className="text-gray-600">
                  Email: sofia@serenitybeautystudio.com<br />
                  Studio: (310) 555-8732<br />
                  For urgent inquiries: (310) 555-9014
                </p>
              </div>
              
              <div className="pt-2">
                <Button onClick={openBooking} className="bg-beauty-500 hover:bg-beauty-600">
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Full name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm">
                  Interested In
                </label>
                <Input id="subject" placeholder="Which service interests you most?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Your Message
                </label>
                <Textarea id="message" placeholder="Tell us about your skincare goals or questions" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full bg-beauty-500 hover:bg-beauty-600">
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
