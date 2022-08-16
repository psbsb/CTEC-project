
class user{
    constructor(restaurant_id,restaurant_name,location,rating,price,comment_id,cuisine,restaurant_photos,description){
        this.restaurant_id = restaurant_id;
        this.restaurant_name = restaurant_name;
        this.location = location;
        this.rating = rating;
        this.price= price;
        this.comment_id = comment_id;
        this.cuisine = cuisine;
        this.restaurant_photos=restaurant_photos;
        this.description=description;

    }

    getrestaurant_id(){
        return this.restaurant_id;
    }
    getrestaurant_name(){
        return this.restaurant_name;
    }
    getlocation(){
        return this.location;
    }
    getrating(){
        return this.rating;
    }
    getprice(){
        return this.price;
    }
    getcomment_id(){
        return this.comment_id;
    }   
    getcuisine(){
        return this.cuisine;
    }
    getrestaurant_photos(){
        return this.restaurant_photos;
    }
    getdescription(){
        return this.description;
    }
    setrestaurant_id(restaurant_id){
        this.restaurant_id = restaurant_id;
    }
    setrestaurant_name(restaurant_name){
        this.restaurant_name = restaurant_name;
    }
    setrating(rating){
        this.rating = rating;
    }
    setprice(price){
        this.price = price;
    }
    setcomment_id(comment_id){
        this.comment_id = comment_id;
    }
    setcuisine(cuisine){
        this.cuisine = cuisine;
    }
    setlocation(location){
        this.location = location;
    }
    setrestaurant_photos(restaurant_photos){
        this.restaurant_photos = restaurant_photos;
    }
    setdescription(description){
        this.description = description;
    }
}
