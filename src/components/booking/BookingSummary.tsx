
import { format } from "date-fns";

interface BookingSummaryProps {
  service: string | null;
  date: Date | undefined;
  time: string | null;
}

const BookingSummary = ({ service, date, time }: BookingSummaryProps) => {
  return (
    <div className="pt-2">
      <p className="text-sm font-medium">Appointment Summary:</p>
      <div className="bg-beauty-50 p-3 rounded-md mt-2 space-y-1 text-sm">
        <p><span className="font-medium">Service:</span> {service}</p>
        <p><span className="font-medium">Date:</span> {date && format(date, "MMMM d, yyyy")}</p>
        <p><span className="font-medium">Time:</span> {time}</p>
      </div>
    </div>
  );
};

export default BookingSummary;
