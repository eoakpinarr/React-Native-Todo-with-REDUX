import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [{
            id: '0',
            title: '',
            completed: 'false'
        }]
    },
    reducers: {
        addTask: (state, actions) => {
            state.list.push(actions.payload);
        },
        deleteTask: (state, actions) => {
            const id = actions.payload
            const filtered = state.list.filter(item => item.id !== id)
            state.list = filtered
        },
        okeyTask: (state, actions) => {
            const { id } = actions.payload
            const list = state.list.find(list => list.id === id)
            list.completed = !list.completed
        }
    }
})

export default todoSlice.reducer;
export const { addTask, deleteTask, okeyTask } = todoSlice.actions;