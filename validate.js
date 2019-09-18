function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var emailErr = true;
    var emgex = /^\S+@\S+\.\S+$/;
    if (username == null || username == "") {
        alert("Please enter the username");
        return false;
    }
    if (email == null || email == "" || emgex.test(email) === false) {
        alert("Please enter the email");
        return false;
    }
    if (password == null || password == "" || password.length < 6) {
        alert("Please enter the password");
        return false;
    }
    alert('Login successful');
}