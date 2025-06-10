
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BookingSummary from "./BookingSummary";

interface ContactFormProps {
  name: string;
  email: string;
  phone: string;
  notes: string;
  service: string | null;
  date: Date | undefined;
  time: string | null;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
  onNotesChange: (notes: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactForm = ({
  name,
  email,
  phone,
  notes,
  service,
  date,
  time,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onNotesChange,
  onSubmit
}: ContactFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 animate-fade-in">
      <h3 className="text-sm font-medium mb-2">Your Information</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm block mb-1">
            Full Name *
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="text-sm block mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="text-sm block mb-1">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="notes" className="text-sm block mb-1">
            Special Requests (optional)
          </label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            rows={3}
          />
        </div>
        
        <BookingSummary service={service} date={date} time={time} />
      </div>
    </form>
  );
};

export default ContactForm;
