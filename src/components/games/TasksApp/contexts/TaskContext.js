import { React, createContext, useEffect, useReducer } from 'react';

import { taskReducer } from '../reducers/TaskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localData = localStorage.getItem('tasks');
    return localData
      ? JSON.parse(localData)
      : [{ title: 'You can click on a task', body: 'to remove it', id: 1 }];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
