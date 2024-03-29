/// add new list module ////////////////////


showInputField = () => {
    document.getElementById('inputField').style.display = "flex";
}

hideInputField = () => {
    document.getElementById('inputField').style.display = "none";
}

resetFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('notes').value; '';
   
}

cancelButton = (() => {
    document.getElementById('cancel').addEventListener('click', hideInputField);
})();
 

/// DOM tab navigation ////////////////////////


tabNav = (() => {    

    const allTab = document.getElementById('all');
    const todayTab = document.getElementById('today');
    const scheduledTab = document.getElementById('scheduled'); 
    const projectsTab = document.getElementById('projects');


    goAllPage = () => {
        allTab.style.display = 'flex';
        todayTab.style.display = 'none';
        scheduledTab.style.display = 'none';
        projectsTab.style.display = 'none';
    }

    

    goTodayPage = () => {
        allTab.style.display = 'none';
        todayTab.style.display = 'flex';
        scheduledTab.style.display = 'none';
        projectsTab.style.display = 'none';
    }

    goScheduledPage = () => {
        allTab.style.display = 'none';
        todayTab.style.display = 'none';
        scheduledTab.style.display = 'flex';
        projectsTab.style.display = 'none'; 
    }

    goProjectsPage = () => {
        allTab.style.display = 'none';
        todayTab.style.display = 'none';
        scheduledTab.style.display = 'none';
        projectsTab.style.display = 'flex';
    }
     
    document.querySelector('.all').addEventListener('click', goAllPage);

    document.querySelector('.today').addEventListener('click', goTodayPage);

    document.querySelector('.scheduled').addEventListener('click', goScheduledPage);

    document.querySelector('.projects').addEventListener('click', goProjectsPage);

})();


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

const newNote = () => {
    const subBox = document.querySelector('.subBox');
    subBox.style.display = "none";
}



makeToDo = () => {
    const newObj = listFactory(title, notes);
    const all = document.getElementById('all');
    const toDo = document.createElement('div');
    const subBox = document.createElement('div');
    const radioButton = document.createElement('INPUT');
    const deleteButton = document.createElement('button');
    const openButton = document.createElement('button');
    subBox.classList.add('subBox');
    all.appendChild(toDo);
    toDo.appendChild(radioButton);
    toDo.appendChild(subBox);
    toDo.classList.add('toDo');
    radioButton.setAttribute('type', 'radio');
    deleteButton.classList.add('delete');
    openButton.classList.add('open');
    subBox.innerHTML = newObj.title;
    subBox.appendChild(deleteButton);
    subBox.appendChild(openButton);
    subBox.style.color = "black"
    subBox.style.width = "95%";
    subBox.style.display = "flex";
    subBox.style.justifyContent = "space-between"
    deleteButton.textContent = "Delete";
    openButton.textContent = "Open";
    deleteButton.addEventListener('click', function() {
        toDo.remove()
    });
    openButton.addEventListener('click', function(){
        subBox.style.display = "none";
        toDo.style.display = "none";
        const notesPage = document.createElement('div');
        const backButton = document.createElement('button');
        all.appendChild(notesPage);
        all.appendChild(backButton);
        notesPage.textContent = "notes go here";
        backButton.textContent = "Back";
        backButton.addEventListener('click', function() {
            subBox.style.display = "flex";
            toDo.style.display = "flex";
            notesPage.style.display = "none";
            backButton.style.display = "none";
        });

    })
   
    
}

addProject = () => {
    const projDiv = document.getElementById('projects');
}

document.getElementById('title').addEventListener('keydown', function() {
    document.querySelector('.submit').style.color = "#81383C";
})


validateForm = () => {
    let form = document.forms['thisForm']['title'].value;
    if (form == '') {
        return false;
    }
    else {
        hideInputField();
        getListProperties();
        makeToDo();
        resetFields();
        goAllPage();
        
    }
}



submitList = () => {
    validateForm();
}

document.querySelector('.submit').addEventListener('click', submitList);




