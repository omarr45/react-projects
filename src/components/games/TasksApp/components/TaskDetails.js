import { TaskContext } from '../contexts/TaskContext';
import { useContext } from 'react';

const TaskDetails = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}>
      <div className='title'> {task.title}</div>
      <div className='body'> {task.body}</div>
    </li>
  );
};

export default TaskDetails;
