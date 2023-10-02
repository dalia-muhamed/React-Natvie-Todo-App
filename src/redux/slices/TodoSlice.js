import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      if (title) {
        const singleTodo = {
          title,
          description,
          id: Date.now(),
          done: false,
        };
        const dublicated = state.todos.some(
          el => el.title === singleTodo.title
        );
        if (dublicated) {
          alert('This ToDo is Dublicated');
          return;
        }
        const allTodos = [...state.todos, singleTodo];
        state.todos = [...allTodos];
        AsyncStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const newTodos = state.todos.filter(obj => obj.id !== id);
      state.todos = newTodos;
      AsyncStorage.setItem('todos', JSON.stringify(state.todos));
    },
    changeStatus: (state, action) => {
      const { id } = action.payload;
      const selectedTodo = state.todos.find(obj => obj.id === id);
      if (selectedTodo) selectedTodo.done = !selectedTodo.done;
    },
  },
});
export const { addTodo, deleteTodo, changeStatus, setTodos } =
  TodoSlice.actions;
export default TodoSlice;
