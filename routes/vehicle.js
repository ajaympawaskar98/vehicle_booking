const express = require('express');
const router = express.Router();
const vehicleController = require("../controller/vehicle");
const {validateVehicle , validateViewVehicleByCustomerID ,validateUpdateVehicleByCustomerId , validateDeleteVehicleByCustomerID} = require("../validation/vehicle/vehicleValidation");


router.post('/vehicleBooking',validateVehicle,vehicleController.addVehicleBookingByCustomer);
router.get('/getVehicleBooking',validateViewVehicleByCustomerID,vehicleController.getVehicleBookingByCustomerId);
router.post('/updateVehicleBooking',validateUpdateVehicleByCustomerId , vehicleController.updateVehicleBookingByCustomerId);
router.delete('/deleteVehicleBooking',validateDeleteVehicleByCustomerID ,vehicleController.deleteBookingByCustomerId);

// router.get('/viewCustomer',customerController.view);


module.exports = router;

