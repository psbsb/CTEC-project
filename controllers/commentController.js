"use strict"
const CommentsDB = require('../Models/CommentsDB');
const Comment = require('../Models/Comment')


var commentDB = new CommentsDB();

function getAllcomments(request, respond) {
    commentDB.getAllcomments(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}
function addComment(request, respond) {
    var now = new Date();
    var comment = new Comment(request.body.comment_id, request.body.comments, request.body.rating,now.toString(),request.body.user_name,request.body.restaurant_name,request.body.restaurant_id);
    commentDB.addComment(comment, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function updateComment(request, respond) {
    var now = new Date();
    var comment = new Comment(parseInt(request.params.id),
        request.body.comments ,request.body.rating,request.body.date, request.body.user_name,request.body.restaurant_name,request.body.restaurant_id, now.toString());
    commentDB.updateComment(comment, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        } 
    });
}
function deleteComment(request, respond) {
    var commentID = request.params.id;
    commentDB.deleteComment(commentID, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getAllcomments, addComment, updateComment, deleteComment };