import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productcontext } from './App'


function Header() {
  const {compare} = useContext(productcontext)
  return (
    <header>
        <div className='upper'>
        <h1>Confronto</h1>
        </div>
        <div className='line'></div>
        <div className='lower'>
          <h2><Link to="/">Catalog</Link></h2>
          <h2><Link to="/Compare">Compare ({compare.length})</Link></h2>


        </div>
    </header>
  )
}

export default Header