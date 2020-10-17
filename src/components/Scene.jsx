//#region ==================== IMPORTS ====================

import React, { useState } from "react";

import { DoubleSide } from "three";

import { extend } from "react-three-fiber";

import { Text } from 'troika-three-text';
import fonts from "../fonts/fonts";
extend({ Text });


//#endregion ==================== IMPORTS ====================


export default () => {

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


    //#region ==================== TEXT - REF: https://www.npmjs.com/package/troika-three-text ====================
    //        ==================== TEXT - REF: https://codesandbox.io/s/troika-3d-text-via-react-three-fiber-forked-1ebyu ====================

    const text = "Shigeru McPherson";

    const [rotation, setRotation] = useState([0, 0, 0, 0]);

    const [opts, setOpts] = useState({
        font: "AnimeAceItalic",
        fontSize: 1.5,
        color: "#99ccff",
        maxWidth: 20,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "left",
        materialType: "MeshPhongMaterial"
    });

    //#endregion ==================== TEXT - REF: https://www.npmjs.com/package/troika-three-text ====================



    return (
        <>
            <text
                position-z={-5}
                rotation={rotation}
                {...opts}
                text={text}
                font={fonts[opts.font]}
                anchorX="center"
                anchorY="middle"
            >
                {opts.materialType === "MeshPhongMaterial" ? (
                    <meshPhongMaterial attach="material" color={opts.color} />
                ) : null}
            </text>

            <BackDrop />
            <GroundPlane />
        </>
    );
};
