import cricketLogo from "../../assets/banner-main.png"; // Import the cricket logo
import shadowBackground from "../../assets/bg-shadow.png"; // Import the shadow background image

const Banner = ({ coins, setCoins }) => {
    const handleAddCoins = () => {
        setCoins((prevCoins) => prevCoins + 500000); // Increment coins by 1
      };

    return (
      <section className="relative w-[1200px] h-[417px] mx-auto mt-10 flex flex-col items-center justify-center text-center  rounded-lg shadow-lg overflow-hidden">
        {/* Background Image */}
        <img
          src={shadowBackground}
          alt="Shadow Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
  
        <div className="relative z-10 flex flex-col items-center">
          {/* Cricket Logo */}
          <img
            src={cricketLogo}
            alt="Cricket Logo"
            className="h-24 mb-4"
          />
  
          {/* Main Heading */}
          <h1 className="text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
  
          {/* Subheading */}
          <p className="mt-2 text-lg font-medium">Beyond Boundaries Beyond Limits</p>
  
          {/* Button */}
          <button 
          onClick={handleAddCoins}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 shadow-lg">
            Claim Free Credit
          </button>
        </div>
      </section>
    );
  };


export default Banner;
