//#region ==================== IMPORTS ====================

import React from "react";

//#endregion ==================== IMPORTS ====================



// export default () => {
export default function Lights(props) {

    //#region ==================== LIGHTS - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

    //#region -------------------- LIGHTS: KeyLight --------------------

    function KeyLight({ brightness, color }) {
        return (
            <rectAreaLight
                width={3}
                height={3}
                color={color}
                intensity={brightness}
                position={[-2, 0, 5]}
                lookAt={[0, 0, 0]}
                penumbra={1}
            />
        );
    }

    //#endregion -------------------- LIGHTS: KeyLight --------------------


    //#region -------------------- LIGHTS: FillLight --------------------

    function FillLight({ brightness, color }) {
        return (
            <rectAreaLight
                width={3}
                height={3}
                intensity={brightness}
                color={color}
                position={[2, 1, 4]}
                lookAt={[0, 0, 0]}
                penumbra={2}
            />
        );
    }

    //#endregion -------------------- LIGHTS: FillLight --------------------


    //#region -------------------- LIGHTS: RimLight --------------------

    function RimLight({ brightness, color }) {
        return (
            <rectAreaLight
                width={2}
                height={2}
                intensity={brightness}
                color={color}
                position={[1, 4, -2]}
                rotation={[0, 180, 0]}
            />
        );
    }

    //#endregion -------------------- LIGHTS: RimLight --------------------


    //#region -------------------- LIGHTS: ShadowLight --------------------

    function ShadowLight() {
        return (
            <directionalLight
                castShadow
                position={[2.5, 0, 5]}
                intensity={0.05}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.1}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
        );
    }

    //#endregion -------------------- LIGHTS: ShadowLight --------------------

    //#endregion ==================== LIGHTS - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================


    return (
        <group>
            <KeyLight brightness={10} color="#ccccff" />
            <FillLight brightness={10} color="#ffffff" />
            <RimLight brightness={10} color="#eeeeff" />
            <ShadowLight />
        </group>
    );
};
