import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="flex items-center gap-4">
                    <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none z-50">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <Link to="/" className="text-2xl font-bold tracking-widest hover:text-accent transition-colors">TANK</Link>
                </div>

                <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide glass px-8 py-3 rounded-full">
                    <Link to="/shop" className="hover:text-accent transition-colors">SHOP</Link>
                    <Link to="/shop" className="hover:text-accent transition-colors">NEW ARRIVALS</Link>
                    <Link to="/about" className="hover:text-accent transition-colors">ABOUT</Link>
                </div>

                <div className="flex items-center gap-6">
                    <Search className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
                    <div className="relative cursor-pointer hover:text-accent transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/" onClick={toggleMenu} className="text-3xl font-bold text-white hover:text-accent">HOME</Link>
                        <Link to="/shop" onClick={toggleMenu} className="text-3xl font-bold text-white hover:text-accent">SHOP</Link>
                        <Link to="/shop" onClick={toggleMenu} className="text-3xl font-bold text-white hover:text-accent">NEW ARRIVALS</Link>
                        <Link to="/about" onClick={toggleMenu} className="text-3xl font-bold text-white hover:text-accent">ABOUT</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
