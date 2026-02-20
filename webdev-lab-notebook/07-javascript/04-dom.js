// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let button = document.getElementById('copy')
let input_elem = document.getElementById('userInput1')
let output_class = document.getElementsByClassName('output')[0]

// add an event listener on the target element

// callback function to handle event
button.onclick = function()
{
    //alert(input_elem.value);
    
    output_class.textContent = input_elem.value
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area
let user_io = document.getElementById('userInput2')
let output_insert = document.querySelectorAll("p")[1]

let elem = document.createElement('div')
elem.setAttribute('class', 'output')
output_insert.append(elem)

user_io.oninput = function()
{
    elem.textContent = user_io.value
}
// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
