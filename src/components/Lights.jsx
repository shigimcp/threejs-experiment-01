import React from "react";

export default () => {
    const FakeSphere = () => {
        return (
            <mesh>
                <sphereBufferGeometry args={[10, 30, 30]} attach="geometry" />
                <meshBasicMaterial color={0x999999} attach="material" />
            </mesh>
        );
    };

    return (
        <group>
            <FakeSphere />
            <ambientLight intensity={0.9} />
            <pointLight intensity={1.12} position={[0, 0, 0]} />
        </group>
    );
};
