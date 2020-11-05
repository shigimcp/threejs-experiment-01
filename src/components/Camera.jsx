//#region ==================== IMPORTS ====================

import React from "react";
<<<<<<< HEAD
import { useRef } from "react";
import { useEffect } from "react";
// import { useFrame } from "react";
=======
import { useRef, useEffect } from "react";
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

import { useThree } from "react-three-fiber";

//#endregion ==================== IMPORTS ====================



<<<<<<< HEAD
//#region ==================== CAMERA01 - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================

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

//#endregion ==================== CAMERA01 - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================


// export default function Camera() {
export default function Camera(props) {
// export default (props) => {
// export default () => {
=======
//#region ==================== CAMERA - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================

function Camera01(props) {
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

    const cameraRef = useRef();
    const { setDefaultCamera } = useThree();

<<<<<<< HEAD
    // Make the camera known to the system
    useEffect(() => void setDefaultCamera(cameraRef.current), [setDefaultCamera]);

    // Update it every frame
    // useFrame(() => cameraRef.current.updateMatrixWorld());
=======
    useEffect(() => void setDefaultCamera(
        cameraRef.current
    ), [setDefaultCamera]);

>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

    return (
        <perspectiveCamera {...props} ref={cameraRef} />
    );

<<<<<<< HEAD

    // return (
    //     <Camera01 position={[0, 0, 7.5]} fov={40} />
    // );
=======
export default function Camera() {

    return (
        <Camera01 position={[0, 0, 7.5]} fov={40} />
    )
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7
}
