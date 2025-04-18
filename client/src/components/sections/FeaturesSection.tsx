import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";

const features = [
  {
    icon: "fas fa-bolt",
    title: "Lightning Fast Execution",
    description: "Experience seamless script execution with minimal latency and maximum performance.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Undetectable Technology",
    description: "Our advanced bypass systems ensure your scripts run undetected for maximum security.",
  },
  {
    icon: "fas fa-code",
    title: "Script Library",
    description: "Access a vast collection of pre-made scripts optimized for various Roblox games.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Customizable UI",
    description: "Personalize your execution experience with themes, layouts, and custom settings.",
  },
  {
    icon: "fas fa-sync-alt",
    title: "Auto-Updates",
    description: "Always stay up-to-date with automatic updates that keep your executor working with the latest Roblox versions.",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Support",
    description: "Our dedicated team provides round-the-clock assistance for any issues you might encounter.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div
      className="bg-[#121212] p-6 rounded-lg border border-[#2D2D2D] hover:transform hover:-translate-y-2 transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ delay: index * 0.1 }}
    >
      <div className="text-[#6C63FF] text-4xl mb-4 transition-transform duration-300 transform hover:scale-110">
        <i className={feature.icon}></i>
      </div>
      <h3 className="text-xl font-bold font-rajdhani mb-2">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4">
            Powerful <span className="text-[#6C63FF]">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover why SonicWave is the preferred choice for Roblox enthusiasts looking for the ultimate execution experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
