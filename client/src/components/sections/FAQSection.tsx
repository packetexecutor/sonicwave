import { Accordion } from "../ui/accordion-custom";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";

const faqs = [
  {
    question: "What is SonicWave Executor?",
    answer: "SonicWave is an advanced Roblox executor that allows you to run custom scripts in Roblox games. It provides a powerful, user-friendly interface for executing Lua scripts to enhance your gaming experience."
  },
  {
    question: "Is SonicWave safe to use?",
    answer: "Yes, SonicWave is designed with security in mind. Our software is regularly updated to ensure compatibility with the latest Roblox updates and includes protection features to keep your account safe. However, as with any executor, use it responsibly and at your own discretion."
  },
  {
    question: "How do I install SonicWave?",
    answer: "Installation is simple: download the installer from our website, run it, and follow the on-screen instructions. Make sure to temporarily disable your antivirus during installation as it may flag the executor (this is a false positive common with game modification tools)."
  },
  {
    question: "What's the difference between free and premium versions?",
    answer: "The free version offers basic execution capabilities with limited features. The premium version includes advanced execution methods, full script library access, customization options, priority updates, and faster execution speeds, providing a more complete and powerful experience."
  },
  {
    question: "How often is SonicWave updated?",
    answer: "We update SonicWave regularly to maintain compatibility with Roblox updates. Premium users receive updates immediately, while free users may experience a slight delay. All updates are automatically installed when you launch the application."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4">
            Frequently Asked <span className="text-[#6C63FF]">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about SonicWave Executor.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
