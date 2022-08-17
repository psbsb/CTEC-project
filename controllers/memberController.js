"use strict";
const MembersDB = require('../Models/MembersDB');
const Members = require('../Models/Members');
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
