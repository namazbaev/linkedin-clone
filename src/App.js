import './App.css';
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom'
import { Home, Login, Header } from './components';
import { getUserAuth } from './actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userState.user)
  useEffect(() => {
    dispatch(getUserAuth())
  }, [])
  user === null && <Link to='/' />
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
