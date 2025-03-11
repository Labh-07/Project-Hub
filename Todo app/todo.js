//global structure :
let todoList=['Buy Milk','Go to college'];
displayItems(); //for starting display



//function :

function addTodo(){
    let inputEelemnt=document.querySelector('#todo-input');
    let todoItem=inputEelemnt.value;
    todoList.push(todoItem);
    inputEelemnt.value=''; //after push input empty

    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    
    let newHtml ='';


    for(let i=0 ; i<todoList.length ; i++){
        newHtml += `
        <div>
        <span>${todoList[i]}</span>
        <button onclick="
        todoList.splice(${i},1);
        displayItems();">Delete</button>
        </div>
        `; //here we write the ${i} becuase we are in backtik and we need to pass this loop i value in html
    }

    containerElement.innerHTML=newHtml;
}