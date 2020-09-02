//Waits for the page to load then executes
document.addEventListener('DOMContentLoaded', function () {
    addSpaceName();
})

document.querySelector('form button').addEventListener('click', (e) => {
    //console.log(e.target.form[0].value)
    if (e.target.form[0].value === "") {
        alert("Please Select A Date To Show Times.");
    } else {
        showTimes(e);
        showTimeSlots();
        selectButtonEvent();
    }
})

//Takes the name of the space from local storage and adds it to the title.
function addSpaceName() {
    let string = "Booking Time Slots:"
    let spaceName = localStorage.getItem('Space');

    let selectedArea = document.querySelector('#spaceName');
    let newItem = document.createElement('h2');
    selectedArea.appendChild(newItem);
    newItem.innerHTML = string + " " + spaceName;
}

function showTimes(e) {
    let string = "Showing Times For:"
    let dateSelection = e.target.form[0].value;

    localStorage.setItem('Date', dateSelection);

    let selectedArea = document.querySelector('#dateSelected');
    let newItem = document.createElement('h4');

    //Resets the string so that it doesn't display muliple times on refresh
    selectedArea.innerHTML = "";

    selectedArea.appendChild(newItem);
    newItem.innerHTML = string + " " + dateSelection;
}

//Unhides the section that displays the times
function showTimeSlots() {
    let section = document.getElementById('timeslotSection');
    section.style.display = "block";
}

//Event handling for time selection buttons
function selectButtonEvent() {
    //Selects all of the table buttons
    let list = document.querySelectorAll('td .btn');
    //console.log(list);

    //Adds event listener for each button
    for (l of list) {
        l.addEventListener('click', (e) => {
            console.log(e);
            if (e.target.value === "") {
                alert("This Time Slot Is Full.\nPlease Choose Another.");
            } else {

                let selectedTime = e.target.value;
                let name = localStorage.getItem('Space');

                //Creates a Reservation object with the information
                let reservationObj = {
                    Name: name,
                    Time: selectedTime
                };
                localStorage.setItem('Reservation', JSON.stringify(reservationObj));
                window.location = '../COMP482_Asg_3/resConfirm.html'
            }

        })
    }
}
