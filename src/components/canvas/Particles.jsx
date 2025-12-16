import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Particles = (props) => {
    const ref = useRef();

    // Use useMemo to ensure particles are only generated once and safely
    const sphere = useMemo(() => {
        // Generate valid float32 positions
        const positions = new Float32Array(5000 * 3); // stride of 3 (x, y, z)
        return random.inSphere(positions, { radius: 10 });
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#2997FF"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export default Particles;
