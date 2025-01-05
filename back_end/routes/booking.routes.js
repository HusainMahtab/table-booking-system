import {Router} from "express"
import {createBooking,getAllBookings,deleteBooking,TableBookings} from "../controllers/booking.controller.js"
const router=Router()

router.route("/create_booking").post(createBooking)
router.route("/all/:date").get(getAllBookings)
router.route("/delete/:_id").delete(deleteBooking)
router.route("/orders").get(TableBookings)

export default router
