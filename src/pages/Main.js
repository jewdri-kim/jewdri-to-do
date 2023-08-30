
import { useState, useEffect } from "react";
import { reqGetTodo } from "@core/api/todos";
import useDate from '@hooks/useDate';
import TodoInsert from '@components/layout/TodoInsert';
import TodoList from '@components/layout/TodoList';
 
function Main() {

  const {today} = useDate();
  const [toDos, setTodos] = useState([]);
  const [group, setGroup] = useState('');

  /* List */
  const createTodo = () => {
      const response = reqGetTodo();
      setTodos(response);
      console.log(response);
  }  

  useEffect(() => {
      createTodo();
  }, []);

  /* Insert */
  const groupChange = (event) =>{
    console.log(event.target.value);
      setGroup(event.target.value);
  }

  const onSubmit = (content) => {
    setInsertTodo(content);
  }

  const setInsertTodo = (content) =>{

    const updatedData =  toDos.map(groupItem=>{
        if(groupItem.id === group){
            const id = groupItem.list[groupItem.list.length-1].id;
            const newId = parseInt(id[id.length-1])+1;
            const newData = {
                id: 'item_'+groupItem.id+'-'+newId,
                checked: false, 
                state: 'todo',
                date: today,
                text: content
            }
            groupItem.list.push(newData);
            return {
                ...groupItem,
                list:[
                    ...groupItem.list,  
                ]
            }
        }else{
            return groupItem;
        }
    })
    setTodos([...toDos, updatedData]);
   

}

  


  return (
    <div className="main-wrap">
      <TodoInsert 
        group={group} toDos={toDos} 
        groupChange={groupChange}
        onSubmit={onSubmit}
        />
      <TodoList toDoData={toDos}/>
    </div>
  );
}

export default Main;
