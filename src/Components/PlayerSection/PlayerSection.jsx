import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayerSection = ({ selectedPlayers, setSelectedPlayers, coins, setCoins }) => {
  const [showAvailable, setShowAvailable] = useState(true);
  const [players, setPlayers] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch('Player_data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPlayers(data.players)) // Access the "players" array in the JSON object
      .catch((error) => {
        console.error('Error fetching player data:', error);
        setPlayers([]); // Ensure players is always an array
      });
  }, []);

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected.");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("You cannot select more than 6 players.");
      return;
    }

    if (player.biddingPrice > coins) {
      toast.error("You don't have enough coins to select this player.");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.biddingPrice); // Deduct player price from coins
    toast.success("Player selected successfully!");
  };

  const handleRemovePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find((p) => p.playerId === playerId);
    if (playerToRemove) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== playerId));
      setCoins(coins + playerToRemove.biddingPrice); // Refund player price to coins
      toast.info("Player removed successfully.");
    }
  };

  const validateCoins = (requiredCoins) => {
    if (requiredCoins > coins) {
      toast.error("Your coin balance does not match with the available balance in the navbar. Please claim more coins.");
      return false;
    }
    return true;
  };

  return (
    <section className="w-[1200px] mx-auto mt-10">
      <ToastContainer />
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">
          {showAvailable
            ? 'Available Players'
            : `Selected Player (${selectedPlayers.length}/6)`}
        </h2>
        <div className="flex">
          <button
            onClick={() => setShowAvailable(true)}
            className={`px-4 py-2 font-bold rounded-l-md ${
              showAvailable ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-600'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setShowAvailable(false)}
            className={`px-4 py-2 font-bold rounded-r-md ${
              !showAvailable ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-600'
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {showAvailable ? (
        players.length === 0 ? (
          <p className="text-center text-gray-500">No players available.</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {players.map((player) => (
              <div
                key={player.playerId}
                className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white"
              >
                {/* Player Image */}
                <img
                  src={player.image || 'https://via.placeholder.com/150'}
                  alt={player.name}
                  className="rounded-lg w-full h-[200px] object-contain mb-4"
                />
                {/* Player Name */}
                <h2 className="font-bold text-xl text-center">{player.name}</h2>
                {/* Player Details */}
                <div className="mt-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="mr-2">🌍</span>
                    {player.country}
                  </p>
                  <p className="flex items-center mt-1">
                    <span className="mr-2">🏏</span>
                    {player.role}
                  </p>
                </div>
                {/* Bidding Price */}
                <p className="mt-2 font-bold text-yellow-500">
                  Price: ${player.biddingPrice.toLocaleString()}
                </p>
                {/* Choose Player Button */}
                <button
                  onClick={() => {
                    if (validateCoins(player.biddingPrice)) {
                      handleSelectPlayer(player);
                    }
                  }}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
                >
                  Choose Player
                </button>
              </div>
            ))}
          </div>
        )
      ) : (
        <div>
          {selectedPlayers.length === 0 ? (
            <p className="text-center text-gray-500">No players selected yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {selectedPlayers.map((player) => (
                <div
                  key={player.playerId}
                  className="flex items-center border rounded-lg p-4 shadow-md bg-white"
                >
                  {/* Player Image */}
                  <img
                    src={player.image || 'https://via.placeholder.com/150'}
                    alt={player.name}
                    className="rounded-lg w-[100px] h-[100px] object-contain"
                  />
                  {/* Player Details */}
                  <div className="ml-4 flex-grow">
                    <h2 className="font-bold text-lg">{player.name}</h2>
                    <p className="text-sm text-gray-600">{player.role}</p>
                    <p className="font-bold text-yellow-500">
                      Price: ${player.biddingPrice.toLocaleString()}
                    </p>
                  </div>
                  {/* Remove Player Button */}
                  <button
                    onClick={() => handleRemovePlayer(player.playerId)}
                    className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          )}
          {/* Add More Player Button */}
          <button
            onClick={() => setShowAvailable(true)}
            className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 shadow-md"
          >
            Add More Player
          </button>
        </div>
      )}
    </section>
  );
};

export default PlayerSection;
