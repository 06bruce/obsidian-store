import React from 'react';
import Product3DCanvas from './Product3DCanvas';
import './ImageCard.css';

const ImageCard = ({ src, alt, use3D = true, productId = 1 }) => {
    return (
        <div className="image-card-wrapper">
            <div className="image-card-inner">
                {/* Front face */}
                <div className="image-card-front">
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                </div>

                {/* Back face - 3D canvas or gradient */}
                <div className="image-card-back">
                    {use3D ? (
                        <Product3DCanvas productId={productId} />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/30 to-black/60 flex items-center justify-center">
                            <span className="text-white/60 text-sm">360° View</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
