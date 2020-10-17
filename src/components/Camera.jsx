//#region ==================== IMPORTS ====================

import React from "react";
import { useRef, useEffect } from "react";

import { useThree } from "react-three-fiber";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// extend({ OrbitControls });

//#endregion ==================== IMPORTS ====================



//#region ==================== CAMERA - REF: https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/ ====================

// export default () => {

//     // Get a reference to the Three.js Camera, and the canvas html element.
//     // We need these to setup the OrbitControls class.
//     // https://threejs.org/docs/#examples/en/controls/OrbitControls

//     const {
//         camera,
//         gl: { domElement },
//     } = useThree();

//     // Ref to the controls, so that we can update them on every frame with useFrame
//     const controlRef = useRef();

//     // useFrame(() => controlRef.current.update(0.25));


//     return (
//         <>
//             <orbitControls args={[camera, domElement]} autoRotate={true} enableZoom={false} ref={controlRef} />
//         </>
//     );
// };

//#endregion ==================== CAMERA - REF: https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/ ====================



//#region ==================== CAMERA - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================

// export default function Camera(props) {
export default (props) => {

    const cameraRef = useRef()
    const { setDefaultCamera } = useThree()

    // Make the camera known to the system
    useEffect(() => void setDefaultCamera(cameraRef.current), [setDefaultCamera])

    // Update it every frame
    // useFrame(() => cameraRef.current.updateMatrixWorld())

    return <perspectiveCamera ref={cameraRef} {...props} />
}

//#endregion ==================== CAMERA - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================
