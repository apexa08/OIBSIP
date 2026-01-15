let tasks = [];

function addTask() {
    const title = document.getElementById("title").value.trim();
    const desc = document.getElementById("description").value.trim();

    if (!title || !desc) {
        alert("Please fill all fields");
        return;
    }

    const task = {
        id: Date.now(),
        title,
        desc,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    tasks.push(task);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    renderTasks();
}

function renderTasks() {
    const pending = document.getElementById("pendingTasks");
    const completed = document.getElementById("completedTasks");

    pending.innerHTML = "";
    completed.innerHTML = "";

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
            <strong>${task.title}</strong>
            <p>${task.desc}</p>
            <small>Added: ${task.createdAt}</small>
            <div class="actions">
                ${!task.completed ? `<button class="complete" onclick="completeTask(${task.id})">Complete</button>` : ""}
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        task.completed ? completed.appendChild(div) : pending.appendChild(div);
    });
}

function completeTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
    );
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newTitle = prompt("Edit Title", task.title);
    const newDesc = prompt("Edit Description", task.desc);

    if (newTitle && newDesc) {
        task.title = newTitle;
        task.desc = newDesc;
        renderTasks();
    }
}
