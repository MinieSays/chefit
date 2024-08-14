import React from 'react'
import Header from '../components/Header'

const Home = (getData) => {
  return (
    <>
            <Header onSubmit={getData} />
    </>
  )
}

export default Home