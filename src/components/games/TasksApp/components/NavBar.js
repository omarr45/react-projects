import React, { useContext } from 'react';

import { TaskContext } from '../contexts/TaskContext';

const NavBar = () => {
  const myCont = useContext(TaskContext);
  const { tasks } = myCont;

  return (
    <div className='tasks-navbar'>
      <h1>My Tasks</h1>
      <p> Currently you have {tasks.length} tasks to get through...</p>
    </div>
  );
};

export default NavBar;
