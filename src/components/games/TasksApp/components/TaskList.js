import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from './TaskDetails';
import { useContext } from 'react';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return tasks.length ? (
    <div className='task-list'>
      <ul>
        {tasks.map((b) => {
          return <TaskDetails task={b} key={b.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>
      No tasks! <br /> Hello free time &#128513;
    </div>
  );
};

export default TaskList;
