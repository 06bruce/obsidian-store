import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: "Neon Breaker",
        price: "$250",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        name: "Void Walker",
        price: "$320",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        name: "Astral Weave",
        price: "$180",
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=600"
    }
];

const ProductShowcase = () => {
    return (
        <section className="relative w-full py-32 px-6 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Latest Drops.
                    </motion.h2>
                    <Link to="/shop" className="text-accent hover:text-white transition-colors text-lg font-medium hidden md:block">
                        View all &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="group relative cursor-pointer glass-card rounded-2xl p-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary mb-4 relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                                <span className="text-gray-400 mt-1">{product.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/shop" className="text-accent hover:text-white transition-colors text-lg font-medium">
                        View all &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
