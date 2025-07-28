let input = document.querySelector("#result");
let output = document.querySelector("#results");

let isOperator = (char) => {
    return ["+", "-", "*", "/", "%", "÷"].includes(char);
};

let AddValue = (val) => {
    let current = input.value;
    let lastChar = current.slice(-1);

    // Clear input on previous result or error
    if (current.startsWith("=") || current === "Error") {
        input.value = "";
        current = "";
    }

    // Prevent operator as first character (except minus)
    if (isOperator(val) && val !== "-" && current === "") return;

    // Replace last operator if two operators in a row
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
        let expression = input.value;

        // Replace divide symbol with slash for eval
        expression = expression.replace(/÷/g, "/");

        // Avoid evaluation if expression ends with operator
        if (isOperator(expression.slice(-1))) {
            input.value = "Error";
            output.value = "";
            return;
        }

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
