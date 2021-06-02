import './Tasks.css';

import { Helmet } from 'react-helmet';
import NavBar from './components/NavBar';
import TaskContextProvider from './contexts/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const Tasks = () => {
  return (
    <div className='tasks-wrapper'>
      <Helmet>
        <title> My Tasks </title>
        <meta name='description' content='A web app that saves your tasks' />
      </Helmet>
      <TaskContextProvider>
        <NavBar />
        <TaskList />
        <TaskForm />
      </TaskContextProvider>
    </div>
  );
};

export default Tasks;
