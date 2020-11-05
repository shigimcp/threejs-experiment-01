//#region ==================== IMPORTS ====================

import React from 'react';
// import { Suspense } from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useFrame } from 'react';

import { DoubleSide } from "three";

// import { gsap } from 'gsap';

// import Text from './Text';

import Hed from "./Hed";
import Logo from "./Logo";
// import Cubes from "./Cubes";

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

// const getWidth = () => window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;

//#endregion ==================== CONSTANTS ====================


//#region ==================== FUNCTIONS ====================

// function centerObject(thisObject) {
//     console.log('');
//     console.log('==================== FUNCTION: centerObject(thisObject) ====================');
//     console.log('thisObject = ');
//     console.log(thisObject);
//     // console.log(thisObject.children);
//     // console.log(thisObject.position);

//     // gsap.set([thisObject], { x: 2, y: 2 });
//     // gsap.to([thisObject], { x: 2, y: 2, duration: 1 });

//     // thisObject.position = [3, 0, 0];
// }

//#endregion ==================== FUNCTIONS ====================



// export default () => {
export default function Scene() {

    // console.log('');
    // console.log('====================  export default function Scene()  ====================');

    //#region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

    //#region -------------------- GROUNDPLANE --------------------

    function GroundPlane() {
        return (
            <mesh rotation={[5, 0, 0]} position={[0, -5, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
                {/* <meshPhongMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} /> */}
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
                {/* <meshPhongMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} /> */}
            </mesh>
        );
    }

    //#endregion -------------------- BACKDROP --------------------

    //#endregion ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================





    //#region -------------------- ASSETS _Ref --------------------

    // const scene_Ref = useRef();
    // const logo_Ref = useRef();

    //#endregion -------------------- ASSETS _Ref --------------------


    //#region -------------------- useState DEFs --------------------

    // console.log('');
    // console.log('-------------------- useState DEFs --------------------');

    // let [windowWidth, setWindowWidth] = useState(getWidth());

    // console.log('windowWidth = ' + windowWidth);

    //#endregion -------------------- useState DEFs --------------------


    //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    // useEffect(() => {

    //     let timeoutId = null;

    //     const resizeListener = () => {

    //         // console.log('useEffect: WINDOW RESIZE - resizeListener triggered!');
    //         // // console.log('useEffect: WINDOW RESIZE - logo_Ref.current = ' + logo_Ref.current);
    //         // // console.log('useEffect: WINDOW RESIZE - scene_Ref.current = ' + scene_Ref.current);
    //         // console.log('useEffect: WINDOW RESIZE - scene_Ref.current.children = ' + scene_Ref.current.children);
    //         // console.log(scene_Ref.current.children);
    //         // console.log('useEffect: WINDOW RESIZE - scene_Ref.current.children[1] = ' + scene_Ref.current.children[1]);
    //         // console.log(scene_Ref.current.children[1]);

    //         // prevent execution of previous setTimeout
    //         clearTimeout(timeoutId);

    //         timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

    //         // centerObject();

    //         // centerObject(logo_Ref.current);

    //         // centerObject(scene_Ref.current);
    //         centerObject(scene_Ref.current.children[0]);
    //         // centerObject(scene_Ref.current.children[1]);
    //     };

    //     window.addEventListener('resize', resizeListener);

    //     return () => {
    //         window.removeEventListener('resize', resizeListener);
    //     }

    // }, []);

    //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------





    return (
        <group>
            {/* <group ref={scene_Ref}> */}
            <Hed />
            <Logo />
            {/* <Logo nodeID='thisLogo' /> */}
            {/* <Cubes /> */}
            <BackDrop />
            <GroundPlane />
        </group>
    );
}
