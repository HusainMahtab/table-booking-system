import mongoose from "mongoose"

const BookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  name: { type: String, required: true },
  contactNumber: { type: Number, required: true },
});

export const Booking=mongoose.model("Booking",BookingSchema)