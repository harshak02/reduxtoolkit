import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id : 1,
        text : "Hello"
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },

        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload
            })
        },

        updateTodo : (state,action) => {
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                  return {
                    ...todo,
                    text: action.payload.text,
                  };
                }
                return todo; 
              });
            state.todos = updatedTodos;
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;