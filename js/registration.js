//
// Created by Douglas Chung
//

//Event handler for the "Create Account" button click
document.querySelector('#createAccount').addEventListener('click', (e) => {
    e.preventDefault();
    createAccountObj(e);
    checkLocalStorage();
})

//Creates a Account Object and stores it in localStorage
function createAccountObj(e) {
    let account = {
        FirstName: e.target.form[0].value,
        LastName: e.target.form[1].value,
        Email: e.target.form[2].value,
        Pass: e.target.form[3].value,
        Addr: e.target.form[4].value,
        City: e.target.form[5].value,
        Province: e.target.form[6].value,
        PCode: e.target.form[7].value
    }

    //Creates a object in localstorage
    localStorage.setItem('UserAccount', JSON.stringify(account));
}

//Checks to see if localStorage is empty
function checkLocalStorage() {
    console.log("hello")

    let account = JSON.parse(localStorage.getItem('UserAccount'));
    let fName = account.FirstName;
    let lName = account.LastName;
    let email = account.Email;
    let addr = account.Addr;

    //Doesn't fail as long as they enter a first name
    if (fName !== "" &&
        lName !== "" &&
        email !== "" &&
        addr !== "") {
        //Clicking "Ok" on the alert redirects back to the homepage.
        window.location = '../html/regisConfirm.html';
        console.log('hiiiii')

    } else {
        alert("\nThis Form Is Not Complete.\n\nPlease fill it out to continue.");
    }
}
