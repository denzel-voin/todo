import './sass/styles.sass';
import { TaskController } from './controllers/TaskController';
import { TaskView } from './views/TaskView';
import { TaskList } from './models/Task';

const taskList = new TaskList();
const taskView = new TaskView();
const taskController = new TaskController(taskList, taskView);
