
// Get input from DOM and check for any sensitive input and display tooltip
const inputs = document.getElementsByTagName("input")

for (let i=0; i < inputs.length; i++) {
    if (inputs[i].type.includes("email") ||
        inputs[i].placeholder.includes("email") ||
        inputs[i].name.includes("email") ||
        inputs[i].id.includes("email")) {
        inputs[i].addEventListener("click", () => {
            tippy(inputs[i], {
                content: "Initial Test",
                theme: "light"
            })
        })
    }
}

for (let i=0; i < inputs.length; i++) {
    if (inputs[i].type.includes("user") ||
        inputs[i].placeholder.includes("user") ||
        inputs[i].name.includes("user") ||
        inputs[i].id.includes("user")) {
        inputs[i].addEventListener("click", () => {
            tippy(inputs[i], {
                content: "Initial Test",
                theme: "light"
            })
        })
    }
}

for (let i=0; i < inputs.length; i++) {
    if (inputs[i].type.includes("address") ||
        inputs[i].placeholder.includes("address") ||
        inputs[i].name.includes("address") ||
        inputs[i].id.includes("address")) {
        inputs[i].addEventListener("click", () => {
            tippy(inputs[i], {
                content: "Initial Test",
                theme: "light"
            })
        })
    }
}

for (let i=0; i < inputs.length; i++) {
    if (inputs[i].type == "password") {
        inputs[i].addEventListener("click", () => {
            tippy(inputs[i], {
                content: "Initial Test",
                theme: "light"
            })
        })
    }
}

