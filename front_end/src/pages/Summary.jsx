import React, { useEffect, useState } from 'react';

const Summary = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/bookings')
      .then((res) => res.json())
      .then((data) => setBookings(data.bookings))
      .catch((err) => console.error('Error fetching bookings:', err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Booking Summary</h2>
      {bookings.length > 0 ? (
        <ul className="space-y-2">
          {bookings.map((booking, index) => (
            <li key={index} className="p-2 border">
              {booking.name} - {booking.date} at {booking.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default Summary;
