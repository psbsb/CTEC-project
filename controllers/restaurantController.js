"use strict";
const RestaurantDB = require('../Models/RestaurantDB');
const sgMail = require('@sendgrid/mail')

var restaurantDB = new RestaurantDB();

function getAllRestaurant(request, respond) {
    restaurantDB.getAllRestaurant(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }

    });
}
function sendemail(request, respond) {
    var email = request.body.email;
    var content = request.body.content;

    sgMail.setApiKey("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")
    const msg = {
        to: email, // Change to your recipient
        from: 'pohshengbao123@gmail.com', // Change to your verified sender
        subject: 'Feedback',
        text: content,
        html: '<strong>'+ content + '</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            respond.json({result:"success"});
        })
        .catch((error) => {
            console.error(error)
            respond.json({result:"fail"});

        })

}
function findrestaurantlocation(request, respond) {
    restaurantDB.findrestaurantlocation(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function getrestaurantBycuisine(request, respond) {
    var cuisine = "fastfood";
    restaurantDB.getrestaurantBycuisine(cuisine, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}

function searchrestaurant(request, respond) {
    var restaurant_name = request.params.restaurant_name;
    restaurantDB.searchrestaurant(restaurant_name, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}


module.exports = { getAllRestaurant, findrestaurantlocation, getrestaurantBycuisine, searchrestaurant, sendemail };