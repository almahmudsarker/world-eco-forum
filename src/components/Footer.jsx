import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex flex-col justify-center items-center text-sm text-center py-4 md:flex-row">
        <div className="w-full md:w-1/2 p-10">
          <ul className="flex flex-col gap-2 md:flex-row md:gap-4">
            <li className="inline-block text-left">
              <a href="#" className="text-gray-300 hover:text-gray-700">
                ABOUT US
              </a>
              <p className="text-gray-50">Our Mission</p>
              <p className="text-gray-50">Our Impact</p>
              <p className="text-gray-50">Leadership and Governance</p>
              <p className="text-gray-50">Our Partners</p>
              <p className="text-gray-50">Sustainability</p>
              <p className="text-gray-50">History</p>
              <p className="text-gray-50">Careers</p>
              <p className="text-gray-50">Contact Us</p>
            </li>
            <li className="inline-block text-left">
              <a href="#" className="text-gray-300 hover:text-gray-700">
                EVENTS
              </a>
              <p className="text-gray-50">Events</p>
              <p className="text-gray-50">Open Forum</p>
              <a href="#" className="text-gray-300 hover:text-gray-700">
                MEDIA
              </a>
              <p className="text-gray-50">Subscribe to our press releases</p>
              <p className="text-gray-50">Pictures</p>
            </li>
            <li className="inline-block text-left">
              <a href="#" className="text-gray-300 hover:text-gray-700">
                MORE FROM THE FORUM
              </a>
              <p className="text-gray-50">Strategic Intelligence</p>
              <p className="text-gray-50">UpLink</p>
              <p className="text-gray-50">Global Shapers</p>
              <p className="text-gray-50">Young Global Leaders</p>
              <p className="text-gray-50">Schwab Foundation for Social</p>
              <p className="text-gray-50">Entrepreneurship</p>
              <p className="text-gray-50">
                Centre for the Fourth Industrial Revolution
              </p>
              <p className="text-gray-50">New Champions</p>
            </li>
            <li className="inline-block text-left">
              <a href="#" className="text-gray-300 hover:text-gray-700">
                PARTNERS & MEMBERS
              </a>
              <p className="text-gray-50">Sign in</p>
              <p className="text-gray-50">Join Us</p>
              <a href="#" className="text-gray-300 hover:text-gray-700">
                LANGUAGE EDITIONS
              </a>
              <p className="text-gray-50">English</p>
              <p className="text-gray-50">Español</p>
              <p className="text-gray-50">中文</p>
              <p className="text-gray-50">日本語</p>
            </li>
          </ul>
        </div>
      </footer>
      {/* <hr />
      <div className="flex items-center justify-center bg-black">
        <img src="https://logowik.com/content/uploads/images/facebook-round-black-icon4588.logowik.com.webp" />
        <img src="https://www.weforum.org/assets/images/WEF_Logo_White_Horizontal.svg" />
        <img src="https://www.weforum.org/assets/images/WEF_Logo_White_Vertical.svg" />
        <img src="https://www.weforum.org/assets/images/WEF_Logo_Black_Horizontal.svg" />
        <img src="https://www.weforum.org/assets/images/WEF_Logo_Black_Horizontal.svg" />
        <img src="https://www.weforum.org/assets/images/WEF_Logo_Black_Horizontal.svg" />
        <img src="https://www.weforum.org/assets/images/WEF_Logo_Black_Horizontal.svg" />
        <img src="https://www.weforum.org/assets/images/WEF_Logo_Black_Horizontal.svg" />
      </div> */}
      <hr />
      <div className="w-full text-center bg-black p-10">
        <p className="text-gray-200">Privacy Policy & Terms of Service</p>
        <p className="text-gray-400">© 2023 World Economic Forum</p>
      </div>
    </>
  );
};

export default Footer;
