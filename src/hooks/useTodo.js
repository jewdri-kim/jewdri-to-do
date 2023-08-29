
import { useState } from "react";
import { reqGetTodo } from "@core/api/todos";

const useTodo = () => {

    const [toDos, setTodo] = useState([]);
    
    const createTodo = () => {

        const response = reqGetTodo();

        setTodo(response)
    }

    const nextTodos = () =>{

        const response = reqGetTodo();
        setTodo([
            ...response,
            ...toDos,
        ]);

    }
    return {
        toDos,
        setTodo,
        createTodo,
        nextTodos
    }
}


export default useTodo; 