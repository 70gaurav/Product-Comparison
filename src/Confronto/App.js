import React from 'react'
import Store from './App/Store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Compare from './Compare'
import Home from './Home'
import Singleproduct from './Singleproduct'
import Header from './Header'
function App() {
 
  return (
    <div>
      
      <Provider store={Store}>
        <BrowserRouter>
        <Header />
        <Routes>
          
            <Route path='/' element={<Home />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Compare' element={<Compare />}></Route>
            <Route path='/Singleproduct' element={<Singleproduct />}></Route>
           
        </Routes>
        </BrowserRouter>
        </Provider>
       
    </div>
  )
}

export default App