import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list';

const mapStatetoProps = (state) => (
  {
    todos: allTodos(state)
  }

)

const mapDispatchtoProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  }
}