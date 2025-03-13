import React from 'react'
import './Card.css'
const Card = (props) => {
   
    const {heading,para,img} = props
    console.log(para)
  return (
    <div className='card'>
        <img src={props.img} alt="img" />
        <h1>{heading?heading:"Head"}</h1>
        <p>{para?para:"para"}</p>
        <div className='button'>Sign up</div>
    </div>
  )
}

export default Card
