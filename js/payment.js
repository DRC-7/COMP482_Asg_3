//
// Created by Douglas Chung
//

//Event handler for when the page loads
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    addCartDetails();
})

//Event Handler for the "Submit Payment Button" --> Payment.html
document.querySelector('#submitPayment').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    paymentForm(e);
})

//Gets information from localStorage
function addCartDetails() {
    let res = JSON.parse(localStorage.getItem('Reservation'));

    let name = res.Name;
    //let time = res.Time;
    //let date = localStorage.getItem('Date');

    //Add space name into cart details
    let selected = document.querySelector('#cartName');
    let newItem = document.createElement('h5');
    selected.innerHTML = "";
    selected.appendChild(newItem);
    newItem.innerHTML = name;
}

//Checks the payment and billing information form to check that it's complete
function paymentForm(e) {
    let fName = e.target.form[0].value;
    let lName = e.target.form[1].value;
    //Skips email
    let bAddr = e.target.form[3].value;
    let prov = e.target.form[4].value;
    let city = e.target.form[5].value;
    let post = e.target.form[6].value;

    let ccName = e.target.form[9].value;
    let ccNum = e.target.form[10].value;
    let ccExp = e.target.form[11].value;
    let ccSec = e.target.form[12].value;

    console.log(ccNum.length)

    if (fName === "" ||
        lName === "" ||
        bAddr === "" ||
        prov === "" ||
        city === "" ||
        post === "") {

        alert("\nBilling Information Is Not Complete.\n\nPlease fill it out to continue.");
    }
    if (ccName === "" ||
        ccNum === "" ||
        ccExp === "" ||
        ccSec === "") {
        alert("\nPayment Information Is Not Complete.\n\nPlease fill it out to continue.");
    } else {
        //Clicking "Submit Payment" on the alert redirects back to the homepage.
        window.location = 'resConfirm2.html';
    }
}
