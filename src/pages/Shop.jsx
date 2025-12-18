import { motion } from 'framer-motion';
import ImageCard from '../components/ui/ImageCard';
import Snowfall from 'react-snowfall';

const products = [
    { id: 1, name: "Neon Breaker", price: "$250", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600" },
    { id: 2, name: "Void Walker", price: "$320", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600" },
    { id: 3, name: "Astral Weave", price: "$180", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=600" },
    { id: 4, name: "Cyber Mantis", price: "$400", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600" },
    { id: 5, name: "Glitch Parka", price: "$350", image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600" },
    { id: 6, name: "Data Runner", price: "$220", image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600" },
];

const Shop = () => {
    return (
        <Snowfall color="#ffffff" snowflakeCount={200} >
        <div className="pt-32 px-6 min-h-screen">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Collection</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        className="glass p-4 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                            <ImageCard src={product.image} alt={product.name} productId={product.id} use3D={true} />
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h3 className="text-lg font-medium">{product.name}</h3>
                            <span className="text-accent">{product.price}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </Snowfall>
    );
};

export default Shop;
