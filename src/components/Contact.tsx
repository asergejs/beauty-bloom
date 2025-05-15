
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll respond shortly.",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to book an appointment? Reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-beauty-700 mb-2">Location</h4>
                <p className="text-gray-600">
                  123 Beauty Street<br />
                  San Francisco, CA 94107
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-beauty-700 mb-2">Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 7pm<br />
                  Saturday: 9am - 5pm<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-beauty-700 mb-2">Contact</h4>
                <p className="text-gray-600">
                  Email: info@bellabeauty.com<br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full bg-beauty-500 hover:bg-beauty-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
