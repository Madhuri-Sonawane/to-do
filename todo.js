let todoList =[
    {
    item:'buy milk',
    dueDate:'04/10/2023'
},
{
    item:'go to college',
    dueDate:'05/11/2023'
}
];
displayItems();

function addTodo(){
    let nameElement =document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem = nameElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem , dueDate:todoDate});
   
    nameElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
     let containerElement =document.querySelector('.todo-container');

     let newHtml = '';
     
     for(let i =0;i<todoList.length;i++){
         let{item,dueDate}=todoList[i];
        newHtml +=`
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button  class='btn-delete' onclick='todoList.splice(${i},1);
        displayItems();'>Delete</button>
   
        `;
      
     }
     containerElement.innerHTML =newHtml;
}