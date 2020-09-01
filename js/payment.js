//Event handler for when the page loads
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    addCartDetails();
})

//Event handler for "Submit Payment"
document.querySelector('form button').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    //Clicking "Submit Payment" on the alert redirects back to the homepage.
    window.location = 'resConfirm2.html';
})

//Gets information from localStorage
function addCartDetails() {
    let res = JSON.parse(localStorage.getItem('Reservation'));

    let name = res.Name;
    let time = res.Time;
    let date = localStorage.getItem('Date');

    //Add space name into cart details
    let selected = document.querySelector('#cartName');
    let newItem = document.createElement('h5');
    selected.innerHTML = "";
    selected.appendChild(newItem);
    newItem.innerHTML = name;
}
