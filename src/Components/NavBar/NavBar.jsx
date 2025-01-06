
import Logo from '../../assets/logo.png';

const NavBar = ({ coins }) => {
  return (
    <nav className="absolute w-[1320px] h-[72px] left-[140px] top-[50px] flex flex-row justify-start items-center gap-[632px] p-0 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li><a href="#home" className="text-black  hover:text-blue-500">Home</a></li>
          <li><a href="#fixture" className="text-black  hover:text-blue-500">Fixture</a></li>
          <li><a href="#teams" className="text-black  hover:text-blue-500">Teams</a></li>
          <li><a href="#schedules" className="text-black  hover:text-blue-500">Schedules</a></li>
        </ul>

        {/* Coin Section */}
        <div className="flex items-center font-bold text-black bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm">
          <span className="mr-2">🪙</span>
          <span>Coin</span>
          <span className="ml-4">{coins}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
