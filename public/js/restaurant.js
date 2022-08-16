//This function is to call the restaurants api and get all the restaurant
function getrestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the restaurant records into our restaurant array        
        restaurant_array = JSON.parse(request.responseText);
        //Fetch the comments as well        
        fetchComments();
        console.log(restaurant_array) // output to console
        //call the function so as to display all restaurant tiles for "popular"        	
        displayrestaurant(category);
    };

    //This command starts the calling of the restaurant web api    
    request.send();
}

function displayrestaurant(category) {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurant = restaurant_array.length;
    for (var count = 0; count <= totalRestaurant; count++) {

        var restaurant_photos = restaurant_array[count].restaurant_photos;
        var restaurant_name = restaurant_array[count].restaurant_name;
        // var newcell = '<div class="card" style="width: 18rem;"><img src="' + restaurant_photos + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';
        var cell = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="' + restaurant_photos + '" alt="Card image cap" width="400" height"500">\
                            <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + restaurantCount + '" onClick="showrestaurantComments(this)"></i>\
                            <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showrestaurantDetails(this)">' + restaurant_name + '</h5><button href="" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-warning btn-sm" onClick="showmap(this)">map</button></div>\
    </div>'


        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;
        message = restaurantCount + " restaurants " + "avaliable"
        document.getElementById("summary").textContent = message;
        document.getElementById("parent").textContent = "";
    }

}
function fiterrestaurant(cuisine) {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    table.innerHTML = "";

    totalRestaurant = restaurant_array.length;
    for (var count = 0; count <= totalRestaurant; count++){
        if (restaurant_array[count].cuisine == cuisine ) {
            
            var restaurant_photos = restaurant_array[count].restaurant_photos;
            var restaurant_name = restaurant_array[count].restaurant_name;
            var cell = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="' + restaurant_photos + '" alt="Card image cap" width="400" height"500">\
                                <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + restaurantCount + '" onClick="showrestaurantComments(this)"></i>\
                                <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showrestaurantDetails(this)">' + restaurant_name + '</h5><button href="" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-warning btn-sm" onClick="showmap(this)">map</button></div>\
        </div>'


            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
            message = restaurantCount + " restaurants " + "found"
            document.getElementById("summary").textContent = message;
            document.getElementById("parent").textContent = "";

        } else {
            console.log(count);
            

        }
}
}
function listRestaurants() {
    category = "Restaurants";
    displayrestaurant(category);
    document.getElementById("restaurantMenu").classList.add("active");
    document.getElementById("trendingMenu").classList.remove("active");
    document.getElementById("dealsMenu").classList.remove("active");
}

function listTrending() {
    category = "Trending";
    displayrestaurant(category);
    document.getElementById("restaurantMenu").classList.remove("active");
    document.getElementById("trendingMenu").classList.add("active");
    document.getElementById("dealsMenu").classList.remove("active");
}

function listDeals() {
    category = "Deals";
    displayrestaurant(category);
    document.getElementById("restaurantMenu").classList.remove("active");
    document.getElementById("trendingMenu").classList.remove("active");
    document.getElementById("dealsMenu").classList.add("active");
}
//This function is to display the individual restaurants details
//whenever the user clicks on "See More"
function showrestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    console.log(item);
    document.getElementById("restaurant_name").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("restaurant_photos").src = restaurant_array[item].restaurant_photos;
    document.getElementById("rating").textContent = restaurant_array[item].rating;
    document.getElementById("cuisine").textContent = restaurant_array[item].cuisine;
    document.getElementById("price").textContent = restaurant_array[item].price;
    document.getElementById("location").textContent = restaurant_array[item].location;
    document.getElementById("description").textContent = restaurant_array[item].description;
}

function showmap(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    var locations = [restaurant_array[item].restaurant_name, restaurant_array[item].latitude, restaurant_array[item].longtitude];
    console.log(restaurant_array[item].latitude);
    console.log(restaurant_array[item].longtitude);
    map = new google.maps.Map(document.getElementById("map"), { center: { lat: 1.8, lng: 110.9 }, zoom: 4 });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = [];

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[1], locations[2]),
        map: map,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/restaurant.png"
        }
    });

    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[0]);
            infowindow.open(map, marker);
        }
    })(marker, i));

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            map.setCenter(pos);
            console.log(pos);
            map.setZoom(15);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos.lat, pos.lng),
                map: map,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }
            })

            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent("Your currnent Location");
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    )
}


//This function opens a new window/tab and loads the
//particular restaurant in the cinema website
function buyTicket() {
    window.open(restaurant_array[currentIndex].buy, "_blank");
}