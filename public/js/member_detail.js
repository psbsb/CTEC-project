// function fetchmembers() {
//     var request = new XMLHttpRequest();
//     request.open('GET', members_url, true);
//     request.onload = function () {

//         members_array = JSON.parse(req.responseText);
//         console.log(members_array);
//     };

//     request.send();
function deleteAccount() {
    var deleteMembers = new XMLHttpRequest();

    deleteMembers.open('DELETE', 'http://127.0.0.1:8080/members', true)
    deleteMembers.setRequestHeader("Content-Type", "application/json");

    deleteMembers.onload = function () {



        if (1==1) {
            console.log(deleteMembers.responseText);
            alert("Successfully deleted Account and will be Logged out");
            // window.location.href = "http://127.0.0.1:8080/index.html"


        } else{
            alert("error");

        }
    }
    var username =sessionStorage.getItem("username");
    console.log(username);
    var payload = {user_name:username}
    deleteMembers.send(JSON.stringify(payload));

}


function updateuser(){

    var getProfile = new XMLHttpRequest();
    var profile_url = "http://127.0.0.1:8080/users/" + sessionStorage.getItem("userId") ;
    getProfile.open("PUT", profile_url, true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    var address = document.getElementById("inputAddress").value;
    var password = document.getElementById("inputPassword").value;
    var firstName = document.getElementById("inputFirstName").value;
    var lastName = document.getElementById("inputLastName").value;
    var username = document.getElementById("inputUsername").value;
    var gender = document.getElementById("inputGender").value;
    //var gender = document.querySelector('input[name="inputGenders"]:checked').value;
    var email = document.getElementById("inputEmail").value;
    var mobileNumber = document.getElementById("inputMobileNumber").value;
    var token = sessionStorage.getItem("token");

    var payload = {token:token, address:address, password:password, firstName:firstName, lastName:lastName, username:username, gender:gender, email:email, mobileNumber:mobileNumber}

    getProfile.send(JSON.stringify(payload));
    console.log(payload);
}
