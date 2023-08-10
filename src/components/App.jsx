import { AddTaskBtn } from './ChoosedDay/TasksColumnsList/TasksColumn/components/AddTaskBtn/AddTaskBtn';
import { TaskColumnCard } from './ChoosedDay/TasksColumnsList/TasksColumn/components/TaskColumnCard/TaskColumnCard';
import { DayCalendarHead } from './ChoosedDay/DayCalendarHead/DayCalendarHead';
import { ColumnHeadBar } from './ChoosedDay/TasksColumnsList/TasksColumn/components/ColumnHeadBar/ColumnHeadBar';

export const App = () => {
  return (
    <div>
      <DayCalendarHead />
      <ColumnHeadBar />

      <TaskColumnCard />
      <AddTaskBtn />
    </div>
  );
};
