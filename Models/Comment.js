"use strict";

class Comment{
    constructor(comment_id,comments,rating,date,user_name,restaurant_name,restaurant_id){
        this.comment_id = comment_id;
        this.comments = comments;
        this.rating = rating;
        this.date = date;
        this.user_name = user_name;
        this.restaurant_name = restaurant_name;
        this.restaurant_id = restaurant_id;

    }

    getcomment_id(){
        return this.comment_id;
    }

    getcomments(){
        return this.comments;
    }
    // getuser_id(){
    //     return this.user_id;
    // }
    getrating(){
        return this.rating;
    }
    getdate(){
        return this.date;
    }
    getuser_name(){
        return this.user_name;
    }
    getrestaurant_name(){
        return this.restaurant_name;
    }
    getrestaurant_id(){
        return this.restaurant_id;
    }

    setcomment_id(comment_id){
        this.comment_id = comment_id;
    }
    setComment(Comment){
        this.Comment = Comment;
    }
    // setuser_id(user_id){
    //     this.user_id = user_id;
    // }
    setrating(rating){
        this.rating = rating;
    }s
    setdate(date){
        this.setdate(date)= date;
    }
     setuser_name(user_name){
        this.user_name = user_name;
    }
    setrestaurant_name(restaurant_name){
        this.restaurant_name = restaurant_name;
    }
    setrestaurant_id(restaurant_id){
        this.restaurant_id = restaurant_id;
    }
}
module.exports = Comment;