document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    printReservationInfo();
})

function printReservationInfo() {
    let res = JSON.parse(localStorage.getItem('Reservation'));

    let name = res.Name;
    let time = res.Time;
    let date = localStorage.getItem('Date');

    let selectedArea = document.querySelector('#confirmation');
    let newItem = document.createElement('h4');

    selectedArea.innerHTML = "";

    selectedArea.appendChild(newItem);
    newItem.innerHTML = name + " @ " + time + " on " + date;

}
