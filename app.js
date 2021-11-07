// Add entries into the TODO list 
// by using events 

const addForm = document.querySelector('.add');

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);
})