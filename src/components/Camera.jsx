// #region ==================== IMPORTS ====================

import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
// import { useFrame } from "react";

import { useThree } from "react-three-fiber";
// import { extend } from "react-three-fiber";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// extend({ OrbitControls });

// #endregion ==================== IMPORTS ====================



// #region ==================== CAMERA01 - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================

// function Camera01(props) {
//     const cameraRef = useRef();
//     const { setDefaultCamera } = useThree();

//     // Make the camera known to the system
//     useEffect(() => void setDefaultCamera(
//         cameraRef.current
//     // ), []);
//     ), [setDefaultCamera]);

//     // Update it every frame
//     // useFrame(() => cameraRef.current.updateMatrixWorld());


//     return (
//         <perspectiveCamera ref={cameraRef} {...props} />
//     );
// }

// #endregion ==================== CAMERA01 - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================


// export default function Camera() {
export default function Camera(props) {
    // export default (props) => {
    // export default () => {

    const cameraRef = useRef();
    const { setDefaultCamera } = useThree();

    // Make the camera known to the system
    useEffect(() => void setDefaultCamera(cameraRef.current), [setDefaultCamera]);

    // Update it every frame
    // useFrame(() => cameraRef.current.updateMatrixWorld());

    return (
        <perspectiveCamera {...props} ref={cameraRef} />
    );


    // return (
    //     <Camera01 position={[0, 0, 7.5]} fov={40} />
    // );
}
