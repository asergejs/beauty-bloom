
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface BookingSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_TIMES = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
];

const SERVICES = [
  "Signature Facial",
  "Advanced Skin Analysis",
  "Anti-Aging Treatment",
  "Hydrating Glow Boost",
  "Acne Management",
  "Customized Consultation"
];

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
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-sm font-medium mb-2">Select Date & Time</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
                disabled={(date) => {
                  // Disable Sundays, Mondays, and dates before today
                  const day = date.getDay();
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today || day === 0 || day === 1;
                }}
              />
              
              {date && (
                <div className="animate-fade-in">
                  <h3 className="text-sm font-medium mb-2">Available Times for {format(date, "MMMM d, yyyy")}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {AVAILABLE_TIMES.map((availableTime) => (
                      <button
                        key={availableTime}
                        onClick={() => setTime(availableTime)}
                        className={`p-2 text-sm rounded-md transition ${
                          time === availableTime
                            ? "bg-beauty-500 text-white"
                            : "bg-beauty-50 hover:bg-beauty-100"
                        }`}
                      >
                        {availableTime}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-sm font-medium mb-2">Select Service</h3>
              <div className="grid grid-cols-1 gap-2">
                {SERVICES.map((availableService) => (
                  <button
                    key={availableService}
                    onClick={() => setService(availableService)}
                    className={`p-3 text-left rounded-md transition flex justify-between items-center ${
                      service === availableService
                        ? "bg-beauty-500 text-white"
                        : "bg-beauty-50 hover:bg-beauty-100"
                    }`}
                  >
                    <span>{availableService}</span>
                    {service === availableService && <Check size={16} />}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <h3 className="text-sm font-medium mb-2">Your Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm block mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
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
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div className="pt-2">
                  <p className="text-sm font-medium">Appointment Summary:</p>
                  <div className="bg-beauty-50 p-3 rounded-md mt-2 space-y-1 text-sm">
                    <p><span className="font-medium">Service:</span> {service}</p>
                    <p><span className="font-medium">Date:</span> {date && format(date, "MMMM d, yyyy")}</p>
                    <p><span className="font-medium">Time:</span> {time}</p>
                  </div>
                </div>
              </div>
            </form>
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
