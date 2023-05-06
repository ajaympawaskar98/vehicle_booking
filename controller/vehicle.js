const Vehicles = require("../models/vehicle");
const AppError = require("../utils/appError");
const { validationResult } = require("express-validator");

exports.addVehicleBookingByCustomer = async (req,res,next) =>
{

let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "validation failed,entered data is incorrect",
        errors: errors.array(),
      });
    }
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;  
  let wheels = req.body.wheels;
  let vehicle_type  = req.body.vehicle_type;
  let vehicle_name  = req.body.vehicle_name;
  let start_date  = req.body.start_date;
  let end_date =  req.body.end_date;

 

try {
    
    if((wheels == 2 && vehicle_type == "bike") || (wheels == 4 && vehicle_type == "car") || (wheels == 6 && vehicle_type == "truck")){
         let result = await Vehicles.add(first_name,last_name,wheels,vehicle_type,vehicle_name,start_date,end_date);
        console.log("result---",result);
        return res.status(200).json({
            status:200,
            message:"Vehicle booking Added Successfully",
        })
    }
    else{
        res.status(400).json({status:400,message: "Select Wheels and Vehicle type properly and check start date should be less than end date    "});
    }
    
    


    
} catch (error) {
    next(error)
}
}

exports.getVehicleBookingByCustomerId = async (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "validation failed,entered data is incorrect",
        errors: errors.array(),
      });
    }
  
    let customer_id = req.body.customer_id;
  
    try {
      let result = await Vehicles.view(customer_id);
      
        if (!result.length) {
          return res
          .status(200)
          .json({ status: 200, error: null, message : "no bookings found by this id",response: result });
        }
        return res
          .status(200)
          .json({ status: 200, error: null, response: result });
    
    } catch (e) {
      next(e);
    }
  };


  exports.updateVehicleBookingByCustomerId = async (req,res,next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({
          message: 'validation failed,entered data is incorrect',
          errors: errors.array()
        });
    }


    let first_name = req.body.first_name;
    let last_name = req.body.last_name;  
    let wheels = req.body.wheels;
    let vehicle_type  = req.body.vehicle_type;
    let vehicle_name  = req.body.vehicle_name;
    let start_date  = req.body.start_date;
    let end_date =  req.body.end_date;
    let customer_id = req.body.customer_id;

    try {
        if((wheels == 2 && vehicle_type == "bike") || (wheels == 4 && vehicle_type == "car") || (wheels == 6 && vehicle_type == "truck")){
            let result = await Vehicles.update(customer_id,first_name,last_name,wheels,vehicle_type,vehicle_name,start_date,end_date);
           console.log("result---",result);
           return res.status(200).json({
               status:200,
               message:"Vehicle booking Updated Successfully",
           })
       }
       else{
           res.status(400).json({status:400,message: "Select Wheels and Vehicle type properly"});
       }
  
  
    } catch (e) {
      next(e);
    }
  } 

  exports.deleteBookingByCustomerId = async (req,res,next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({
          message: 'validation failed,entered data is incorrect',
          errors: errors.array()
        });
    }


    let customer_id = req.body.customer_id

    try {
      let result = await Vehicles.delete(customer_id);
  
      if (!result.affectedRows) 
      {
        throw new AppError("Sorry , You cannot Delete the issue because the Issue has been already in  Processing or it has been resolved", 400);
      }
      return res.status(200).json({
        status: 200,
        message: "Support Deleted successfully"
      });
  
  
    } catch (e) {
      next(e);
    }
  }