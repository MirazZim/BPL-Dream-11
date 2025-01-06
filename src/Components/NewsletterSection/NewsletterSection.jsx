const NewsletterSection = () => {
    return (
      <div className="relative w-[1340px] h-[384px] mx-auto bg-gradient-to-r from-blue-100 via-yellow-100 to-red-100 flex flex-col justify-start items-start gap-10 p-6 rounded-lg shadow-lg">
        {/* Content Box */}
        <div className="w-full text-center bg-white py-8 px-6 rounded-lg shadow-lg">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates and news right in your inbox!
          </p>
          {/* Input and Button */}
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-pink-500 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default NewsletterSection;
  