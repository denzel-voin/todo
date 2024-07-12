import { TaskList } from '../models/Task';

export class TaskView {
	private form: HTMLElement;
	private input: HTMLInputElement;
	private result: HTMLElement;

	public onAddTask: (title: string) => void = () => {};
	public onRemoveTask: (id: number) => void = () => {};
	public onToggleTaskCompletion: (id: number) => void = () => {};

	constructor() {
		this.form = document.querySelector('#task-form');
		this.input = document.querySelector('#task-title');
		this.result = document.querySelector('#task-list');

		this.form.addEventListener('submit', (event) => {
			event.preventDefault();
			const title = this.input.value.trim();
			if (title) {
				this.onAddTask(title);
				this.input.value = '';
			}
		});

		this.result.addEventListener('click', (event) => {
			const target = event.target as HTMLElement;

			if (target.classList.contains('delete-button')) {
				const id = parseInt(target.dataset.id as string, 10);
				this.onRemoveTask(id);
			} else if (target.classList.contains('task-item')) {
				const id = parseInt(target.dataset.id as string, 10);
				this.onToggleTaskCompletion(id);
			}
		});
	}

	render(taskList: TaskList): void {
		this.result.innerHTML = '';
		const tasks = taskList.getTasks();
		tasks.forEach((task) => {
			const li = document.createElement('li');
			li.classList.add('task-item');
			li.textContent = task.getTitle();
			li.dataset.id = task.getId().toString();

			const deleteButton = document.createElement('button');
			deleteButton.classList.add('delete-button');
			deleteButton.textContent = 'Удалить';
			deleteButton.dataset.id = task.getId().toString();
			li.append(deleteButton);

			if (task.isCompleted()) {
				li.classList.add('completed');
			}

			this.result.append(li);
		});
	}
}
