
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useBooking } from "@/contexts/BookingContext";

interface DateTimeSelectorProps {
  date: Date | undefined;
  time: string | null;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
}

const DateTimeSelector = ({ date, time, onDateChange, onTimeChange }: DateTimeSelectorProps) => {
  const { getAvailableTimesForDate } = useBooking();

  const availableTimesForSelectedDate = date ? getAvailableTimesForDate(date) : [];

  return (
    <div className="space-y-4 animate-fade-in">
      <h3 className="text-sm font-medium mb-2">Select Date & Time</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={onDateChange}
        className="rounded-md border mx-auto"
        disabled={(date) => {
          // Disable days with no available times and dates before today
          const day = date.getDay();
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const availableTimes = getAvailableTimesForDate(date);
          return date < today || availableTimes.length === 0;
        }}
      />
      
      {date && availableTimesForSelectedDate.length > 0 && (
        <div className="animate-fade-in">
          <h3 className="text-sm font-medium mb-2">Available Times for {format(date, "MMMM d, yyyy")}</h3>
          <div className="grid grid-cols-2 gap-2">
            {availableTimesForSelectedDate.map((availableTime) => (
              <button
                key={availableTime}
                onClick={() => onTimeChange(availableTime)}
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
      
      {date && availableTimesForSelectedDate.length === 0 && (
        <div className="text-center p-4 bg-red-50 text-red-600 rounded-md">
          No available time slots for the selected date.
        </div>
      )}
    </div>
  );
};

export default DateTimeSelector;
