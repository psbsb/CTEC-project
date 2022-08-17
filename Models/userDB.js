"use strict"

var db = require('../db-connections');
class userDB{
    getAllusers(callback){
        var sql = "SELECT * from movie_info.user";
        db.query(sql,callback);
    }
    adduser(user,callback){
        var sql = "INSERT INTO user (user_id,email,first_name,last_name,address,mobile_number,gender,user_name,password,profile_picture) VALUES(?, ?, ?, ?, ?,  ?, ?, ?, ?)";
        db.query(sql,[user.getuser_id(),user.getemail(),user.getfirst_name(),user.getlast_name(),
            user.getaddress(),user.getmobile_number(),user.getgender(),user.getuser_name(),user.getpassword(),user.getprofile_picture()], callback);
    }
    updateuser(user,callback){
        var sql = "UPDATE user SET user_id = ?,email = ?,first_name = ?, last_name = ?, address = ?, mobile_number = ?, gender = ?, password = ?, profile_picture = ? WHERE _id = ?";
        return db.query(sql,[user.getuser_id(),user.getemail(),user.getfirst_name(),user.getlast_name(),
            user.getaddress(),user.getmobile_number(),user.getgender(),user.getuser_name(),user.getpassword(),user.getprofile_picture()], callback);
    }
    deleteuser(userID, callback){
        var sql = "DELETE from user WHERE user_id = ?";
        return db.query(sql,[userID],callback);
        
    }

}

module.exports = userDB;
