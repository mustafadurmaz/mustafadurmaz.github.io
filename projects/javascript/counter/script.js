const button1=document.getElementById('button1');
const button2=document.getElementById('button2');
const number=document.getElementById('number').value;

let sayi=number;



button1.addEventListener('click',decreament)

function decreament(){
sayi--;
document.getElementById("number").value = sayi;
}

button2.addEventListener('click',increament)

function increament(){
sayi++;
document.getElementById("number").value = sayi;
}