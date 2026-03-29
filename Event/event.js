// eventListener is a way for JavaScript to wait for an event to happen on a webpage, then run some code when that event happens.

// Common events are:
// mouse click
// key press
// mouse move
// form submit
let yourEvent = document.getElementById("ClickMe")
let text = document.getElementById("LogNumber")
let number = 0
const PlusNumber = addEventListener("click",()=>{
    number+=1
    text.innerHTML = number
})

let form = document.getElementById("myForm")
let username = document.getElementById("username")
let result = document.getElementById("result")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    result.textContent = "Hello, " + username.value
})
