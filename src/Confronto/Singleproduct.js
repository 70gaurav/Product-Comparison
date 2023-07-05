import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

function Singleproduct() {

  const singleProduct = useSelector((state) => {
    return state.compare.singleProduct
  })
 
  return (
    <div className='singleproduct'>
      <div className='singleimage'>
        <img src={singleProduct.image}></img>
      </div>
      <div className='details'>
        <h1>Brand:{singleProduct.brand}</h1>
       <ul>
        <li><h3>Model:{singleProduct.model}</h3></li>
        <li><h3>Rear camera:{singleProduct.rear_camera}</h3></li>
        <li><h3>Front camera:{singleProduct.front_camera}</h3></li>
        <li><h3>Screen:{singleProduct.screen}</h3></li>
        <li><h3>Cost:<span>{singleProduct.cost}$</span></h3></li>
        <li><h3>Storage:{singleProduct.storage}</h3></li>
        <li><h3>OS:{singleProduct.os}</h3></li>
       </ul>
      </div>
    </div>
  )
}

export default Singleproduct