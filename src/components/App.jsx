import { AddTaskBtn } from './ChoosedDay/TasksColumnsList/TasksColumn/components/AddTaskBtn/AddTaskBtn';
import { TaskToolbar } from './ChoosedDay/TasksColumnsList/TasksColumn/components/TaskToolbar/TaskToolbar';

export const App = () => {
  return (
    <div>
      <TaskToolbar />
      <AddTaskBtn />
    </div>
  );
};
