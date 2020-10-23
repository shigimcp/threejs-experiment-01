//#region ==================== IMPORTS ====================

import React from "react";
import { useRef, useEffect } from "react";

import { useThree } from "react-three-fiber";

//#endregion ==================== IMPORTS ====================



//#region ==================== CAMERA - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================

function Camera01(props) {

    const cameraRef = useRef();
    const { setDefaultCamera } = useThree();

    useEffect(() => void setDefaultCamera(
        cameraRef.current
    ), [setDefaultCamera]);


    return (
        <perspectiveCamera ref={cameraRef} {...props} />
    )
}

export default function Camera() {

    return (
        <Camera01 position={[0, 0, 7.5]} fov={40} />
    )
}

//#endregion ==================== CAMERA - REF: https://github.com/pmndrs/react-three-fiber/blob/master/recipes.md#using-your-own-camera-rig ====================
