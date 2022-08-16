"use strict"
const usersDB = require('../Models/userDB');
const User = require('../Models/user');


var userDB = new usersDB();

function getAllusers(request, respond){
    userDB.getAllusers(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}
function adduser(request,respond){
        var now = new Date();
        var user = new User(request.body.user_id,request.body.email,request.body.first_name ,
            request.body.last_name,request.body.address,request.body.mobile_number,request.body.gender,request.body.user_name,request.body.password,request.body.profile_picture,now.toString());
            userDB.adduser(user,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function updateuser(request,respond){
    var now = new Date();
    var user = new User(parseInt(request.params.id), request.body.user_id,request.body.email,request.body.first_name ,
    request.body.last_name,request.body.address,request.body.mobile_number,request.body.gender,request.body.user_name,request.body.password,request.body.profile_picture, now.toString());
    userDB.updateuser(user,function(error,result){
    if(error){
        respond.json(error);
    }
    else{
        respond.json(result);
    }
});
}
function deleteuser(request,respond){
    var userID = request.params.id;
    userDB.deleteuser(userID,function(error,result){
    if(error){
        respond.json(error);
    }
    else{
        respond.json(result);
    }
});
}

module.exports = {getAllusers,adduser,updateuser,deleteuser};
