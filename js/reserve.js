let SPACE_SELECTED;

document.addEventListener('DOMContentLoaded', function () {
    getNameOfClick();
})

//Get the name of the space that the user clicks on.
function getNameOfClick() {

    let parent = document.getElementById('allSpaces');

    parent.addEventListener('click', (e) => {
        //console.log(e)
        if (e.target.type === "button") {
            console.log(e.target.innerHTML)
            let spaceSelected = e.target.innerHTML;
            localStorage.setItem('Space', spaceSelected);

            window.location = '../COMP482_Asg_3/timeReserve.html';
        }
    })
}
