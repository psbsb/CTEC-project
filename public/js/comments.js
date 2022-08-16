function fetchComments() {
    var request = new XMLHttpRequest();
    // var req = new XMLHttpRequest();


    request.open('GET', comment_url, true);
    // req.open('get', "http://127.0.0.1:8080/members", true);



    request.onload = function () {

        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };

    // req.onload = function () {

    //     members_array = JSON.parse(req.responseText);
    //     console.log(members_array);
    // };


    request.send();
    // req.send();
}
// function comapreuserid() {
//     for (var i = 0; i < comment_array.length; i++) {
//         if (comment_array[i].user.id === members_array.id) {
//             var member = members_array.id;
//             //sessionStorage.setItem('users',users);
//             for (var x = 0; x < members_array.length; x++) {
//                 if (member === members_array[x]._id) {
//                     var member = members_array[x].user_name; 
//                     //console.log(member)
//                 }

//             }

//         }
//     }
// }



function showrestaurantComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurant_name;
    document.getElementById("commentBody").textContent = "";

//     for (var i = 0; i < comment_array.length; i++) {
//         if (comment_array[i].user.id === members_array.id) {
//             var member = members_array.id;
//             //sessionStorage.setItem('users',users);
//             for (var x = 0; x < members_array.length; x++) {
//                 if (member === members_array[x]._id) {
//                     var member = members_array[x].user_name; \
//                     //console.log(member)
//                 }

//             }

//         }
//     }
// }

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].restaurant_name === restaurant_array[item].restaurant_name) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedrestaurantId = restaurant_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].comments + "</p>               \
                                    <small>by " + comment_array[i].user_name + " @ " + comment_array[i].date + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/starImage.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";
    document.getElementById("nickname").value = "";
}

// Submit or send the new comment to the server to be added.
function addComment() {
    var comment = new Object();
    comment.restaurant_id = restaurant_array[currentIndex].restaurant_id; // restaurant ID is required by server to create new comment 
    comment.restaurant_name = restaurant_array[currentIndex].restaurant_name; // restaurant title is required by server to create new comment
    comment.user_name = document.getElementById("nickname").value; // Value from HTML input text
    comment.comments = document.getElementById("userComments").value; // Value from HTML input text
    comment.date = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    comment.rating = rating;

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        console.log("new comment sent");
        fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment));
}

//This function allows the user to mouse hover rating
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 

    for (let star of stars) {
        star.setAttribute("src", starBWImage);
    }
    changestarImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the star image.
function changestarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}
//slide 8 comments.js  -- Add the following
//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or restaurant review
function editComment(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("editnickname").value = comment_array[item].user_name;
    document.getElementById("edituserComments").value = comment_array[item].comments;
    console.log(comment_array[item].rating);
    displayColorstar('editpop', comment_array[item].rating);
}



//slide 9 comments.js  -- Add the following
//This function displayS the correct number of colored star
//based on the restaurant rating that is given in the user comment
function displayColorstar(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", starBWImage);
    }
    changestarImage(num, classTarget);
}


//slide 10 comments.js  -- Add the following
//This function sends the Comment data to the server for updating
function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_comment_url = comment_url + "/" + comment_array[currentIndex].comment_id;
        var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server

        updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateComment.setRequestHeader("Content-Type", "application/json");
        comment_array[currentIndex].user_name = document.getElementById("editnickname").value;
        comment_array[currentIndex].comments = document.getElementById("edituserComments").value;
        comment_array[currentIndex].rating = rating;
        updateComment.onload = function () {
            fetchComments();
        };
        updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}

//slide 13 comments.js  -- Add the following
//This function deletes the selected comment in a specific restaurant
function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_comment_url = comment_url + "/" + comment_array[item].comment_id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function () {
            fetchComments();
        };
        eraseComment.send();
    }
}