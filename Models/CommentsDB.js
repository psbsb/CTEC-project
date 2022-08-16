"use strict"

var db = require('../db-connections');
class CommentsDB{
    getAllcomments(callback){
        var sql = "SELECT * from restraunt_review.comment";
        db.query(sql,callback);
    }
    addComment(comment,callback){
        var sql = "INSERT INTO comment (comment_id,comments,rating,date,user_name,restaurant_name,restaurant_id) VALUES(?, ?, ?, ?, ?, ?, ?)";
        db.query(sql,[comment.getcomment_id(),comment.getcomments(),
            comment.getrating(),comment.getdate(),comment.getuser_name(),comment.getrestaurant_name(),comment.getrestaurant_id()], callback);
    }
    updateComment(comment,callback){
        var sql = "UPDATE comment SET comments = ?, rating = ?, date = ?, user_name = ?, restaurant_name = ?, restaurant_id = ? WHERE comment_id = ?";
        return db.query(sql,[comment.getcomments(),
            comment.getrating(),comment.getdate(),comment.getuser_name(),comment.getrestaurant_name(),comment.getrestaurant_id(),comment.getcomment_id()], callback);
    }
    deleteComment(commentID, callback){
        var sql = "DELETE from comment WHERE comment_id = ?";
        return db.query(sql,[commentID],callback);
        
    }

}

module.exports = CommentsDB;