let LOGIN_STATE = false;

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

function loggedInState() {
    let loggedInText = "Logged In As: ";
    //Adds the logged in to the top right corner
    document.querySelector('#loggedIn a').textContent = loggedInText + localStorage.getItem('FirstName') + " " + localStorage.getItem("LastName");

    hideLoginButton();
    showLogoutButton();
    showWaiverButton();
    myState();
}

function loggedOutState() {
    showLoginButton();
    hideLogoutButton();
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

//Shows the "Fill out Waiver button"
function showWaiverButton() {
    let button = document.querySelector('#waiverBtn');
    button.style.display = "block";
}
