let LOGIN_STATE = false;

//Checks the status of login
function myState() {
    LOGIN_STATE = !LOGIN_STATE;
    return LOGIN_STATE;
}

//Event handler to show the logged in users name
document.addEventListener('DOMContentLoaded', function () {

    loggedInState();

    //Logs user out when clicking the logout button
    document.querySelector('#logoutBtn').addEventListener('click', function () {
        loggedOutState();
    });

})

//Event handler for logging in with email and password
document.querySelector('#signIn').addEventListener('click', (e) => {
    e.preventDefault()

    let obj = JSON.parse(localStorage.getItem('StaticUser'));

    let masterEmail = obj.Email;
    let masterPass = obj.Pass;

    let inputEmail = e.target.form[0].value;
    let inputPass = e.target.form[1].value;

    if (masterEmail === inputEmail && masterPass === inputPass) {
        alert("Welcome Back!");
        window.location = '../COMP482_Asg_3/index.html';
        loggedInState();
    } else {
        alert("The Username and Password Entered are not valid.");
    }

})

//Adds the logged in information to the top right
function loggedInState() {
    let loggedInText = "Logged In As: ";
    //Adds the logged in to the top right corner

    document.querySelector('#loggedIn a').textContent = loggedInText + localStorage.getItem('FirstName') + " " + localStorage.getItem("LastName");

    hideLoginButton();
    showLogoutButton();
    showMenuButtons();
    myState();
}

//Removes the logged in information in the top right
function loggedOutState() {
    showLoginButton();
    hideLogoutButton();
    hideMenuButtons();
    document.querySelector('#loggedIn a').innerHTML = "";
    myState();
}

//Hides the "Log In or Sign Up Now!" Button
function hideLoginButton() {
    let button = document.querySelector('.jumbotron .btn');
    button.style.display = "none";
}

//Show the "Log In or Sign Up Now!" Button
function showLoginButton() {
    let button = document.querySelector('#loginBtn');
    button.style.display = "inline-block";
}

//Hides the "Logout" Button
function hideLogoutButton() {
    let button = document.querySelector('#logoutBtn');
    button.style.display = "none";
}

//Shows the "Logout" Button
function showLogoutButton() {
    let button = document.querySelector('#logoutBtn');
    button.style.display = "block";
}

//Shows the menu buttons for waivers, reservation
function showMenuButtons() {
    let buttons = document.querySelectorAll("#menuBtn");
    console.log(buttons)
    for (b of buttons) {
        console.log(b)
        b.style.display = "block";
    }
}

//Hides the menu buttons for waivers, reservation
function hideMenuButtons() {
    let buttons = document.querySelectorAll("#menuBtn");
    console.log(buttons)
    for (b of buttons) {
        console.log(b)
        b.style.display = "none";
    }
}
