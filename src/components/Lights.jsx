//#region ==================== IMPORTS ====================

import React from "react";

//#endregion ==================== IMPORTS ====================



export default () => {

    //#region ==================== FakeSphere ====================

    // const FakeSphere = () => {
    //     return (
    //         <mesh>
    //             <sphereBufferGeometry args={[10, 30, 30]} attach="geometry" />
    //             <meshBasicMaterial color={0x999999} attach="material" />
    //         </mesh>
    //     );
    // };

    //#endregion ==================== FakeSphere ====================


    //#region ==================== LIGHTS - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

    // function Light({ brightness, color }) {
    //     return (
    //         <rectAreaLight
    //             width={3}
    //             height={3}
    //             color={color}
    //             intensity={brightness}
    //             position={[-2, 0, 5]}
    //             lookAt={[0, 0, 0]}
    //             penumbra={1}
    //             castShadow
    //         />
    //     );
    // }

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
                castShadow
            />
        );
    }

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
                castShadow
            />
        );
    }

    function RimLight({ brightness, color }) {
        return (
            <rectAreaLight
                width={2}
                height={2}
                intensity={brightness}
                color={color}
                position={[1, 4, -2]}
                rotation={[0, 180, 0]}
                castShadow
            />
        );
    }

    //#endregion ==================== LIGHTS - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================


    return (
        <group>
            {/* <FakeSphere /> */}
            {/* <ambientLight intensity={0.9} /> */}
            {/* <pointLight intensity={1.12} position={[0, 0, 0]} /> */}

            {/* <Light /> */}
            <KeyLight brightness={10} color="#ccccff" />
            <FillLight brightness={10} color="#ffffff" />
            <RimLight brightness={10} color="#eeeeff" />
        </group>
    );
};
