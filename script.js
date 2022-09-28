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
    const homeTab = document.getElementById('home');
    const todayTab = document.getElementById('today');
    const scheduledTab = document.getElementById('scheduled'); 
    const projectsTab = document.getElementById('projects');


    goAllPage = () => {
        allTab.style.display = 'flex';
        homeTab.style.display = 'none';
        todayTab.style.display = 'none';
        scheduledTab.style.display = 'none';
        projectsTab.style.display = 'none';
    }

    goHomePage = () => {
        allTab.style.display = 'none';
        homeTab.style.display = 'flex';
        todayTab.style.display = 'none';
        scheduledTab.style.display = 'none';
        projectsTab.style.display = 'none'; 
    }

    goTodayPage = () => {
        allTab.style.display = 'none';
        homeTab.style.display = 'none';
        todayTab.style.display = 'flex';
        scheduledTab.style.display = 'none';
        projectsTab.style.display = 'none';
    }

    goScheduledPage = () => {
        allTab.style.display = 'none';
        homeTab.style.display = 'none';
        todayTab.style.display = 'none';
        scheduledTab.style.display = 'flex';
        projectsTab.style.display = 'none'; 
    }

    goProjectsPage = () => {
        allTab.style.display = 'none';
        homeTab.style.display = 'none';
        todayTab.style.display = 'none';
        scheduledTab.style.display = 'none';
        projectsTab.style.display = 'flex';
    }
     
    document.querySelector('.all').addEventListener('click', goAllPage);

    document.querySelector('.home').addEventListener('click', goHomePage);

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

makeToDo = () => {
    const newObj = listFactory(title, notes);
    const all = document.getElementById('all');
    const toDo = document.createElement('div');
    const subBox = document.createElement('div');
    const radioButton = document.createElement('INPUT');
    const deleteButton = document.createElement('button');
    subBox.classList.add('subBox');
    all.appendChild(toDo);
    toDo.appendChild(radioButton);
    toDo.appendChild(subBox);
    toDo.classList.add('toDo');
    radioButton.setAttribute('type', 'radio');
    deleteButton.classList.add('delete');
    subBox.innerHTML = newObj.title;
    subBox.appendChild(deleteButton);
    subBox.style.color = "#E7DFDD"
    subBox.style.width = "95%";
    subBox.style.display = "flex";
    subBox.style.justifyContent = "space-between"
    
    
    
   
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
        toDo.remove()
    })
}

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




