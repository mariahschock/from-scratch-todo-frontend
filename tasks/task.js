import { checkUser, createTask, logoutUser } from '../fetch-utils.js';
checkUser();

const logout = document.getElementById('logout');
const form = document.getElementById('task-form');
const error = document.getElementById('error');
// const taskEl = document.getElementById('task-list');

logout.addEventListener('click', async () => {
    await logoutUser();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const listData = new FormData(form);
    const newTask = {
        task: listData.get('task'),
        completed: false,
    };
    console.log(listData.get('task'));
    const data = await createTask(newTask);
    if (data) {
        window.location.href = '/tasks';
    } else {
        error.textContent = 'This is too Sh*tty! Try Again!';
    }
});

// async function displayTasks() {
//     taskEl.textContent = '';
// }
