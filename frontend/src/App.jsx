import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './container/Home/Home';
import Myorder from './container/myOrder/Myorder';
import MyCart from './container/myOrder/MyCart';
import Header from './components/Header';
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path='dashboard/' element={<Dashboard/>}/>
        <Route path='/myorder' element={<Myorder/>}/>
        <Route path='/mycart' element={<MyCart/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App