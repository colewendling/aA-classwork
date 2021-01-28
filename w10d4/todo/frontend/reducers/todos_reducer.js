import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( todo => {
        nextState[todo.id] = todo;
      });
      return nextState;

    case RECEIVE_TODO:
      
      // const newTodo = { [action.todo.id]: action.todo };
      let todoID = action.todo.id; 
      const newTodo = { [todoID]: action.todo }; 
      
      return Object.assign({}, state, newTodo,);

    default:
      return state;
  }
};

export default todosReducer;