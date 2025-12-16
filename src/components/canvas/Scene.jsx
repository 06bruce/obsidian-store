import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Model';
import Particles from './Particles';

const Scene = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-primary">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <spotLight position={[-10, -10, -5]} intensity={0.5} angle={0.2} penumbra={1} />

                    <Model />
                    <Particles />

                    <Environment preset="city" />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
