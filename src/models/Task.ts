export class Task {
    private static currentId = 0;
    private id: number;
    private title: string;
    private completed = false;

    constructor(title: string) {
        this.id = Task.currentId++;
        this.title = title;
        this.completed = false;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    isCompleted(): boolean {
        return this.completed;
    }

    toggleTaskCompletion(): void {
        this.completed = !this.completed;
    }
}

export class TaskList {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.getId() !== id);
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    toggleTaskCompletion(id: number): void {
        const task = this.tasks.find(task => task.getId() === id);
        if (task) {
            task.toggleTaskCompletion();
        }
    }
}
