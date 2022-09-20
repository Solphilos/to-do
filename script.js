/// add new list module ////////////////////

showInputField = () => {
    document.getElementById('inputField').style.display = "flex";
}

hideInputField = () => {
    document.getElementById('inputField').style.display = "none";
}




/// logic for creating new list //////////////

let title;
let notes; 



listFactory = (title, notes, date, time) => {
    return {title, notes, date, time}
}

makeNewObj = () => {
    const newObj = listFactory(title, notes);
    console.log(newObj.title)    
}

getListProperties = () => {
   title = document.getElementById('title').value;
   notes = document.getElementById('notes').value;
   
}

makeToDo = () => {
    const newObj = listFactory(title, notes);
    const content = document.querySelector('.content');
    const toDo = document.createElement('div');
    toDo.classList.add('toDo');
    content.appendChild(toDo);
    toDo.innerHTML = newObj.title;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    toDo.appendChild(deleteButton);
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
        toDo.remove()
    })
}



submitList = () => {
    hideInputField();
    getListProperties();
    //makeNewObj();
    makeToDo();
}



