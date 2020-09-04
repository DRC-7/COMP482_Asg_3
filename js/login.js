//
// Created by Douglas Chung
//

//Event handler to show the logged in users name and handles the logout click
document.addEventListener('DOMContentLoaded', function () {
    loggedInState();

    //Event handler for logging out 
    document.querySelector('#logoutBtn').addEventListener('click', function () {
        loggedOutState();
    })
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
        window.location = '../index.html';
        loggedInState();
    } else if (inputEmail === "" || inputPass === "") {
        alert("Username and/or Password Field ---> EMPTY.");
    } else {
        alert("Username and/or Password Entered ---> INVALID.");
    }
})

//Adds the logged in information to the top right
function loggedInState() {
    let account = JSON.parse(localStorage.getItem('UserAccount'));

    //Checks to see if there's an account created otherwise uses StaticUser
    if (account === null) {
        account = JSON.parse(localStorage.getItem('StaticUser'));
    }

    let loggedInText = "Logged In As: ";
    let first = account.FirstName;
    let last = account.LastName;
    document.querySelector('#loggedIn a').textContent = loggedInText + first + " " + last;

    hideLoginButton();
    showLogoutButton();
    showMenuButtons();
    hidePrompt();
}

//Removes the logged in information in the top right
function loggedOutState() {
    showLoginButton();
    hideLogoutButton();
    hideMenuButtons();
    showPrompt();
    document.querySelector('#loggedIn a').innerHTML = "";
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
    let buttons = document.querySelectorAll('#menuBtn');
    for (b of buttons) {
        //console.log(b)
        b.style.display = "block";
    }
}

//Hides the menu buttons for waivers, reservation
function hideMenuButtons() {
    let buttons = document.querySelectorAll('#menuBtn');
    for (b of buttons) {
        //console.log(b)
        b.style.display = "none";
    }
}

//Show Login or Sign Up prompt
function showPrompt() {
    let prompt = document.querySelectorAll('#prompt');
    for (p of prompt) {
        p.style.display = "block";
    }
}

//Hide Login or Sign Up prompt
function hidePrompt() {
    let prompt = document.querySelectorAll('#prompt');
    for (p of prompt) {
        p.style.display = "none";
    }
}
