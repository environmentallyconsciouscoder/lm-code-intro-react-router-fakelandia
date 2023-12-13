import React, { useContext } from 'react'
import { MisdeameanourContext } from '../context/data_provider'

function Home() {
  const userContext = useContext(MisdeameanourContext);
  console.log("userContext", userContext);
  return (
    <div>Home</div>
  )
}

export default Home