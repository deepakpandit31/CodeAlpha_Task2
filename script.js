let string = "";
let memory = 0;
const buttons = document.querySelectorAll('.button');
const calcInput = document.querySelector('#calcInput');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = Function(`return ${string}`)();
                calcInput.value = string;
            } catch {
                calcInput.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            calcInput.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            calcInput.value = string;
        } else if (value === 'M+') {
            memory += parseFloat(string || "0");
        } else if (value === 'MC') {
            memory = 0;
        } else {
            string += value;
            calcInput.value = string;
        }
    });
});
