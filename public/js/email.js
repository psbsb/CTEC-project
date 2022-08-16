function sendemail(){

    var emailuser = new XMLHttpRequest();

    emailuser.open("POST","http://127.0.0.1:8080/email",true);
    emailuser.setRequestHeader("Content-type", "application/json");
    emailuser.onload = function (){

        var token = JSON.parse(emailuser.responseText);
        console.log(token.result);
        if (token.result == "success"){
            $('#successModal').modal('show');

        } else { 
            $('#failModal').modal('show');
        }
    }
    var email = document.getElementById("email").value;
    var content = document.getElementById("content").value;
    var payload = {email:email, content:content};
    emailuser.send(JSON.stringify(payload));
}
// function sendemail(){

//     var emailuser = new XMLHttpRequest();

//     emailuser.open("POST","http://127.0.0.1:8080/email",true);
//     emailuser.setRequestHeader("Content-type", "application/json");
//     emailuser.onload = function (){

//         $('loginModal').modal('hide');

//         var token = JSON.parse(emailuser.responseText);
//         console.log(token.result);
//         if (token.result !=false){
//             $('successModal').modal('show');
//             document.getElementById("registermenu").style.display='none';
//             document.getElementById("registermenu").style.display='none';
//             document.getElementById("registermenu").style.display='none';
//             document.getElementById("registermenu").style.display='none';
//             sessionStorage.setItem("token",token.result);

//         }else{
//             $('#failmodal').modal('show');
//         }

//     }
// var email = document.getElementById("usernamelogin").value;
// var email = document.getElementById("usernamelogin").value;
// var email = document.getElementById("usernamelogin").value;
//emailuser.send(JSON.stringify(payload));

//}