const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] border-t border-[#2D2D2D] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold font-rajdhani text-white mb-2">
              <span className="text-[#6C63FF]">Sonic</span>
              <span className="text-[#00FFFF]">Wave</span> Executor
            </div>
            <p className="text-gray-400 text-sm">The ultimate Roblox execution experience.</p>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
              Home
            </a>
            <a href="#features" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
              Features
            </a>
            <a href="#download" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
              Download
            </a>
            <a href="#faq" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
              FAQ
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
              Contact
            </a>
          </div>

          <div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2D2D2D] mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} SonicWave Executor. All rights reserved.</p>
          <p className="text-gray-500 text-xs mt-2">SonicWave is not affiliated with Roblox Corporation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
