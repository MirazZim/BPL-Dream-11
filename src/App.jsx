import './App.css'
import  { useState } from 'react';
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'

function App() {
 
  const [coins, setCoins] = useState(0);
  return (
    <>
      
      <NavBar coins={coins} />
      <div className="banner">
        <Banner coins={coins} setCoins={setCoins} />
      </div>
      
    </>
  )
}

export default App
