import React from 'react'

const Navbar = (props) => {
    console.log(props.name,props.age)
  return (
    <div>
        <div>Project</div>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div>{props.name}</div>
    </div>
  )
}

export default Navbar
