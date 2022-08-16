"use strict";
const MembersDB = require('../Models/MembersDB');
const Members = require('../Models/Members');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { NULL } = require('mysql/lib/protocol/constants/types');
var membersDB = new MembersDB();
var secret = "secretkey";

function getAllMembers(request, respond) {
    membersDB.getAllMembers(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addMember(request, respond) {
    var password = bcrypt.hashSync(request.body.password, 10);
    var members = new Members(null, request.body.user_name, password, request.body.phone_number, request.body.first_name, request.body.last_name, request.body.email, request.body.address, request.body.gender);
    //password = bcrypt.hashSync(password, 10);
    membersDB.addMember(members, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function loginMember(request, respond){
    var username = request.body.user_name;
    var password = request.body.password;
    membersDB.loginMember(username ,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            //console.log(password);
            const hash = result[0].password;
            console.log(result);
            var flag = bcrypt.compareSync(password,hash);
            if (flag){
                var token = jwt.sign(username,secret);
                respond.json({result:token});
            } 
            else {
                respond.json({result:"Username or Password is incorrect"});
            }
        }
    });
}
function updateMember(request, respond) {
    var username = request.body.user_name;
    var phone_number = request.body.phone_number;
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
    } catch (error) {
        respond.json({ result: "invalid token" });
    }
    membersDB.updateMember(username, phone_number, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function deleteMember(request, respond) {
    var user_name = request.body.user_name;
    membersDB.deleteMember(user_name, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getAllMembers, addMember, updateMember, deleteMember, loginMember };