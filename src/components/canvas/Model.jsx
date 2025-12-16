import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, TorusKnot, Octahedron, Icosahedron, MeshTransmissionMaterial } from '@react-three/drei';

const FloatingShape = ({ position, rotation, scale, geometry: Geometry }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <Float floatIntensity={2} speed={1.5} rotationIntensity={1}>
            <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
                <Geometry />
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={1}
                    thickness={0.5}
                    roughness={0}
                    transmission={1}
                    chromaticAberration={1}
                    anisotropy={1}
                    color="#2997FF"
                    distortion={0.5}
                    distortionScale={0.5}
                />
            </mesh>
        </Float>
    );
};

const Model = () => {
    return (
        <group>
            <FloatingShape position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} geometry={() => <TorusKnot args={[1, 0.3, 128, 32]} />} />
            <FloatingShape position={[-3, 2, -2]} rotation={[1, 0, 1]} scale={0.5} geometry={() => <Octahedron args={[1]} />} />
            <FloatingShape position={[3, -2, -2]} rotation={[0, 1, 1]} scale={0.7} geometry={() => <Icosahedron args={[1]} />} />
        </group>
    );
};

export default Model;
