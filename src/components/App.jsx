import { AddTaskBtn } from './ChoosedDay/TasksColumnsList/TasksColumn/components/AddTaskBtn/AddTaskBtn';
import { TaskToolbar } from './ChoosedDay/TasksColumnsList/TasksColumn/components/TaskToolbar/TaskToolbar';
import { DayCalendarHead } from './ChoosedDay/DayCalendarHead/DayCalendarHead';
import { ColumnHeadBar } from './ChoosedDay/TasksColumnsList/TasksColumn/components/ColumnHeadBar/ColumnHeadBar';

export const App = () => {
  return (
    <div>
      <DayCalendarHead />
      <ColumnHeadBar />

      <TaskToolbar />
      <AddTaskBtn />
    </div>
  );
};
