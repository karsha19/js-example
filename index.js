console.log("Parsing and executing Javascript code");

// Get the element with tag <body>
const body = document.getElementsByTagName("body")[0]

// Create a <button> element
const button = document.createElement("button")
// Add an id to the button (we are not going to use it))
button.id = "first-button"
button.innerText = "This is the first button"
// Listen for a click event. When the button is clicked, execute the function
button.addEventListener("click", function (e) {
    e.preventDefault()  // Prevent the default action of the button
    console.log("First button clicked")
})

// Append the button to the body
body.appendChild(button)

// Add ten more buttons
for (let i = 2; i < 12; i++) {
    const button = document.createElement("button")
    button.id = "button-" + i
    button.innerText = "This is button " + i
    button.addEventListener("click", function (e) {
        e.preventDefault()
        console.log("Button " + i + " clicked")
    })
    body.appendChild(button)
}

// "function" keyword + functionIdentifier + list of parameters in braces (separated by commas)
// + function body in curly braces
function addMessage(bodyArg) {
    const message = document.createElement("p")
    if (window.location.href.includes("file://")) {
        message.innerText = "This is a local file."
    } else if (window.location.href.includes("http://")) {
        message.innerText = "This is an HTTP resource."
    }

    bodyArg.appendChild(message)
}

addMessage(body)