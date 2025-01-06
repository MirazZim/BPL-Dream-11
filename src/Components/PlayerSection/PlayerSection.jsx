import { useState, useEffect } from 'react';

const PlayerSection = ({ selectedPlayers, setSelectedPlayers }) => {
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
    if (!selectedPlayers.find((p) => p.playerId === player.playerId)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <section className="w-[1200px] mx-auto mt-10">
      <div className="flex justify-end mb-4">
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
                {/* Batting and Bowling Type */}
                <div className="mt-2 text-sm text-gray-600">
                  <p>Batting: {player.battingType}</p>
                  <p>Bowling: {player.bowlingType}</p>
                </div>
                {/* Bidding Price */}
                <p className="mt-2 font-bold text-yellow-500">
                  Price: ${player.biddingPrice.toLocaleString()}
                </p>
                {/* Choose Player Button */}
                <button
                  onClick={() => handleSelectPlayer(player)}
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
            <div className="grid grid-cols-3 gap-6">
              {selectedPlayers.map((player) => (
                <div
                  key={player.playerId}
                  className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white"
                >
                  <img
                    src={player.image || 'https://via.placeholder.com/150'}
                    alt={player.name}
                    className="rounded-lg w-full h-[200px] object-contain mb-4"
                  />
                  <h2 className="font-bold text-xl text-center">{player.name}</h2>
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
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Batting: {player.battingType}</p>
                    <p>Bowling: {player.bowlingType}</p>
                  </div>
                  <p className="mt-2 font-bold text-yellow-500">
                    Price: ${player.biddingPrice.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PlayerSection;
