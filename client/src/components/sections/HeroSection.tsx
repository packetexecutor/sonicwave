import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, fadeIn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 to-[#1E1E1E]/95"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-rajdhani tracking-tight">
              Unleash the Power of{" "}
              <span className="text-[#6C63FF]">Sonic</span>
              <span className="text-[#00FFFF]">Wave</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              The most advanced and powerful Roblox executor designed for ultimate gaming experience and customization.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#download" 
                className="relative overflow-hidden bg-[#6C63FF] hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center shadow-[0_0_15px_rgba(108,99,255,0.5)] hover:shadow-[0_0_20px_rgba(108,99,255,0.8),0_0_30px_rgba(0,255,255,0.6)]"
              >
                <span className="relative z-10">Download Now</span>
                <span className="absolute inset-0 overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"></span>
              </a>
              <a 
                href="#features" 
                className="bg-transparent hover:bg-[#2D2D2D] text-white font-bold py-3 px-8 rounded-lg border border-[#6C63FF] transition-all duration-300 text-center"
              >
                Explore Features
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
          >
            <div className="relative w-full max-w-md animate-[float_6s_ease-in-out_infinite]">
              <div
                className="bg-[#1E1E1E] p-4 rounded-lg border border-[#6C63FF] shadow-xl"
                style={{
                  boxShadow:
                    "0 0 20px rgba(108, 99, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)",
                }}
              >
                <div className="bg-[#2D2D2D] rounded-t-md p-2 flex justify-between items-center">
                  <span className="text-[#00FFFF] font-rajdhani font-bold">SonicWave Executor</span>
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] p-4 h-64 rounded-b-md flex flex-col">
                  <div className="flex space-x-2 mb-2">
                    <button className="px-3 py-1 bg-[#6C63FF] text-xs rounded text-white">Execute</button>
                    <button className="px-3 py-1 bg-[#3A3A3A] text-xs rounded text-white">Clear</button>
                    <button className="px-3 py-1 bg-[#3A3A3A] text-xs rounded text-white">Open File</button>
                  </div>
                  <div className="flex-1 bg-[#121212] p-2 rounded font-mono text-sm text-gray-300 overflow-hidden">
                    <div className="text-green-400">-- SonicWave Script Example</div>
                    <div className="text-blue-400">local <span className="text-purple-400">player</span> = game.Players.LocalPlayer</div>
                    <div className="text-blue-400">local <span className="text-purple-400">character</span> = player.Character</div>
                    <div className="text-white">if character then</div>
                    <div className="text-white pl-4">character.Humanoid.WalkSpeed = 50</div>
                    <div className="text-white pl-4">character.Humanoid.JumpPower = 100</div>
                    <div className="text-white">end</div>
                    <div className="text-green-400">-- SonicWave: Execution successful</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
