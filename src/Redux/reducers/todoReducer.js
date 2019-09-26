let index = 0;
const initialState = { todos: [] };
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      const save = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: index++,
            text: payload.text,
            completed: false
          }
        ]
      };
      return save;
    case 'TOGGLE_TODO':
      let tempTodos = [];
      state.todos.forEach(todo => {
        if (todo.id === payload.id) {
          tempTodos.push({
            ...todo,
            completed: !todo.completed
          });
        } else {
          tempTodos.push(todo);
        }
      });

      const saveTodos = {
        ...state,
        todos: tempTodos
      };
      return saveTodos;
    case 'REMOVE':
      let removeArrayTodos = [];
      state.todos.forEach(todo => {
        if (todo.id !== payload.id) {
          removeArrayTodos.push(todo);
        }
      });

      const removeTodos = {
        ...state,
        todos: removeArrayTodos
      };
      return removeTodos;
    case 'UPDATE':
      let updateArrayTodos = [];
      state.todos.forEach(todo => {
        if (todo.id === payload.id) {
          tempTodos.push({
            ...todo,
            text: todo.text
          });
          updateArrayTodos.push(todo);
        }
      });

      const updateTodos = {
        ...state,
        todos: updateArrayTodos
      };
      return updateTodos;
    default:
      return state;
  }
};

export default todoReducer;
