let { body } = require("express-validator");

exports.validateVehicle = [
    body('first_name')
        .exists()
        .withMessage('Your first name is required')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long'),

    body('last_name')
        .exists()
        .withMessage('Your last name is required')
        .isLength({ min: 1 })
        .withMessage('Must be at least 1 chars long'),

    body('wheels')
        .exists()
        .notEmpty()
        .isIn(["2","4","6"])
        .withMessage('Must select only 2  4 or 6 wheels type'),

    body('vehicle_type')
        .exists()
        .notEmpty()
        .isIn(["bike","car","truck"])
        .withMessage('Must select only bike or car or truck vehicle type'),

    body('vehicle_name')
        .notEmpty()
        .exists()
        .withMessage('vehicle name is required'),

    body("start_date")
        .trim()
        .isDate({format: "YYYY-MM-DD"})
        .withMessage('Must be a valid date'),

     body("end_date")
        .trim()
        .isDate({format: "YYYY-MM-DD"})
        .withMessage('Must be a valid date')
];


exports.validateViewVehicleByCustomerID = [
    body("customer_id")
        .notEmpty()
        .exists()
        .isNumeric()
        .withMessage("Must be only Numeric"),
];

exports.validateDeleteVehicleByCustomerID = [
    body("customer_id")
        .notEmpty()
        .exists()
        .isNumeric()
        .withMessage("Must be only Numeric"),
];

exports.validateUpdateVehicleByCustomerId = [


        body("customer_id")
        .notEmpty()
        .exists()
        .isNumeric()
        .withMessage("Must be only Numeric"),
        
        body('first_name')
        .optional()
            // .exists()
            // .withMessage('Your first name is required')
            .isLength({ min: 3 })
            .withMessage('Must be at least 3 chars long'),
    
        body('last_name')
        .optional()
            // .exists()
            // .withMessage('Your last name is required')
            .isLength({ min: 1 })
            .withMessage('Must be at least 1 chars long'),
    
        body('wheels')
        .optional()
            // .exists()
            // .notEmpty()
            .isIn(["2","4","6"])
            .withMessage('Must select only 2  4 or 6 wheels type'),
    
        body('vehicle_type')
        .optional()
            // .exists()
            // .notEmpty()
            .isIn(["bike","car","truck"])
            .withMessage('Must select only bike or car or truck vehicle type'),
    
        body('vehicle_name')
        .optional(),
            // .notEmpty()
            // .exists()
            // .withMessage('vehicle name is required'),
    
        body("start_date")
        .optional()
            .trim()
            .isDate({format: "YYYY-MM-DD"})
            .withMessage('Must be a valid date'),
    
         body("end_date")
         .optional()
            .trim()
            .isDate({format: "YYYY-MM-DD"})
            .withMessage('Must be a valid date')
    
]