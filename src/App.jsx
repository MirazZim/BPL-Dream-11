import './App.css';
import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import PlayerSection from './Components/PlayerSection/PlayerSection';
import NewsletterSection from './Components/NewsletterSection/NewsletterSection';
import Footer from './Components/Footer/Footer';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  document.title = "BPL Dream 11";

  return (
    <>
      <NavBar coins={coins} />
      <div className="banner">
        <Banner coins={coins} setCoins={setCoins} />
      </div>
      <PlayerSection
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        coins={coins}
        setCoins={setCoins}
      />
      <NewsletterSection></NewsletterSection>
      <Footer></Footer>

    </>
  );
}

export default App;
