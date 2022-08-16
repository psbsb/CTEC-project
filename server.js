var express = require("express");
const port = 3000;

var restaurantController = require('./controllers/restaurantController');
var restaurantdetailsController = require('./controllers/restaurantdetailsController');
var commentController = require('./controllers/commentController');
var userController = require('./controllers/userController');
var memberController = require('./controllers/memberController');

var app = express();

app.use(express.static("./public"));
app.use(express.json());


app.route('/restaurantdetails').get(restaurantdetailsController.getAllRestaurantdetails);

app.route('/restaurant').get(restaurantController.getAllRestaurant);
app.route('/restaurantcuisine').get(restaurantController.getrestaurantBycuisine);
app.route('/restaurant/:location').get(restaurantController.findrestaurantlocation);
app.route('/search/:restaurant_name').get(restaurantController.searchrestaurant);

app.route('/comments').get(commentController.getAllcomments)
app.route('/comments').post(commentController.addComment);  
app.route('/comments/:id').put(commentController.updateComment)
app.route('/comments/:id').delete(commentController.deleteComment);

app.route('/user').get(userController.getAllusers)
app.route('/user').post(userController.adduser);
app.route('/users/:id').put(userController.updateuser)
app.route('/users/:id').delete(userController.deleteuser);

app.route('/members').get(memberController.getAllMembers)
app.route('/members').post(memberController.addMember);  
app.route('/members/:id').put(memberController.updateMember);
app.route('/members').delete(memberController.deleteMember);
app.route('/loginmembers').post(memberController.loginMember);

app.route('/email').post(restaurantController.sendemail);  

//app.listen(8080,"127.0.0.1");
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//console.log("web server running @ http://127.0.0.1:8080"); // output to console
