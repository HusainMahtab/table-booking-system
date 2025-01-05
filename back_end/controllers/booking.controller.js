import { Booking } from "../models/booking.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const createBooking=async(req,res)=>{
    const {date,time,guests,name,contactNumber} =req.body
    if(!date){
        throw new ApiError(404,"date is required!")
    }
    if(!time){
        throw new ApiError(404,"time is required!")
    }
    if(!guests){
        throw new ApiError(404,"guests is required!")
    }
    if(!name){
        throw new ApiError(404,"name is required!")
    }
    if(!contactNumber){
        throw new ApiError(404,"contactNumber is required!")
    }
    
    try {
        const existingBooking = await Booking.findOne({ date, time });
        if (existingBooking) {
          return res.status(400).json({ message: 'Time slot already booked.' });
        }
        const newBooking = new Booking({ date, time, guests, name, contactNumber });
        await newBooking.save();
        res.status(201).json(newBooking);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

// get all booking by date query
const getAllBookings = async (req, res) => {
    const { date } = req.params;

    console.log("Received date:", date);

    if (!date) {
        throw new ApiError(404, "Date is required!");
    }
    try {
        const parsedDate = new Date(date);

        if (isNaN(parsedDate.getTime())) {
            throw new ApiError(400, "Invalid date format! Use ISO format: YYYY-MM-DD");
        }
        const startOfDay = new Date(parsedDate.setUTCHours(0, 0, 0, 0));
        const endOfDay = new Date(parsedDate.setUTCHours(23, 59, 59, 999));

        const bookings = await Booking.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
        });

        return res
            .status(200)
            .json(new ApiResponse(200, bookings, "Bookings sent successfully"));
    } catch (err) {
        console.error("Error fetching bookings:", err);
        throw new ApiError(500, "Unable to fetch bookings");
    }
};


// fetch all bookings
const TableBookings=async(req,res)=>{
   try {
    const tablebookings=await Booking.find()
    if(!tablebookings){
        throw new ApiError(500,"bookings not found!")
    }
    return res
    .status(200)
    .json(new ApiResponse(200,tablebookings,"bookings found successfully"))
   } catch (error) {
    throw new ApiError(500,"booings not found in db")
   }
}

const deleteBooking=async(req,res)=>{
    const bookingId=req.params._id
    if(!bookingId){
        throw new ApiError(404,"booking Id is required!")
    }
    try {
        const deletedBookings=await Booking.findByIdAndDelete(bookingId)
        if(!deletedBookings){
            throw new ApiError(500,"booking not deleted!")
        }
        return res
        .status(200)
        .json(new ApiResponse(200,{},"booking deleted successfully"))
    } catch (error) {
        throw new ApiError(500,"booking not deleted!",error)
    }
}

export {createBooking,getAllBookings,deleteBooking,TableBookings}