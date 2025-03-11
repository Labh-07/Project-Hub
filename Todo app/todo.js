//global structure :
// let todoList=[
//     {Task:'Buy Milk',dueDate:'11-3-2025',},
// ];


let todoList=[];
restoreTask();
displayTodo();

//function :

function addTask(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');

    let inputTask=inputElement.value;
    let inputDate=dateElement.value;

    if (inputTask === "" || inputDate === "") {
        alert("Please enter both a task and a due date.");
        return;
    }
    
    todoList.push({Task:inputTask,dueDate:inputDate});
    displayTodo();
    inputElement.value='';
    dateElement.value='';
}

function displayTodo(){
    let displayElement=document.querySelector('.todo-list');
    // let displayTask=displayElement.value;

    let newHtml='' ;
    for(let i=0 ; i<todoList.length ;i++){
        let task=todoList[i].Task;
        let date=todoList[i].dueDate;

        newHtml+=`
        <span>${task}</span>
        <span>${date}</span>
        <button class="todo-delete" onclick="deleteTodo(${i});">Delete</button>
        `;
    }
    
    saveTask();
    displayElement.innerHTML=newHtml;
}

function saveTask(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function deleteTodo(index){
    todoList.splice(index,1);
    saveTask();
    displayTodo();
}

function restoreTask(){
    let savedTasks = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList = savedTasks;
    // displayTodo(); alredy call globally
}

