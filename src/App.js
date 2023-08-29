
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import '@styles/scss/App.scss'; 
import Header from '@components/layout/Header';


function App() {
  return (
    <BrowserRouter>
      <div className="App light">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
