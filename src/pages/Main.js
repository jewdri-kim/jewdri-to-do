
import { useState } from "react";
import useDate from '@hooks/useDate';
import TodoInsert from '@components/layout/TodoInsert';
import TodoList from '@components/layout/TodoList';
 
function Main(props) {

  const {today} = useDate();

  const [group, setGroup] = useState('');

 


  /* Insert */
  const groupChange = (event) =>{
    console.log(event.target.value);
      setGroup(event.target.value);
  }

  const onSubmit = (content) => {
    setInsertTodo(content);
  }

  const setInsertTodo = (content) =>{

    const updatedData =  props.toDos.map(groupItem=>{
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

    props.setTodos(updatedData);
   

}

/* Delete */

const deleteTodo = (itemId) =>{
  const updatedData = props.toDos.map(group => {
    const updatedList = group.list.map(item => {
      if (item.id === itemId) {
        return { ...item, isRemoved: true };
      }
      return item;
    });
    return { ...group, list: updatedList };
  });
  
  //const updatedTodo = { updatedData };
  console.log(updatedData);
  props.setTodos(updatedData);
}


  return (
    <div className="main-wrap">
      <TodoInsert 
        group={group} toDos={props.toDos} 
        groupChange={groupChange}
        onSubmit={onSubmit}
        />
      <TodoList toDoData={props.toDos} delete={deleteTodo}/>
    </div>
  );
}

export default Main;
