"use strict";

var db = require('../db-connections');
class Restaurant_DetailsDB{
    getAllRestaurant (callback){
        var sql = "SELECT * from movie_info.restaurant_details";
        db.query(sql, callback);
    }

}


module.exports = Restaurant_DetailsDB;
