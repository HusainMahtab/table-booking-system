import React from 'react';

const BookingSummary = ({ bookingDetails }) => {
  return (
    <div className='w-full h-[60vh] flex justify-center mt-4 text-white text-center'>
      <div className="p-4 border-[1px] border-green-700 w-[400px] h-[200px] rounded shadow bg-green-500">
      <h2 className="text-white text-xl font-bold">Booking Successful</h2>
      <p>Date: {bookingDetails.date}</p>
      <p>Time: {bookingDetails.time}</p>
      <p>Number of Guests: {bookingDetails.guests}</p>
      <p>Name: {bookingDetails.name}</p>
      <p>Contact: {bookingDetails.contactNumber}</p>
     </div>
    </div>
  );
};

export default BookingSummary;
