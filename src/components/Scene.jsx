//#region ==================== IMPORTS ====================

import React from "react";
// import { useState } from "react";
// import { useRef } from "react";

import { DoubleSide } from "three";
// import { MeshPhongMaterial } from "three";

// import Text from "./Text";
import fonts from "../fonts/fonts";

import { extend } from "react-three-fiber";

// import { Canvas3D, Object3DFacade } from "troika-3d";
// import { Text3DFacade } from "troika-3d-text";
// import { Text } from "troika-three-text";
// import { Text as TextMeshImpl } from 'troika-three-text';
import { Text } from "@react-three/drei";

import Logo from "./Logo";
import Cubes from "./Cubes";


extend({ Text });
// extend({ TextMeshImpl });

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



    //#region ==================== TEXT - REF: https://www.npmjs.com/package/troika-three-text ====================
    //        ==================== TEXT - REF: https://codesandbox.io/s/troika-3d-text-via-react-three-fiber-forked-1ebyu ====================

    function Hed() {

        const textHed = "Shigeru McPherson";
        const textSubhed = "digital designer • art director";

        // const textHed = "Shi";
        // const textSubhed = "dig";

        // const [rotation, setRotation] = useState([0, 0, 0, 0]);
        // const [genOptions, setOpts] = useState({


        //#region -------------------- genOptions --------------------

        const genOptions = ({
            font: fonts["Chalet-ParisNineteenSixty"],
            // fontSize: 0.75,
            // color: "#9999ff",
            // maxWidth: 15,
            // maxWidth: window.innerWidth,
            // clipRect: [-6.25, 1.75, 150, 150], 
            clipRect: [0, -5, 150, 50], 
            lineHeight: 1,
            letterSpacing: 0,
            textAlign: "left",
            materialType: "meshPhongMaterial",

            // position: [0, 0, 0],
            // position: [0, 1.5, -4.25],
            rotation: [0, 0, 0],
            anchorX: "left",
            anchorY: "middle", 
            // castShadow: true, 
            receiveShadow: true,
            // font: buildUrl("../fonts/ChaleParNinSix.ttf")
        });

        //#endregion -------------------- genOptions --------------------


        //#region -------------------- hedOptions --------------------

        const hedOptions = ({
            // font: fonts["Chalet-ParisNineteenSixty"],
            fontSize: 0.75,
            color: "#ff0000",
            // color: "#9999ff",
            // maxWidth: 15,
            // lineHeight: 1,
            // letterSpacing: 0,
            // textAlign: "left",
            // materialType: "meshPhongMaterial",

            // position: [-6.25, 1.75, -4.25],
            position: [0, 1.75, -4.25],
            // position: [-window.innerWidth*0.0025, 1.5, -4.25],
            // rotation: [0, 0, 0],
            // anchorX: "left",
            // anchorY: "middle"
        });

        //#endregion -------------------- hedOptions --------------------


        //#region -------------------- subhedOptions --------------------

        const subhedOptions = ({
            // font: fonts["Chalet-ParisNineteenSixty"],
            fontSize: 0.5,
            color: "#0000ff",
            // color: "#ff0000",
            // maxWidth: 15,
            // lineHeight: 1,
            // letterSpacing: 0,
            // textAlign: "left",
            // materialType: "meshPhongMaterial",

            // position: [-6.25, 1, -4.25],
            position: [0, 1, -4.25],
            // rotation: [0, 0, 0],
            // anchorX: "left",
            // anchorY: "middle"
        });

        //#endregion -------------------- subhedOptions --------------------


        return (
            <group>
                <Text text={textHed} {...genOptions} {...hedOptions}>
                    {<meshPhongMaterial attach="material" color={hedOptions.color} />}
                </Text>

                <Text text={textSubhed} {...genOptions} {...subhedOptions}>
                    {<meshPhongMaterial attach="material" color={subhedOptions.color} />}
                </Text>
            </group>
        );
    }

    //#endregion ==================== TEXT - REF: https://www.npmjs.com/package/troika-three-text ====================



    //#region ==================== REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================

    // function Jumbo() {
    //     const ref = useRef()

    //     // useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))

    //     return (
    //         <group ref={ref}>
    //             <Text hAlign="left" position={[0, 4.2, 0]} children="REACT" />
    //             <Text hAlign="left" position={[0, 0, 0]} children="THREE" />
    //             <Text hAlign="left" position={[0, -4.2, 0]} children="FIBER" />
    //             <Text hAlign="left" position={[12, 0, 0]} children="4" size={3} />
    //             <Text hAlign="left" position={[16.5, -4.2, 0]} children="X" />
    //         </group>
    //     )
    // }

    //#endregion ==================== REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================



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
