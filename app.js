const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();


const vehicleBookingRouter = require('./routes/vehicle');


app.use(bodyParser.urlencoded({extended:false})); //x-www-form-urlencoded <form>
app.use(express.json()); //application/json 
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());



app.use('/vehicle',vehicleBookingRouter)


const port = Number(process.env.PORT || 8081);
app.listen(port , ()=>{
    console.log(`Server is running on ${port}`)
})