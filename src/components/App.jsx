import { AddTaskBtn } from './ChoosedDay/TasksColumnsList/TasksColumn/components/AddTaskBtn/AddTaskBtn';
import { TaskToolbar } from './ChoosedDay/TasksColumnsList/TasksColumn/components/TaskToolbar/TaskToolbar';
import { DayCalendarHead } from './ChoosedDay/DayCalendarHead/DayCalendarHead';

export const App = () => {
  return (
    <div>
      <DayCalendarHead />
      <TaskToolbar />
      <AddTaskBtn />
    </div>
  );
};
