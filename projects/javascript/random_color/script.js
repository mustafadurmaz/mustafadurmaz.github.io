const button=document.getElementById('button');
const circle=document.getElementById('circle');

let renkler=['yellow','green','black','pink','blue','orange'];

button.addEventListener('click',changeColor)

function changeColor(){
    let renk=Math.floor(Math.random() * renkler.length);
    circle.style.backgroundColor=renkler[renk];
}







