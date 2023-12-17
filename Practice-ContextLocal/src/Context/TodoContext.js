import { useContext, createContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Hell with codeforces",
            completed: false,
        }
    ],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    toggleComplete: () => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;