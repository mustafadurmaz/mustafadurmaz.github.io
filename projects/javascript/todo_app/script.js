const form=document.getElementById('form');
const input=document.getElementById('input');
const todosUL=document.getElementById('todos');

const silBtn=document.getElementById('sil');


const todos=JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo=>{
        addTodo(todo);
    });
    
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    addTodo();

    
   
});

function addTodo(todo){

    let todoText=input.value;



    if(todo){

        todoText=todo.text;

    }
    
    if(todoText){
        const todoE1=document.createElement('li');
        if(todo&&todo.completed){
            todoE1.classList.add('completed');
        }

        
        const todoE2=document.querySelectorAll('li');
        todoE1.innerText=todoText;
        
        
        todoE1.addEventListener('click',()=>{
            todoE1.classList.toggle('completed');
            updateLS();
        });

        silBtn.addEventListener('click',()=>{
            todoE1.remove();
        })
        

        todosUL.appendChild(todoE1);
        input.value="";

        updateLS();
    }
        var deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete"; 
        deleteButton.className = "delete";
}

function updateLS(){
    const todosE1=document.querySelectorAll('li');

    const todos=[];

    todosE1.forEach(todoE1=>{
        todos.push({
            text:todoE1.innerText,
            completed:todoE1.classList.contains('completed'),
        });

    });

    localStorage.setItem("todos",JSON.stringify(todos));
}





