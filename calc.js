const display = $("input[name='display']");
var equation;
var hasOperandAndOperator = false;
var clearedOnce = false;
var equalPressed = false;
var answerFound = false

$("button[id*='button']").click(function() {
    const buttonValue = $(this).val();
    if (hasOperandAndOperator && !clearedOnce) {
        clear();
        clearedOnce = true;
    }
    else if (equalPressed && !clearedOnce) {
        clear();
        clearedOnce = true;
    }
    const value = display.val() + buttonValue;
    display.val(value);
});

$("button[id*='Button']").click(function() {
    const controlButtonId = $(this).attr("id");
    if (display.val().length > 0) {
        if (controlButtonId === "clearButton") {
            clear();
            hasOperandAndOperator = false;
            clearedOnce = true;
        }
        else if (controlButtonId === "addButton") {
            equation = setOperandAndOperator(display.val(), "+");
            hasOperandAndOperator = true;
            clearedOnce = false;
            answerFound = false;
        }
        else if (controlButtonId === "subtractButton") {
            equation = setOperandAndOperator(display.val(), "-");
            hasOperandAndOperator = true;
            clearedOnce = false;
            answerFound = false;
        }
        else if (controlButtonId === "multiplyButton") {
            equation = setOperandAndOperator(display.val(), "*");
            hasOperandAndOperator = true;
            clearedOnce = false;
            answerFound = false;
        }
        else if (controlButtonId === "divideButton") {
            equation = setOperandAndOperator(display.val(), "/");
            hasOperandAndOperator = true;
            clearedOnce = false;
            answerFound = false;
        }
        else if (controlButtonId === "equalsButton" && equation !== null && !answerFound) {
            const answer = getAnswer(equation);
            hasOperandAndOperator = false;
            clearedOnce = false;
            equalPressed = true;
            answerFound = true;
            display.val(answer.toString());
        }
    } 
});

function setOperandAndOperator(operand, operator) {
    return [Number(operand), operator];
}

function getAnswer(equation) {
    var givenOperator = equation[1];
    var givenOperand = equation[0];
    var answer;
    if (givenOperator === "+") {
        answer = add(givenOperand)
    }
    else if (givenOperator === "-") {
        answer = sub(givenOperand);
    }
    else if (givenOperator === "/") {
        answer = divide(givenOperand);
    }
    else if (givenOperator === "*") {
        answer = multiply(givenOperand);
    }

    return answer;
}

function add(operand) {
    return operand + Number(display.val());
}

function sub(operand) {
    return operand - Number(display.val());
}

function divide(operand) {
    return operand / Number(display.val());
}

function multiply(operand) {
    return operand * Number(display.val());
}

function clear() {
    display.val("");
}