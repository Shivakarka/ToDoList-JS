document.querySelector('form').addEventListener('submit',handlerSubmit);
document.querySelector('ul').addEventListener('click',handlerClick)
document.getElementById('clear').addEventListener('click',handlerClear);

// let default task pending count be 0
let count=0;

//Event handlers 
function handlerSubmit(e){
  //prevents default form action
  e.preventDefault();
  let inputItem = document.querySelector('input');
  //if input is not empty, add the value using helper function
  if(inputItem.value!=''){
    addTodoList(inputItem.value);
  }  
  inputItem.value="";
}

function handlerClick(e){
  // if the event object has target element of check, run the checkTodoList function
  if(e.target.name=='check'){
  checkTodoList(e);
}
// if the event object has target element of delete, run the deleteTodoList function
  if(e.target.name=='delete'){
  deleteTodoList(e);
}
}

function handlerClear(e){
  document.querySelector('ul').innerHTML ="";
  //reseting pending count to zero
  count =0;
  document.querySelector(".count").innerHTML = `${count}`;
}


//helper functions
//this function adds a new list item to 'ul' using a template
function addTodoList(todo){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');

  li.innerHTML = `<span class="list-item">${todo}</span>
  <button name="check"><i class="fas fa-check-square"></i></button>
  <button name="delete"><i class="fas fa-trash"></i></button>`;

 li.classList.add('todo-item');
 ul.appendChild(li);
 
 //incrementing pending task value by 1 each time
 count++;
 document.querySelector('.count').innerHTML = `${count}`;
}

//this function checks for textDecoration, adds and removes them accordingly
function checkTodoList(e) {
  let todoItem = e.target.parentNode;
  if(todoItem.style.textDecoration =='line-through'){
   todoItem.style.textDecoration = 'none';
  } else{
    todoItem.style.textDecoration='line-through';
  }
}

//this function removes the list
function deleteTodoList(e) {
  let todoItem = e.target.parentNode;
  
  //for the delete animation effect
  todoItem.addEventListener('transitionend',function(){
     todoItem.remove();
  })
  todoItem.classList.add('todo-item-fall');
   
  //decrementing the pending tasks count
  if(count>0){
    count--;
    document.querySelector(".count").innerHTML = `${count}`;
  }

}



