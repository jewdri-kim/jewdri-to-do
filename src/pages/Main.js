
import TodoInsert from '@components/layout/TodoInsert';
import TodoList from '@components/layout/TodoList';

function Main() {
  return (
    <div className="main-wrap">
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default Main;
