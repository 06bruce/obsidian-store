import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Preload } from '@react-three/drei';
import Model from '../canvas/Model';

const Product3DCanvas = ({ productId }) => {
    // Render different shapes/colors based on product ID for variety
    const getProductModel = (id) => {
        switch (id) {
            case 1:
                return 'neon';
            case 2:
                return 'void';
            case 3:
                return 'astral';
            default:
                return 'neon';
        }
    };

    const modelType = getProductModel(productId);

    return (
        <div className="w-full h-full" style={{ width: '100%', height: '100%' }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ width: '100%', height: '100%' }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[8, 8, 4]} intensity={1} />
                    <spotLight position={[-8, -8, -4]} intensity={0.4} angle={0.2} penumbra={1} />

                    <Model />

                    <Environment preset="city" />
                    <OrbitControls 
                        enableZoom={false} 
                        enablePan={false} 
                        autoRotate 
                        autoRotateSpeed={2}
                    />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Product3DCanvas;
