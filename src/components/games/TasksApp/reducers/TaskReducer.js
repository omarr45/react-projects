import uuid from 'uuid/dist/v1';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          title: action.task.title,
          body: action.task.body,
          id: uuid(),
        },
      ];
    case 'REMOVE_TASK':
      return state.filter((b) => b.id !== action.id);
    default:
      return state;
  }
};
