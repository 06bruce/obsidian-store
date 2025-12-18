import React, { useRef, useState } from 'react';
import Product3DCanvas from './Product3DCanvas';
import './ProductCard.css';

const ProductCard = ({ product, autoRotate = false, use3D = true }) => {
    const containerRef = useRef(null);
    const innerRef = useRef(null);

    const [flipped, setFlipped] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMove = (e) => {
        if (flipped) return;
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotY = (x - 0.5) * 18;
        const rotX = (0.5 - y) * 12;
        setTilt({ x: rotX, y: rotY });
    };

    const handleEnter = () => {
        setFlipped(true);
    };

    const handleLeave = () => {
        setTilt({ x: 0, y: 0 });
        setFlipped(false);
    };

    const transformValue = flipped 
        ? 'rotateY(180deg)' 
        : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;

    return (
        <div
            ref={containerRef}
            style={{ perspective: 1000 }}
            className="product-card-container"
            onMouseMove={handleMove}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <div
                ref={innerRef}
                className={`product-card-inner ${flipped ? 'flipped' : ''} ${autoRotate ? 'spinning' : ''}`}
                style={{
                    transform: transformValue,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Front face */}
                <div className="front-face">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back face - 3D canvas or info panel */}
                <div className="back-face flex flex-col items-center justify-center p-6">
                    {use3D ? (
                        <Product3DCanvas productId={product.id} />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black/60 to-black/40">
                            <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                            <span className="text-gray-300 mb-4">{product.price}</span>
                            <p className="text-sm text-gray-400 text-center">Quick view of the drop — nice materials, limited run.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
