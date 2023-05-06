const db = require("../db/database");

let Vehicles = (vehicles) =>{
    this.first_name = vehicles.first_name;
    this.last_name = vehicles.last_name;
    this.wheels = vehicles.wheels;
    this.vehicle_type = vehicles.vehicle_type;
    this.vehicle_name = vehicles.vehicle_name;
    this.start_date = vehicles.start_date;
    this.end_date = vehicles.end_date;
    
}


Vehicles.add = (first_name,last_name,wheels,vehicle_type,vehicle_name,start_date,end_date) =>{
    return new Promise ((resolve,reject)=>{
    let sql = `INSERT INTO customers(first_name,last_name,wheels,vehicle_type,vehicle_name,start_date,end_date) VALUES ('${first_name}','${last_name}','${wheels}','${vehicle_type}','${vehicle_name}','${start_date}','${end_date}')`;
    console.log("----sql-----",sql);
        db.query(sql,(err,res)=>{
            if(err){
                return reject(err);
            }
            return resolve(res);
        })
    })
    
}

Vehicles.update = (customer_id,first_name,last_name,wheels,vehicle_type,vehicle_name,start_date,end_date) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE customers SET first_name = '${first_name}' , last_name = '${last_name}',wheels = '${wheels}',vehicle_type = '${vehicle_type}',vehicle_name = '${vehicle_name}',start_date = '${start_date}',end_date = '${end_date}' WHERE id ='${customer_id}'`;
        console.log("find user", sql);
        db.query(sql, (err, res, fields) => {
            if (err) {
                console.log("error", err);
                return reject(err);
            }
            resolve(res);
        });
    });
};


Vehicles.view = (customer_id) => {
    return new Promise((resolve, reject) => {
     let sql = `SELECT * FROM customers WHERE id = '${customer_id}'`;
          db.query(sql, (err, res) => {
              if (err)
              {
                return reject(err);
              }
              return resolve(res);
          });
      });
    };

Vehicles.delete = (customer_id) =>{
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM customers WHERE id = '${customer_id}'`;
    
            db.query(sql, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    };    

module.exports = Vehicles;