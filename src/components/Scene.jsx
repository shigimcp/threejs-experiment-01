// #region ==================== IMPORTS ====================

import React from 'react';
// import { Suspense } from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useFrame } from 'react';

import { DoubleSide } from "three";

// import { gsap } from 'gsap';

// import Text from './Text';

import Hed from "./Hed";
import Logo from "./Logo";
// import Cubes from "./Cubes";

// #endregion ==================== IMPORTS ====================



// export default () => {
export default function Scene() {

    // console.log('');
    // console.log('====================  export default function Scene()  ====================');

    // #region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

    // #region -------------------- GROUNDPLANE --------------------

    function GroundPlane() {
        return (
            <mesh rotation={[5, 0, 0]} position={[0, -5, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
                {/* <meshPhongMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} /> */}
            </mesh>
        );
    }

    // #endregion -------------------- GROUNDPLANE --------------------


    // #region -------------------- BACKDROP --------------------

    function BackDrop() {

        return (
            <mesh position={[0, -1, -5]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
                {/* <meshPhongMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} /> */}
            </mesh>
        );
    }

    // #endregion -------------------- BACKDROP --------------------

    // #endregion ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================


    return (
        <group>
            {/* <group ref={scene_Ref}> */}
            <Hed />
            <Logo />
            {/* <Logo nodeID='thisLogo' /> */}
            {/* <Cubes /> */}
            <BackDrop />
            <GroundPlane />
        </group>
    );
}
