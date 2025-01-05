import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailabilityDisplay = ({ date }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  function formatDate(inputDate) {
    if (!inputDate) {
      console.error("Date is not provided or invalid:", inputDate);
      return null;
    }
    if (/\d{4}-\d{2}-\d{2}/.test(inputDate)) {
      return `${inputDate}T00:00:00.000Z`;
    }
    const parts = inputDate.split("-");
    if (parts.length !== 3) {
      console.error("Date does not match expected format:", inputDate);
      return null;
    }
    let [day, month, year] = parts;
    if (year.length === 2) {
      year = `20${year}`; // Assumes 21st century
    }

    if (
      isNaN(day) || isNaN(month) || isNaN(year) ||
      day < 1 || day > 31 ||
      month < 1 || month > 12
    ) {
      console.error("Invalid date components:", { day, month, year });
      return null;
    }

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00.000Z`;
  }

  // Fetch bookings from the API
  const fetchBookings = async () => {
    const formattedDate = formatDate(date);
    if (!formattedDate) {
      console.error("Failed to format date. Skipping fetch.");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/bookings/all/${formattedDate}`
      );
      console.log("Booking response:", response);
      setAvailableSlots(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching availability:", error);
    }
  };

  // Fetch bookings when the date changes
  useEffect(() => {
    fetchBookings();
  }, [date]);

  const formatFetchDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0"); 
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const year = date.getFullYear().toString().slice(-2); 
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-white">Available Slots</h2>
      {availableSlots.length > 0 ? (
        <ul className="space-y-2">
          {availableSlots.map((slot, index) => (
            <li key={index} className="p-2 border">
              {/* Adjust the following line to display the properties you need */}
              <div className='text-white text-center rounded md:w-[300px] bg-green-500 p-2'>
                <p>Date: {formatFetchDate(slot.date)}</p>
                <p>Time: {slot.time}</p>
                <p>Guests: {slot.guests}</p>
                <p>Name: {slot.name}</p>
                <p>Contact: {slot.contactNumber}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No slots available.</p>
      )}
    </div>
  );
};

export default AvailabilityDisplay;
