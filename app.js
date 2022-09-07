// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const nameInput = document.getElementById('name-input');
const changeNameButton = document.getElementById('change-name-button');
const name = document.getElementById('name');

changeNameButton.addEventListener('click', () => {
    // console.log('button clicked');
    const name = nameInput.value;
    console.log(name);
});
