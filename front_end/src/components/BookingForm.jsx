import React, { useState } from "react";
import toast,{Toaster} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const BookingForm = ({ onBookingSubmit }) => {
  const [formData, setFormData] = useState({
    guests: "",
    date: "",
    time: "",
    name: "",
    contactNumber: "",
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(formData);
    toast.success("Table book Successfully")
    navigate("/booking-summary")
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Booking Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="guests" className="block text-sm text-gray-600">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="Enter number of guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm text-gray-600">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm text-gray-600">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-sm text-gray-600">
            Contact Number
          </label>
          <input
            type="number"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
          <Toaster/>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
