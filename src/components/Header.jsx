const Header = () => {
  return (
    <div className="container mx-auto bg-transparent text-black shadow min-w-full">
      <nav className="flex items-center justify-between mx-10">
        {/* <button>
          <svg
            className="h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button> */}
        {/* Logo */}

        <img
          className="h-[100px] w-[100px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px]"
          src="/Circle White.png"
          alt="Logo"
        />
        {/* Navigation Links */}
        <ul className="flex items-center space-x-1 sm:space-x-4">
          <button className="hover:bg-transparent bg-gradient-to-tr from-purple-400 to-blue-500  border hover:border-purple-100 hover:text-white text-white font-bold py-2 px-2 sm:px-4 rounded-full">
            <a href="https://www.weforum.org/join-us/individuals/">Join us</a>
          </button>
          <button className="hover:bg-transparent bg-gradient-to-tr from-purple-400 to-blue-500  border hover:border-purple-100 hover:text-white text-white font-bold py-2 px-2 sm:px-4 rounded-full">
            <a href="https://www.weforum.org/join-us/organizations/">Sign In</a>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
