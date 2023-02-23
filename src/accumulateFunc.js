// Create a function that will accumulate in itself and log the result of
// performing calculations that depend on the current accumulated value, as
// well as the new number and operator that were passed to the function.

let accumulator = 0;

function calc(number, operator) {
    switch (operator) {
        case "+":
            accumulator += number;
            break;
        case "-":
            accumulator -= number;
            break;
        case "*":
            accumulator *= number;
            break;
        case "/":
            accumulator /= number;
            break;
        default:
            console.log("Operator has been invalid");
            return;
    }
    console.log(accumulator);
}

calc(5, "+");
calc(2, "*");
calc(3, "-");
calc(2, "*");
calc(7, "/");
