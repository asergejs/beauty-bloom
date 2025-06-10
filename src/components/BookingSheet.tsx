
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import DateTimeSelector from "./booking/DateTimeSelector";
import ServiceSelector from "./booking/ServiceSelector";
import ContactForm from "./booking/ContactForm";

interface BookingSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingSheet = ({ isOpen, onClose }: BookingSheetProps) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    setTime(null); // Reset time when date changes
  };

  const handleNextStep = () => {
    if (step === 1 && !date) {
      toast({
        title: "Please select a date",
        variant: "destructive",
      });
      return;
    }

    if (step === 1 && !time) {
      toast({
        title: "Please select a time",
        variant: "destructive",
      });
      return;
    }

    if (step === 2 && !service) {
      toast({
        title: "Please select a service",
        variant: "destructive",
      });
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Booking Successful!",
        description: `Your appointment for ${service} on ${format(date!, "MMMM d, yyyy")} at ${time} has been confirmed.`,
      });
      
      // Reset the form
      setDate(undefined);
      setTime(null);
      setService(null);
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setStep(1);
      setIsSubmitting(false);
      
      // Close the sheet
      onClose();
    }, 1500);
  };

  const handleClose = () => {
    // Reset the form when closing
    setDate(undefined);
    setTime(null);
    setService(null);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setStep(1);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="overflow-y-auto sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-beauty-800 font-serif">Book Your Beauty Session</SheetTitle>
          <SheetDescription>
            Schedule your personalized treatment with Sofia Martinez
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6">
          {step === 1 && (
            <DateTimeSelector 
              date={date}
              time={time}
              onDateChange={handleDateChange}
              onTimeChange={setTime}
            />
          )}
          
          {step === 2 && (
            <ServiceSelector 
              service={service}
              onServiceChange={setService}
            />
          )}
          
          {step === 3 && (
            <ContactForm
              name={name}
              email={email}
              phone={phone}
              notes={notes}
              service={service}
              date={date}
              time={time}
              onNameChange={setName}
              onEmailChange={setEmail}
              onPhoneChange={setPhone}
              onNotesChange={setNotes}
              onSubmit={handleSubmit}
            />
          )}
          
          <div className="flex justify-between pt-4">
            {step > 1 ? (
              <Button 
                variant="outline" 
                onClick={handlePrevStep}
                disabled={isSubmitting}
              >
                Back
              </Button>
            ) : (
              <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
                Cancel
              </Button>
            )}
            
            {step < 3 ? (
              <Button onClick={handleNextStep} className="bg-beauty-500 hover:bg-beauty-600">
                Next
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                className="bg-beauty-500 hover:bg-beauty-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Confirming..." : "Confirm Booking"}
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BookingSheet;
