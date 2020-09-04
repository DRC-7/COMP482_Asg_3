//
// Created by Douglas Chung
//

//Event handler for the "Submit Waiver" button --> Waiver.html
document.querySelector('#submitWaiver').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    waiverForm(e);
})

//Checks to ensure that the form is filled out and redirects if it's complete
function waiverForm(e) {
    let fName = e.target.form[0].value;
    let lName = e.target.form[1].value;
    let date = e.target.form[2].value;
    let addr = e.target.form[3].value;
    let city = e.target.form[4].value;
    let prov = e.target.form[5].value;
    let post = e.target.form[6].value;

    let covBtn = e.target.form[7].checked;
    let ppBtn = e.target.form[8].checked;
    let tcBtn = e.target.form[8].checked;


    //Very very basic form validation just to make sure that things are filled out. Doesn't check for correct format or anything.
    if (fName === "" ||
        lName === "" ||
        date === "" ||
        addr === "" ||
        city === "" ||
        prov === "" ||
        post === "") {

        alert("\nThis Form Is Not Complete.\n\nPlease fill it out to continue.");
    }
    if (covBtn === false ||
        ppBtn === false ||
        tcBtn === false) {

        alert("\nYou Must Agree To All Of The Following:\n\n- Covid-19 Guidelines\n- Privacy Policy\n- Terms and Conditions");
    } else {
        window.location = '../html/waiverConfirm.html';
    }
}
