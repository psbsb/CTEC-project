"use strict"

var db = require('../db-connections');
//const Members = require('./Members');
//const Members = require('./Members');
const user = require('./user');
class MembersDB{
    getAllMembers(callback){
        var sql = "SELECT user_name,phone_number from restraunt_review.member";
        db.query(sql,callback);
    }
    loginMember(user_name, callback){
        var sql = "SELECT password from restraunt_review.member WHERE user_name = ?";
        db.query(sql,[user_name], callback);
    }
    addMember(Members, callback){
        var sql = "INSERT INTO member (user_name,password,phone_number,first_name,last_name,email,address,gender) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [Members.getuser_name(),Members.getpassword(),Members.getphone_number(),Members.getfirst_name(),Members.getlast_name(),Members.getemail(),Members.getaddress(),Members.getgender()], callback);
    }
    updateMember(user_name,phone_number, callback){
        var sql = "UPDATE member SET phone_number = ? WHERE user_name = ?";
        return db.query(sql,[phone_number, user_name], callback);
    }
    deleteMember(user_name, callback){
        var sql = "DELETE from member WHERE user_name = ?";
        return db.query(sql,[user_name], callback);
        
    }

}

module.exports = MembersDB;