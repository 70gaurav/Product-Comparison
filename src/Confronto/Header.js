import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {

const length = useSelector((state) => {
  return state.compare.comparison.length
})
  
  return (
    <header>
        <div className='upper'>
        <h1>Confronto</h1>
        </div>
        <div className='line'></div>
        <div className='lower'>
          <h2><Link to="/">Catalog</Link></h2>
          <h2><Link to="/Compare">Compare ({length})</Link></h2>


        </div>
    </header>
  )
}

export default Header