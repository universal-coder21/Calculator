let input = document.querySelector("#result");
let output = document.querySelector("#results");

let isOperator = (char) => {
    return ["+", "-", "*", "/", "%", "÷"].includes(char);
};

let AddValue = (val) => {
    let current = input.value;
    let lastChar = current.slice(-1);

    // Clear on error or result
    if (current.startsWith("=") || current === "Error") {
        input.value = "";
        current = "";
    }

    // Prevent starting with an operator (except negative sign)
    if (isOperator(val) && val !== "-" && current === "") return;

    // Replace consecutive operators
    if (isOperator(val) && isOperator(lastChar)) {
        input.value = current.slice(0, -1) + val;
    } else {
        input.value += val;
    }
};

let clearDigit = () => {
    input.value = input.value.slice(0, -1);
};

let calculate = () => {
    try {
        // Replace display symbol '÷' with actual operator '/'
        let expression = input.value.replace(/÷/g, "/");
        let result = eval(expression);
        output.value = input.value;
        input.value = "=\t" + result;
    } catch (err) {
        console.log(err);
        input.value = "Error";
        output.value = "";
    }
};

let AC = () => {
    input.value = "";
    output.value = "";
};
