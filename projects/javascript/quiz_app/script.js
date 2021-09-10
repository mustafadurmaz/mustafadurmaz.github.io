const quizData=[
    {
        question:'Türkiye\'nin en uzun akarsuyu hangisidir?',
        a:'Yeşilırmak',
        b:'Kızılırmak',
        c:'Fırat',
        d:'Dicle',
        correct:'b'
    },
    {
        question:'Yüz ölçümü bakımından en büyük ülke hangisidir?',
        a:'Rusya',
        b:'ABD',
        c:'Türkiye',
        d:'Almanya',
        correct:'a'
    },
    {
        question:'Kıbrıs Barış harekatı hangi tarihte gerçekleşmiştir?',
        a:'1970',
        b:'1972',
        c:'1974',
        d:'1976',
        correct:'c'
    },
    {
        question:'Osmanlı’da Lale devri hangi padişah döneminde yaşamıştır?',
        a:'III. Ahmet',
        b:'IV. Murat',
        c:'II. Murat',
        d:'III. Selim',
        correct:'a'
    },
    {
        question:'Fas\'ın başkenti hangi şehirdir?',
        a:'Kazablanka',
        b:'Kahire',
        c:'Rabat',
        d:'Şam',
        correct:'c'
    }

];

const answerE1s=document.querySelectorAll('.answer');
const quiz=document.getElementById('quiz');
const questionE1=document.getElementById('question');

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];

    questionE1.innerText=currentQuizData.question;

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}

function getSelected(){
    let answer=undefined;

    answerE1s.forEach((answerE1) => {
        if(answerE1.checked){
            answer=answerE1.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerE1s.forEach((answerE1) => {
        answerE1.checked=false;
    });
}

submitBtn.addEventListener('click',() => {
    
    const answer =getSelected();

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++; 
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2>Quiz'de ${score}/${quizData.length} doğru cevapladın.<h2>
            <button onclick="location.reload()">Tekrar dene  </button>`
        }
    }
    
})