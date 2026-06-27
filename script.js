const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// Matrix characters
const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = Array(Math.floor(columns)).fill(0);

// Draw the characters
function draw() {
    // Translucent black to create fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f0'; // Green text
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.fillText(text, x, y);
        
        // Reset drop if it reaches the bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Increment drop position
        drops[i]++;
    }
}

let matrixInterval;
function startMatrix() {
    matrixInterval = setInterval(draw, 50);
}
function stopMatrix() {
    clearInterval(matrixInterval);
}

// Start the matrix effect
startMatrix();

// Task Management
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const tasksList = document.getElementById('tasksList');
    const progressValue = document.getElementById('progressValue');
    const progressText = document.getElementById('progressText');
    
    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Render tasks
    function renderTasks() {
        tasksList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <span class="task-text">${task.text}</span>
                <button class="delete-btn">Delete</button>
            `;
            
            // Add event listeners
            const checkbox = li.querySelector('.task-checkbox');
            checkbox.addEventListener('change', () => {
                task.completed = checkbox.checked;
                saveAndUpdate();
            });
            
            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                tasks = tasks.filter(t => t.id !== task.id);
                saveAndUpdate();
            });
            
            tasksList.appendChild(li);
        });
        
        updateProgress();
    }
    
    // Save tasks to localStorage and update UI
    function saveAndUpdate() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
    
    // Update progress display
    function updateProgress() {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        
        progressValue.textContent = `${percent}%`;
        progressText.textContent = `${completed} of ${total} tasks completed`;
        
        // Update progress circle
        const circle = document.querySelector('.progress-ring__indicator');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }
    
    // Add task
    addTaskBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text) {
            const newTask = {
                id: Date.now(),
                text,
                completed: false
            };
            tasks.push(newTask);
            taskInput.value = '';
            saveAndUpdate();
        }
    });
    
    // Allow Enter key to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
    
    // Initial render
    renderTasks();
    
    // Pause matrix effect when tab is hidden for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopMatrix();
        } else {
            startMatrix();
        }
    });
});