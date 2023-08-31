

import DeleteList from '@components/layout/DeleteList';
 
function TrashList(props) {




/* Delete */

const reFreshTodo = (itemId) =>{
  const updatedData = props.toDos.map(group => {
    const updatedList = group.list.map(item => {
      if (item.id === itemId) {
        return { ...item, isRemoved: false };
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
    <div className="trash-wrap">
      <DeleteList toDoData={props.toDos} refresh={reFreshTodo} />
    </div>
  );
}

export default TrashList;
