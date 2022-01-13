import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Header } from './components';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={
          <>
            <Header />
            <Home />
          </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
