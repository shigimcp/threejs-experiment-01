//#region ==================== IMPORTS ====================

import React from "react";
import { Suspense } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useFrame } from 'react';

import { Canvas } from "react-three-fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import Camera from "./components/Camera";

import * as THREE from 'three';

<<<<<<< HEAD
// import "./styles.css";

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

//#endregion ==================== CONSTANTS ====================


//#region ==================== FUNCTIONS ====================

function centerObject(thisObject) {
    console.log('');
    console.log('==================== FUNCTION: centerObject(thisObject) ====================');
    console.log('thisObject = ');
    console.log(thisObject);
    // console.log(thisObject.children);
    // console.log(thisObject.position);

    // gsap.set([thisObject], { x: 2, y: 2 });
    // gsap.to([thisObject], { x: 2, y: 2, duration: 1 });

    // thisObject.position = [3, 0, 0];
}

//#endregion ==================== FUNCTIONS ====================







export default function Home() {

    window.scene = new THREE.Scene();
    window.THREE = THREE;


    //#region -------------------- ASSETS _Ref --------------------

    // const logoGroup_Ref = useRef();

    const canvas_Ref = useRef();
    // const logoShapePOS_Ref = useRef();
    // const logoShapeNEG_Ref = useRef();

    // console.log('logoGroup_Ref.current = ' + logoGroup_Ref.current);
    // console.log('logoShapePOS_Ref.current = ' + logoShapePOS_Ref.current);
    // console.log('logoShapeNEG_Ref.current = ' + logoShapeNEG_Ref.current);

    //#endregion -------------------- ASSETS _Ref --------------------


    //#region -------------------- useState DEFs --------------------

    let [windowWidth, setWindowWidth] = useState(getWidth());

    console.log('windowWidth = ' + windowWidth);

    //#endregion -------------------- useState DEFs --------------------


    //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    useEffect(() => {

        let timeoutId = null;

        const resizeListener = () => {

            console.log('useEffect: WINDOW RESIZE - resizeListener triggered!');
            console.log(canvas_Ref.current);

            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

            // centerObject();
            centerObject(canvas_Ref.current);
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }

    }, []);

    //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------



=======
export default function Home() {

>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7
    return (
        <Canvas shadowMap>
            <Suspense fallback={null}>
                <Lights />
                {/* <Camera /> */}
                <Camera position={[0, 0, 7.5]} fov={40} />
                <Scene />
            </Suspense>
        </Canvas>
    );
}
