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
        window.location = '../index.html';
        loggedInState();
    } else {
        alert("The Username and/or Password Entered Is Not Valid.");
    }

})

//Adds the logged in information to the top right
function loggedInState() {
    let loggedInText = "Logged In As: ";

    let account = JSON.parse(localStorage.getItem('UserAccount'));
    let first = account.FirstName;
    let last = account.LastName;

    document.querySelector('#loggedIn a').textContent = loggedInText + first + " " + last;

    hideLoginButton();
    showLogoutButton();
    showMenuButtons();
    hidePrompt();
    //myState();
}

//Removes the logged in information in the top right
function loggedOutState() {
    showLoginButton();
    hideLogoutButton();
    hideMenuButtons();
    showPrompt();
    document.querySelector('#loggedIn a').innerHTML = "";
    //myState();
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
    console.log(buttons)
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
