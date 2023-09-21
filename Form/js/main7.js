var gmail_address = "shireliyevali@gmail.com";
var my_password = "1234";

function Login() {
    var email_input = document.getElementById("email").value;

    var password_input = document.getElementById("password").value;

    if(gmail_address==email_input && my_password==password_input){
        window.open('home.html','_blank')
    }
    else{
        window.alert('Emailiniz ve ya sifreniz duzgun deyil');
    }

}