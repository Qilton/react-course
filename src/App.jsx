import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
const App = () => {
    const card=[
        {
            id:1,
            heading:"Tiger",
            para:"This is a tiger",
            img:"https://www.thewowstyle.com/wp-content/uploads/2015/01/animals-amazing-animal-stories-wildlife-photography-by-rudi-hulshof19.jpg"
        },
        {
            id:2,
            heading:"Zebra",
            para:"This is a zebra",
            img:"https://tse4.mm.bing.net/th?id=OIP.QMn3NfnQ7NOUX3v9kEUECgHaE8&pid=Api&P=0&h=180https://tse1.mm.bing.net/th?id=OIP.FT8561H6YloSaR0NUZdtJgHaGX&pid=Api&P=0&h=180"
        },
        {
            id:3,
            heading:"Monkey",
            para:"This is a monkey",
            img:"https://tse4.mm.bing.net/th?id=OIP.Ye4xFMB2NdciNfWOawPGsQHaEc&pid=Api&P=0&h=180"
        }
    ]
  return (
    <div> 
      
      {card.map((info)=>{
        return <Card key={info.id} heading={info.heading} para={info.para} img={info.img}/>
      })}

    </div>
  )
}

export default App
