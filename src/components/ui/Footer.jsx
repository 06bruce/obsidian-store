import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-secondary pt-24 pb-12 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <Link to="/" className="text-3xl font-bold tracking-widest text-white mb-6 block">TANK</Link>
                        <p className="text-gray-400 max-w-sm text-lg leading-relaxed mb-8">
                            Redefining digital fashion for the metaverse generation.
                            Where reality meets the void.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300 group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">EXPLORE</h4>
                        <ul className="space-y-4">
                            {['Shop', 'New Arrivals', 'Accessories', 'About Us', 'Sustainability'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'About Us' ? '/about' : '/shop'} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">NEWSLETTER</h4>
                        <p className="text-gray-400 mb-4 text-sm">Join the void. Get exclusive drops.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors"
                            />
                            <button type="button" className="absolute right-2 top-2 px-3 py-1 bg-accent text-white rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors">
                                JOIN
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2024 TANK. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
