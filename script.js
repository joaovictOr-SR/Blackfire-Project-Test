document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskTitle = taskInput.value.trim();
        if (taskTitle) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskTitle}</span>
                <div>
                    <button class="markCompleteBtn">Mark as Completed</button>
                    <button class="removeTaskBtn">Remove</button>
                </div>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            // Handle Mark as Completed
            li.querySelector('.markCompleteBtn').addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Handle Remove Task
            li.querySelector('.removeTaskBtn').addEventListener('click', () => {
                taskList.removeChild(li);
            });
        }
    });
});
