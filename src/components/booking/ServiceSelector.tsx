
import { Check } from "lucide-react";

interface ServiceSelectorProps {
  service: string | null;
  onServiceChange: (service: string) => void;
}

const SERVICES = [
  "Signature Facial",
  "Advanced Skin Analysis",
  "Anti-Aging Treatment",
  "Hydrating Glow Boost",
  "Acne Management",
  "Customized Consultation"
];

const ServiceSelector = ({ service, onServiceChange }: ServiceSelectorProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h3 className="text-sm font-medium mb-2">Select Service</h3>
      <div className="grid grid-cols-1 gap-2">
        {SERVICES.map((availableService) => (
          <button
            key={availableService}
            onClick={() => onServiceChange(availableService)}
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
  );
};

export default ServiceSelector;
