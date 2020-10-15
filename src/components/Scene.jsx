//#region ==================== IMPORTS ====================

import React from "react";
import { DoubleSide } from "three";

//#endregion ==================== IMPORTS ====================


export default () => {

    //#region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

    function GroundPlane() {
        return (
            <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -5, 0]}>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
            </mesh>
        );
    }

    function BackDrop() {
        return (
            <mesh receiveShadow position={[0, -1, -5]}>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
            </mesh>
        );
    }

    //#region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================


    return (
        <mesh>
            {/* <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" /> */}
            {/* <meshStandardMaterial color={0xffffff} attach="material" side={BackSide} metalness={0.4}/> */}

            <BackDrop />
            <GroundPlane />
        </mesh>
    );
};
