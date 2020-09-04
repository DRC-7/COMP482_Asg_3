//
// Created by Douglas Chung
//

//Event handler to print reservation information from localstorage
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    printReservationInfo();
})

//Gets localstorage information, adds new html tags, and prints it
function printReservationInfo() {
    let res = JSON.parse(localStorage.getItem('Reservation'));

    let name = res.Name;
    let time = res.Time;
    let date = localStorage.getItem('Date');

    let selectedArea = document.querySelector('#confirmation');
    let newItem = document.createElement('h4');

    //Clears any existing html inside
    selectedArea.innerHTML = "";

    selectedArea.appendChild(newItem);
    newItem.innerHTML = name + " @ " + time + " on " + date;
}
