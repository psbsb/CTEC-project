"use strict";

var db = require('../db-connections');
class RestaurantDB{
    getAllRestaurant (callback){
        var sql = "SELECT * from restraunt_review.restaurant";
        db.query(sql, callback);
    }
    findrestaurantlocation(callback){
        var sql = "SELECT * FROM restraunt_review.restaurant WHERE cuisine LIKE '%location%'";
        db.query(sql, callback);
    }

    getrestaurantBycuisine(cuisine, callback){
        var sql = "SELECT * FROM restraunt_review.restaurant WHERE cuisine LIKE '%" + cuisine + "%'";
        db.query(sql, callback);
    }
    searchrestaurant(restaurant_name, callback){
        var sql = "SELECT * FROM restraunt_review.restaurant WHERE restaurant_id = ? ";
        db.query(sql,[restaurant_name],callback);
    }
}


module.exports = RestaurantDB;