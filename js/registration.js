//Event handler for the "Create Account" button click
document.querySelector('#createAccount').addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e)
    setUserInfo(e);
    checkLocalStorage();
    createAccountObj(e);
})

//Populates localStorage with the entered information
//REMOVE THIS LATER AND IMPLEMENT THE OBJECT
function setUserInfo(e) {
    let firstName = e.target.form[0].value;
    localStorage.setItem('FirstName', firstName);

    let lastName = e.target.form[1].value;
    localStorage.setItem('LastName', lastName);

    let email = e.target.form[2].value;
    localStorage.setItem('Email', email);

    let password = e.target.form[3].value;
    localStorage.setItem('Password', password);

    let address = e.target.form[4].value;
    localStorage.setItem('Address', address);

    let city = e.target.form[5].value;
    localStorage.setItem('City', city);

    let province = e.target.form[6].value;
    localStorage.setItem('Province', province);

    let postalcode = e.target.form[7].value;
    localStorage.setItem('PostalCode', postalcode);
}

//Creates a Account Object and stores it in localStorage
//NEED TO IMPLEMENT THIS LATER
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

    localStorage.setItem('UserAccount', JSON.stringify(account));
}

//Checks to see if localStorage is empty
function checkLocalStorage() {

    //Doesn't fail as long as they enter a first name
    if (localStorage.getItem('FirstName') !== "") {
        //console.log("Has Info")

        alert("\nThank You For Registering!\n\nYou will now be redirected back to the main page.")

        //Clicking "Ok" on the alert redirects back to the homepage.
        window.location = '../COMP482_Asg_3/index.html';

    } else {
        //console.log("Empty")

        alert("\nThis Form Is Not Complete.\n\nPlease fill it out to continue.")
    }
}
