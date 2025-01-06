import './App.css'
import  { useState } from 'react';
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import PlayerSection from './Components/PlayerSection/PlayerSection';

function App() {
 
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <>
      
      <NavBar coins={coins} />
      <div className="banner">
        <Banner coins={coins} setCoins={setCoins} />
      </div>

      <PlayerSection
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      />
      
    </>
  )
}

export default App
