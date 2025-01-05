import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import BookingForm from './components/BookingForm';
import AvailabilityDisplay from './components/AvailabilityDisplay';
import BookingSummary from './components/BookingSummary';
import CalendarView from './components/CalendarView';
import Summary from './pages/Summary';
import NotFound from './pages/NotFound';
import axios from "axios"
import Header from './components/Header';
import AllBookingsOrders from './components/AllBookingsOrders';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBookingSubmit = async(details) => {
    setBookingDetails(details);
    // Send data to backend
    console.log(import.meta.env.VITE_API_URL)
    try {
      const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/bookings/create_booking`,details)
      console.log("create booking response",response)
    } catch (error) {
       console.error("error while creating booking",error)
    }
    
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]); // Format date as YYYY-MM-DD
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking-form"
            element={
              <div className='h-full md:flex justify-center grid p-4 bg-zinc-900'>
                 <BookingForm onBookingSubmit={handleBookingSubmit} />
                {selectedDate && (
                  <AvailabilityDisplay date={selectedDate} />
                )}
                <CalendarView onDateSelect={handleDateSelect} />
              </div>
            }
          />
          <Route
            path="/booking-summary"
            element={
              bookingDetails ? (
                <BookingSummary bookingDetails={bookingDetails} />
              ) : (
                <p>No booking details available.</p>
              )
            }
          />
          <Route path="/summary" element={<Summary />} />
          <Route path="/all_bookings" element={<AllBookingsOrders/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
