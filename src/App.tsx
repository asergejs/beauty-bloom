
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { BookingProvider } from "./contexts/BookingContext";
import BookingSheet from "./components/BookingSheet";
import { useBooking } from "./contexts/BookingContext";

const queryClient = new QueryClient();

const BookingWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isBookingOpen, closeBooking } = useBooking();
  return (
    <>
      {children}
      <BookingSheet isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BookingProvider>
        <BrowserRouter>
          <BookingWrapper>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BookingWrapper>
        </BrowserRouter>
      </BookingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
