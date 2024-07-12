import {Task, TaskList} from "../models/Task";
import {TaskView} from "../views/TaskView";

export class TaskController {
    private taskList: TaskList;
    private taskView: TaskView;

    constructor(taskList: TaskList, taskView: TaskView) {
        this.taskList = taskList;
        this.taskView = taskView;

        this.taskView.onAddTask = (title: string) => this.handleAddTask(title);
        this.taskView.onRemoveTask = (id: number) => this.handleRemoveTask(id);
        this.taskView.onToggleTaskCompletion = (id: number) => this.handleToggleTaskCompletion(id);

        this.renderTasks();
    }

    private handleAddTask(title: string): void {
        if (title.trim()) {
            const task = new Task(title);
            this.taskList.addTask(task);
            this.renderTasks();
        }
    }

    private handleRemoveTask(id: number): void {
        this.taskList.removeTask(id);
        this.renderTasks();
    }

    private handleToggleTaskCompletion(id: number): void {
        this.taskList.toggleTaskCompletion(id);
        this.renderTasks();
    }

    private renderTasks(): void {
        this.taskView.render(this.taskList);
    }
}
