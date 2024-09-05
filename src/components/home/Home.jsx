import React from 'react'
import Bannar from './pages/Bannar'
import Card from './pages/Card'
import Makers from './pages/Makers'
import Gallery from './pages/Gallery'

const Home = () => {
  return (
    <div>
        <Bannar />
        <Card />
        <Makers />
        <Gallery />
    </div>
  )
}

export default Home