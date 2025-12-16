import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full h-[110vh] flex flex-col justify-center items-center z-10 pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 text-center mt-20">
                <motion.span
                    className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    The New Collection
                </motion.span>

                <motion.h1
                    className="text-6xl md:text-9xl font-bold tracking-tight text-white mb-6"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Future <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Ready.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Designed for the metaverse, tailored for reality. <br className="hidden md:block" /> Experience the next evolution of digital fashion.
                </motion.p>

                <motion.div
                    className="flex gap-6 justify-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link
                        to="/shop"
                        className="px-8 py-4 bg-accent text-white font-semibold rounded-full text-lg pointer-events-auto hover:bg-opacity-90 transition-all hover:scale-105"
                    >
                        Shop Now
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 glass text-white font-semibold rounded-full text-lg pointer-events-auto hover:bg-white/20 transition-all"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
