
import React, { createContext, useContext, useState } from 'react';

// Define the available times for each day of the week
const DEFAULT_AVAILABLE_TIMES = {
  0: [], // Sunday - closed
  1: [], // Monday - closed
  2: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"], // Tuesday
  3: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"], // Wednesday
  4: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"], // Thursday
  5: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"], // Friday
  6: ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM"], // Saturday
};

// Define the booking context type
interface BookingContextType {
  isBookingOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
  getAvailableTimesForDate: (date: Date) => string[];
  updateAvailableTimes: (dayOfWeek: number, times: string[]) => void;
  availableTimes: { [key: number]: string[] };
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [availableTimes, setAvailableTimes] = useState(DEFAULT_AVAILABLE_TIMES);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const getAvailableTimesForDate = (date: Date): string[] => {
    const dayOfWeek = date.getDay();
    return availableTimes[dayOfWeek] || [];
  };

  const updateAvailableTimes = (dayOfWeek: number, times: string[]) => {
    setAvailableTimes(prev => ({
      ...prev,
      [dayOfWeek]: times,
    }));
  };

  return (
    <BookingContext.Provider 
      value={{ 
        isBookingOpen, 
        openBooking, 
        closeBooking, 
        getAvailableTimesForDate, 
        updateAvailableTimes,
        availableTimes 
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
