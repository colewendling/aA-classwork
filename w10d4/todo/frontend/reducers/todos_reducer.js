import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, TODO_ERROR } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  let nextState = {};
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

    case REMOVE_TODO:
      nextState = Object.assign({}, state);
      delete nextState[action.todo.id];
      return nextState;

    // case TODO_ERROR:
    //   alert(action.error)

    default:
      return state;
  }
};

export default todosReducer;