function registerme() {

    var registeruser = new XMLHttpRequest();

    registeruser.open("POST", "http://127.0.0.1:8080/members", true);
    registeruser.setRequestHeader("Content-type", "application/json");
    registeruser.onload = function () {
        console.log("ok");
        alert("registration successful")


    }
    var user_name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var address = document.getElementById("address").value;
    var phone_number = document.getElementById("phone_number").value;
    var gender = document.getElementById("gender").value;
    var payload = {user_name: user_name, password: password, email: email, first_name: first_name, last_name: last_name, address: address, phone_number: phone_number, gender: gender};
    registeruser.send(JSON.stringify(payload));
    console.log(payload)
}