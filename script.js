document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <span class="remove">X</span>
        `;
        
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
    }
});
