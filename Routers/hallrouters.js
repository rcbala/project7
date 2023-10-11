import express from "express"
import {
  getRoomsDetails,
  createRooms,
  bookingRoom,
  AllbookedRooms,
  AllCustomers,
  HowmanyTimesCustomerBooked,
} from "../controller/hallcontroller.js";


const router = express.Router()

router.get("/data", getRoomsDetails);
router.post("/create", createRooms);
router.post("booking/:id", bookingRoom);
router.get("viewbooking", AllbookedRooms);
router.get('customers', AllCustomers)
router.get('/customer/:name',HowmanyTimesCustomerBooked)



export default router;