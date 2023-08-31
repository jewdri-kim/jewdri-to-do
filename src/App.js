
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Main from '@pages/Main';
import TrashList from '@pages/TrashList';
import '@styles/scss/App.scss'; 
import Header from '@components/layout/Header';
import { reqGetTodo } from "@core/api/todos";

function App() {


  const [datas, setDatas] = useState([]);

 
  const createTodo = () => {
      const response = reqGetTodo();
      setDatas(response);
  }  

  const resetData = (content) =>{
    setDatas(content);
  }


  useEffect(() => {
      createTodo();
  }, []);

  return (
    <BrowserRouter>
      <div className="App light">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main toDos={datas} setTodos={resetData}  />} />
          <Route path="/trash" element={<TrashList toDos={datas} setTodos={(resetData)} />}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
