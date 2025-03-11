//global structure :
let todoList=[
    {item:'Buy Milk',dueDate:'11/3/2025',},
    {item:'Go to college',dueDate:'11/3/2025',}

];
displayItems(); //for starting display



//function :

function addTodo(){
    let inputEelemnt=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');

    let todoItem=inputEelemnt.value;
    let todoDate=dateElement.value;

    todoList.push({item:todoItem,dueDate:todoDate});
   
    inputEelemnt.value=''; //after push input empty
    dateElement.value=''; 

    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    
    let newHtml ='';


    for(let i=0 ; i<todoList.length ; i++){
        let {item,dueDate}=todoList[i]; //destructuring
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="
        todoList.splice(${i},1);
        displayItems();">Delete</button>
        `; //here we write the ${i} becuase we are in backtik and we need to pass this loop i value in html
    }

    containerElement.innerHTML=newHtml;
}
