"use strict";
const Restaurant_DetailstDB = require('../Models/Restaurant_DetailsDB');

var restaurantdetailsDB = new Restaurant_DetailstDB();

function getAllRestaurantdetails (request,respond){
    restaurantdetailsDB.getAllRestaurant (function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    });
}
module.exports = {getAllRestaurantdetails};