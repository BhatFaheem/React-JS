import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Features/Todos/TodoSlice'
export const store = configureStore({
    reducer : todoReducer
});