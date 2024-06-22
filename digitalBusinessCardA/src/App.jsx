//import React from 'react'
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="card">
      <img className="info--image" src="./front_img.png"/>
      <Info />
      <Footer />
    </div>
  )
}

export default App
