"use strict";

var db = require('../db-connections');
class RestaurantDB{
    getAllRestaurant (callback){
        var sql = "SELECT * from movie_info.restaurant";
        db.query(sql, callback);
    }
    findrestaurantlocation(callback){
        var sql = "SELECT * FROM movie_info.restaurant WHERE cuisine LIKE '%location%'";
        db.query(sql, callback);
    }

    getrestaurantBycuisine(cuisine, callback){
        var sql = "SELECT * FROM movie_info.restaurant WHERE cuisine LIKE '%" + cuisine + "%'";
        db.query(sql, callback);
    }
    searchrestaurant(restaurant_name, callback){
        var sql = "SELECT * FROM movie_info.restaurant WHERE restaurant_id = ? ";
        db.query(sql,[restaurant_name],callback);
    }
}


module.exports = RestaurantDB;
