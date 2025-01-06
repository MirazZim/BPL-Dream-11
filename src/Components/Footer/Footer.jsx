import footerLogo from '../../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0b1c] text-white py-10 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img
            src={footerLogo}
            alt="Cricket Logo"
            className="h-20 mb-4"
          />
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#0a0b1c] text-gray-200"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-lg hover:from-yellow-500 hover:to-pink-500 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Footer Bottom */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">
          ©2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
