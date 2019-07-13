const add = (a, b) => {
    return Number(a) + Number(b);
}

const subtract = (a, b) => {
    return Number(a) + b;

}
//make these global instead of initializing everytime in the functions
let input = document.querySelector('input')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus');
const showNum = document.querySelector('p')

minus.addEventListener('click', (e) => {
    let curNum = document.querySelector('p').innerText;
    curNum = Number((curNum))
    firstNum = Number(input.value);
    let secNum = 0;
    secNum = -Math.abs(Number(input.value)) //this works
    
    showNum.textContent = subtract(curNum, secNum);
    input.value = '';
}, false);

plus.addEventListener('click', (e) => {
    let curNum = document.querySelector('p').innerText;
    curNum = Number((curNum))
    firstNum = Number(input.value);
    showNum.textContent = add(firstNum, curNum);
    input.value = '';
})

input.value = '';