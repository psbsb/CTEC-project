function loginMe() {

    var loginuser = new XMLHttpRequest();
    //var welcome = document.getElementById('userlogin').innerText= "welcome" + usernamelogin;

    loginuser.open("POST", "http://127.0.0.1:8080/loginmembers", true);
    loginuser.setRequestHeader("Content-type", "application/json");
    loginuser.onload = function () {

        var token = JSON.parse(loginuser.responseText);
        console.log(token.result);
        //$('loginModal').modal('hide');

        if (token.result != false) {
            alert("login successful")
            sessionStorage.setItem("token", token.result);
            sessionStorage.setItem("username", usernamelogin);
            //sessionStorage.setItem("id",id);
            window.location.href = "index.html";
            //document.getElementById('hello').innerText = "welcome" + usernamelogin;
            //$('#successModal').modal('show');
            // document.getElementById("registermenu").style.display='none';
            // document.getElementById("loginmenu").style.display='none';
            // document.getElementById("logoutmenu").style.display='block';

        } else {
            alert("login fail")
        }
    }

    var usernamelogin = document.getElementById("usernamelogin").value;
    var passwordlogin = document.getElementById("passwordlogin").value;
    var payload = { user_name: usernamelogin, password: passwordlogin };
    loginuser.send(JSON.stringify(payload));
    console.log(payload)

}
function logoutme() {

    console.log("logout");

    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();
    $('#hello').hide();
    alert("logged out")
    sessionStorage.removeItem("token");
}
$(document).ready(function () {

    var token = sessionStorage.getItem("token")
    if (token != null) {
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#logoutMenu').show();
        // var username = sessionStorage.setItem("username", usernamelogin);
        var table = document.getElementById("welcomeuser");
        //document.getElementById("welcomeuser");
        table.insertAdjacentHTML('beforeend', sessionStorage.getItem("username"));


    }
})
function refreshPage() {
    window.location.reload();
}

function welcomeuser() {
    // var username = sessionStorage.setItem("username", usernamelogin);
    //var table = document.getElementById("welcomeuser");
    //document.getElementById("welcomeuser");
    table.insertAdjacentHTML('beforeend', sessionStorage.getItem("username"));
}

