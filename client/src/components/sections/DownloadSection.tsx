import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="py-20 bg-[#121212] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto bg-[#1E1E1E] p-8 md:p-12 rounded-2xl border border-[#6C63FF] shadow-xl"
          style={{
            boxShadow: "0 0 30px rgba(108, 99, 255, 0.3)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4">
              Download <span className="text-[#00FFFF]">SonicWave</span> Now
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get instant access to the most powerful Roblox executor and elevate
              your gaming experience today.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 bg-[#121212] p-6 rounded-lg border border-[#2D2D2D]">
              <h3 className="text-xl font-bold font-rajdhani mb-4 text-center">
                Free Version
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Basic script execution</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Limited script library access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Standard user interface</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-red-500 mt-1 mr-2"></i>
                  <span className="text-gray-400">No auto-updates</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-red-500 mt-1 mr-2"></i>
                  <span className="text-gray-400">Limited execution speed</span>
                </li>
              </ul>
              <a
                href="#"
                className="relative overflow-hidden bg-[#6C63FF] hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 block text-center shadow-[0_0_15px_rgba(108,99,255,0.5)]"
              >
                <span className="relative z-10">Download Free</span>
                <span className="absolute inset-0 overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"></span>
              </a>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-[#121212] to-[#2D2D2D] p-6 rounded-lg border border-[#00FFFF] relative">
              <div className="absolute top-0 right-0 bg-[#00FFFF] text-[#121212] font-bold py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold font-rajdhani mb-4 text-center">
                Premium Version
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Advanced script execution</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Full script library access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Customizable user interface</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Priority auto-updates</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Maximum execution speed</span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-[#00FFFF] hover:bg-opacity-80 text-[#121212] font-bold py-3 px-6 rounded-lg transition-all duration-300 block text-center shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              >
                Coming Soon
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Compatible with Windows 10 & 11. Requires .NET Framework 4.8 or higher.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
