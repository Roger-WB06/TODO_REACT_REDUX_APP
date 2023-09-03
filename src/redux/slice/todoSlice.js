import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState:[],
    reducers: {
        add(state, action){
            state.push(action.payload)
        },

        remove(state, action){
            return state.filter((todo,index)=> index !== action.payload)
        }
    }
})

export const {add, remove} = todoSlice.actions

export default todoSlice.reducer;
