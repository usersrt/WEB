import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar"
import Links from './Routes/Links'

function App() {

  return (
    <>  
        <div className="body">
          <Navbar/>
          <div className="container">
            <div className="wrapper">
              <Links/>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
