let input = document.querySelector("#result");
let output = document.querySelector("#results");

let isOperator = (char) => {
    return ["+", "-", "*", "/","%"].includes(char);
};

let AddValue = (val) => {
    let current = input.value;
    let lastChar = current.slice(-1);

    if (current.startsWith("=") || current === "Error") {
    input.value = "";
    current = "";
  }
    
    if (isOperator(val) && val !== "-" && current === "") return;

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
        let result = eval(input.value);
        output.value = input.value;
        input.value = '=\t' + result;
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
