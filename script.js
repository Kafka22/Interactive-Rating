const submit = document.querySelector('input');
const main1 = document.querySelector('.main1');
const main2 = document.querySelector('.main2');
const cantidad = document.querySelector('.cantidad');
let buttons = document.querySelectorAll('button');
var num;

buttons.forEach(element => element.addEventListener('focus', () => {num = element.value}));
submit.addEventListener('click', sendNumber);

function sendNumber(){
    main1.classList.add('inactive');
    main2.classList.remove('inactive');
    cantidad.append(num);
}