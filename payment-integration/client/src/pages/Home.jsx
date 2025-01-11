
import React, { useEffect, useState } from 'react'

function Home() {
  const [items , setItems] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setItems(res.products)
      }).catch((err) => {
        console.log(err);
  
      })
  }, [])
  return (
    <>
    <div>
    {
      items ? items.map((item)=>{
        return <div key={item.id}>
      {item.category}
        </div>
      }) : <h1>loading</h1>
    }
    </div>
    </>
  )
}

export default Home
