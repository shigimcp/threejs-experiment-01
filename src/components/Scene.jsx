import React from "react";
import { BackSide } from "three";

export default () => {
    return (
        <mesh>
            <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
            {/* <sphereBufferGeometry args={[2, 2, 2]} attach="geometry" /> */}
            <meshStandardMaterial
                // color={0xd2452b}
                color={0xffffff}
                attach="material"
                side={BackSide}
                metalness={0.4}
            />
        </mesh>
    );
};
