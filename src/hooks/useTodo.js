
import { useState } from "react";
import { reqGetTodo } from "@core/api/todos";
import useDate from '@hooks/useDate';

const useTodo = () => {

    const [toDos, setTodo] = useState([]);
    const {today} = useDate();
    
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

    const setInsertTodo = (groupId, content) =>{

        const updatedData =  toDos.map(group=>{
            if(group.id === groupId){
                const id = group.list[group.list.length-1].id;
                const newId = parseInt(id[id.length-1])+1;
                const newData = {
                    id: 'item_'+group.id+'-'+newId,
                    checked: false, 
                    state: 'todo',
                    date: today,
                    text: content
                }
                group.list.push(newData);
                return {
                    ...group,
                    list:[
                        ...group.list,  
                    ]
                }
            }else{
                return group;
            }
        })

        setTodo([...toDos, updatedData]);

    }
    return {
        toDos,
        setTodo,
        createTodo,
        nextTodos,
        setInsertTodo,
    }
}


export default useTodo; 