//#region ==================== IMPORTS ====================

import React from "react";
import { useRef } from "react";

import { 
    extend, 
    useThree, 
    // useFrame 
} from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

//#endregion ==================== IMPORTS ====================



export default () => {

    //#region ==================== CAMERA - REF: https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/ ====================

    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls class.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls

    const {
        camera,
        gl: { domElement },
    } = useThree();

    // Ref to the controls, so that we can update them on every frame with useFrame
    const controlRef = useRef();

    // useFrame(() => controlRef.current.update());

    //#endregion ==================== CAMERA - REF: https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/ ====================


    return (
        <>
            <orbitControls args={[camera, domElement]} autoRotate={true} enableZoom={false} ref={controlRef} />
        </>
    );
};
