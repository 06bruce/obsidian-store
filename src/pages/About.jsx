import { motion } from 'framer-motion';
import Snowfall from 'react-snowfall';

const About = () => {
    return (
        <div className="pt-32 px-6 min-h-screen flex flex-col items-center">
            <Snowfall color="#ffffff" snowflakeCount={200} />
            
            <motion.div
                className="max-w-3xl text-center glass p-12 rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-accent">Our Vision</h1>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                    We believe fashion is the ultimate form of self-expression in the digital age.
                    Our designs are not just clothes; they are an extension of your identity in both physical and virtual worlds.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                    Born in the nebulas of the metaverse, crafted for the streets of reality.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
