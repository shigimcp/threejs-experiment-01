//#region ==================== IMPORTS ====================

//#region -------------------- HED: PLAIN TEXT GEOMTRY - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef --------------------

import React from 'react';

import { DoubleSide } from "three";

import Hed from "./Hed";
import Logo from "./Logo";
import Cubes from "./Cubes";

//#endregion -------------------- HED: PLAIN TEXT GEOMTRY - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef --------------------

//#endregion ==================== IMPORTS ====================


// export default () => {
export default function Scene() {

    //#region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

    //#region -------------------- GROUNDPLANE --------------------

    function GroundPlane() {
        return (
            <mesh rotation={[5, 0, 0]} position={[0, -5, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
            </mesh>
        );
    }

    //#endregion -------------------- GROUNDPLANE --------------------


    //#region -------------------- BACKDROP --------------------

    function BackDrop() {

        return (
            <mesh position={[0, -1, -5]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
            </mesh>
        );
    }

    //#endregion -------------------- BACKDROP --------------------

    //#endregion ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================


    return (
        <group>
            <Hed />
            <Logo />
            <Cubes />
            <BackDrop />
            <GroundPlane />
        </group>
    )
}
