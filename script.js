let keys = document.querySelectorAll('.key');
let display_input = document.querySelector('.input');
let display_output = document.querySelector('.output');

let input = "";
display_input.innerHTML = "";
display_output.innerHTML = "";

function calculate() {
    try {
        let ans = eval(input);
        return ans;
    } catch {
        return "Error";
    }
}

function makeInput() {
    let displayInput = "";
    for (let i = 0; i < input.length; i++) {

        let char = input[i];
        if (char === '*') char = 'x';

        if (char < '0' || char > '9') {

            if (char === '(' || char === ')')
                displayInput += `<span class="braces">${char}</span>`

            else
                displayInput += `<span>${char}</span>`
        } else
            displayInput += char;
    }

    return displayInput;
}

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    key.addEventListener('click', () => {
        display_output.innerHTML = "";
        let value = key.dataset.key;

        if (value === "AC")
            input = "";

        else if (value === "()")
            if (input.indexOf('(') === -1 ||
                input.lastIndexOf(')') > input.lastIndexOf('('))
                input += '(';
            else
                input += ')';

        else if (value === "DE")
            input = input.slice(0, -1);

        else if (value === "=")
            display_output.innerHTML = calculate();

        else
            input += value;

        display_input.innerHTML = makeInput();
    })
}