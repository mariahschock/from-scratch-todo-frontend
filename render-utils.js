export function renderTask(task) {
    const div = document.createElement('div');
    div.textContent = `${task.task}`;

    return div;
}
