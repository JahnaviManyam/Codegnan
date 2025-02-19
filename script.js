
let display = document.getElementById("display");

function appear(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function lastCharacter() {
    display.value = display.value.slice(0, -1);
}

function result() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
