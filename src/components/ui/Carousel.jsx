import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import './Carousel.css';

const Carousel = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
        }, 8500); // 8s spin + 0.5s transition

        return () => clearInterval(interval);
    }, [products.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            {/* Grid view - show all images */}
            <div className="carousel-grid">
                {products.map((product) => (
                    <div key={product.id} className="carousel-grid-item">
                        <div className="carousel-image-wrapper">
                            <ImageCard
                                src={product.image}
                                alt={product.name}
                                productId={product.id}
                                use3D={true}
                                spin={true}
                            />
                        </div>
                        <div className="carousel-label">
                            <h3>{product.name}</h3>
                            <span>{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Spotlight carousel - optional */}
            <div className="carousel-spotlight mt-20">
                <div className="spotlight-title">Featured:</div>
                <div className="carousel-track-wrapper">
                    {products.map((product, index) => {
                        const offset = (index - currentIndex + products.length) % products.length;
                        const distance = offset <= products.length / 2 ? offset : offset - products.length;
                        const isVisible = Math.abs(distance) <= 1.5;

                        return (
                            <div
                                key={product.id}
                                className={`carousel-item ${offset === 0 ? 'center' : ''}`}
                                style={{
                                    transform: `translateX(calc(${distance} * 100%)) scale(${offset === 0 ? 1 : 0.65})`,
                                    opacity: isVisible ? (offset === 0 ? 1 : 0.4) : 0,
                                    pointerEvents: offset === 0 ? 'auto' : 'none',
                                }}
                            >
                                <div className="carousel-image-wrapper">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="carousel-label">
                                    <h3>{product.name}</h3>
                                    <span>{product.price}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation dots for spotlight */}
            <div className="carousel-dots">
                {products.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
