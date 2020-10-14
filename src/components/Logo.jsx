//#region ==================== IMPORTS ====================

// REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1

// import ReactDOM from 'react-dom';
// import React, { Suspense, useState, useRef, useEffect, useMemo } from 'react';
import React from 'react';
// import { useState, useRef, useEffect, useMemo } from 'react';
import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import { useRef, useMemo } from 'react';

import * as THREE from 'three';
// import { Canvas } from 'react-three-fiber';
// import { Box3, Sphere } from 'three';
// import { useFrame } from 'react-three-fiber';
// import { Canvas, extend, useLoader, useThree, useFrame } from 'react-three-fiber';
// import { useThree, useFrame } from 'react-three-fiber';
// import { useThree } from 'react-three-fiber';
// import { extend, useLoader } from 'react-three-fiber';
import { useLoader } from 'react-three-fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useFrame } from 'react-three-fiber';

// import { MapControls } from 'three/examples/jsm/controls/OrbitControls';
// extend({ MapControls });

//#endregion ==================== IMPORTS ====================



//#region ==================== CONTROLS - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

// function Controls() {
//     const controls = useRef();
//     const { camera, gl } = useThree();

//     useFrame(() => controls.current.update());

//     return (
//         <mapControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} maxZoom={40} minZoom={1.25} />
//     )
// }

//#endregion ==================== CONTROLS - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================



//#region ==================== LOGOMESH - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

// function LogoMesh({ color, shape, fillOpacity }) {
// function LogoMesh({ color, depthNum, shape, fillOpacity, strokeColor }) {
// function LogoMesh({ color, depthNum, shape, fillOpacity }) {
// function LogoMesh({ color, shape, fillOpacity }) {
function LogoMesh(props) {

    console.log('');
    console.log('==================== LogoMesh ====================');
    // console.log('props = ' + props);
    // console.log('props = ');
    console.log(props);
    // console.log(props.color);


    //#region -------------------- REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 --------------------

    // return (
    //     <mesh scale={[0.005, -0.005, 0.005]} position={[-2.5, 0, 0]}>
    //         <meshBasicMaterial attach="material" color={color} opacity={fillOpacity} depthWrite={false} transparent />
    //         <shapeBufferGeometry attach="geometry" args={[shape]} />
    //     </mesh>
    // )

    //#endregion -------------------- REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 --------------------


    //#region -------------------- EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f --------------------
    //        -------------------- PARAMETERS - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------

    // // console.log('');
    // console.log('-------------------- LogoMesh: EXTRUDE --------------------');
    // console.log('props.extrudeDir = ' + props.extrudeDir);


    let extrudeSettings = {
        curveSegments: 7, 
        steps: 2, 
        depth: 20, 
        // bevelEnabled: false, 
        bevelEnabled: true, 
        bevelThickness: 10,
        bevelSize: 10, 
        bevelOffset: 0, 
        bevelSegments: 20, 
        // extrudePath: [some THREE.Curve], 
        // UVGenerator: [some Oject]
    };

    // console.log('extrudeSettings = ' + extrudeSettings);
    // console.log(extrudeSettings);

    if (props.extrudeDir === 'negative') {
        extrudeSettings.depth = extrudeSettings.depth * -1;
    }

    // console.log(extrudeSettings);


    //#region -------------------- LOGO center --------------------

    const logoMeshRef = useRef()
    const [center, setCenter] = useState([0, 0, 0])

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(logoMeshRef.current)
        const sphere = new THREE.Sphere()
        box.getBoundingSphere(sphere)
        setCenter([-sphere.center.x, -sphere.center.y, 0])
    }, [])

    // const box3 = new THREE.Box3().setFromObject(logoGroupRef.current);
    // const box3 = new THREE.Box3();
    // box3.setFromObject(logoGroupRef.current);

    // const box3 = useMemo(() => {
    //     new THREE.Box3().setFromObject(logoGroupRef.current)
    // }, [])
    // const box3 = useMemo(() => new THREE.Box3().setFromObject(logoGroupRef.current), [])


    // const vector = new THREE.Vector3()
    // box3.getCenter(vector)
    // // logoGroupRef.current.position.set(-vector.x, -vector.y, -vector.z)
    // let center = (-vector.x, -vector.y, -vector.z)

    //#endregion -------------------- LOGO center --------------------


    //#region -------------------- Checks if black or white. Should be made more dynamic ultimately... doesn't seem to work (see console messages) --------------------

    // // let zPos;
    // let zPos = 0;

    // if (color.r !== 1) {
    // // if (color !== 1) {
    // // if (color === 1) {

    //     console.log('');
    //     // console.log('color = ' + color);
    //     console.log('color === 1 ' + color);
    //     console.log(color);
    //     // console.log('fillOpacity = ' + fillOpacity);

    //     // zPos = 1;
    //     // zPos = 0;

    //     // thisBlend = THREE.NormalBlending;
    //     // thisCull = THREE.CullFaceFrontBack;

    // } else {

    //     console.log('');
    //     // console.log('color = ' + color);
    //     console.log('color !== 1 ' + color);
    //     console.log(color);
    //     // console.log('fillOpacity = ' + fillOpacity);

    //     // zPos = -1;
    //     // zPos = 0;

    //     // thisBlend = THREE.SubtractiveBlending;
    //     // thisCull = THREE.CullFaceNone;
    // }

    //#endregion -------------------- Checks if black or white. Should be made more dynamic ultimately... doesn't seem to work (see console messages) --------------------

    //#endregion -------------------- EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f --------------------


    return (
        // <mesh scale={[0.005, -0.005, 0.005]}>
        // <mesh scale={[0.005, -0.005, 0.005]} position={[-2.5, 0, 0]}>
        <mesh scale={[0.005, -0.005, 0.005]} position={center} ref={logoMeshRef}>
            {/* <meshPhongMaterial attach="material" color={color} side={THREE.DoubleSide} depthWrite={true} transparent opacity={fillOpacity} /> */}
            {/* <meshStandardMaterial attach="material" color={color} side={THREE.DoubleSide} depthWrite={true} transparent opacity={fillOpacity} /> */}
            <meshStandardMaterial attach="material" color={props.color} side={THREE.DoubleSide} depthWrite={true} transparent opacity={props.fillOpacity} />
            <extrudeBufferGeometry attach="geometry" args={[[props.shape], extrudeSettings]} />
        </mesh>
    )
}

//#endregion ==================== LOGOMESH - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================



//#region ==================== LOGOSHAPE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================

// function LogoShape({ url, depthNum, color, shape, fillOpacity, strokeColor }) {
// function LogoShape({ url }) {
function LogoShape(props) {

    // console.log('');
    // console.log('==================== LogoShape ====================');
    // console.log(props);


    // const { paths } = useLoader(SVGLoader, url)
    const { paths } = useLoader(SVGLoader, props.url)

    const shapes = useMemo(() => 
        paths.flatMap((thisPath, i) => 
            thisPath.toShapes(true).map((shape) => 
                // ({ shape, color: thisPath.color, fillOpacity: thisPath.userData.style.fillOpacity })
                // ({ shape, color: thisPath.color, fillOpacity: props.fillOpacity })
                ({ shape, color: thisPath.color, fillOpacity: props.fillOpacity, extrudeDir: props.extrudeDir })
            )
        // ), [paths]
        ), [paths, props]
    )

    // const center = [0, 2.5, 0]
    // const [center, setCenter] = useState([0, 0, 0])
    // const [center, setCenter] = useState([0, 0, 0])
    // let center
    // const thisRotation = [THREE.Math.degToRad(0), THREE.Math.degToRad(0), THREE.Math.degToRad(0)]
    const logoGroupRef = useRef()


    // // console.log('shapes = ' + shapes);
    // console.log('shapes = ');
    // console.log(shapes);


    // //#region -------------------- LOGO center --------------------

    // useEffect(() => {
    //     const box = new THREE.Box3().setFromObject(logoGroupRef.current)
    //     const sphere = new THREE.Sphere()
    //     box.getBoundingSphere(sphere)
    //     setCenter([-sphere.center.x, -sphere.center.y, 0])
    // }, [])

    // // const box3 = new THREE.Box3().setFromObject(logoGroupRef.current);
    // // const box3 = new THREE.Box3();
    // // box3.setFromObject(logoGroupRef.current);

    // // const box3 = useMemo(() => {
    // //     new THREE.Box3().setFromObject(logoGroupRef.current)
    // // }, [])
    // // const box3 = useMemo(() => new THREE.Box3().setFromObject(logoGroupRef.current), [])


    // // const vector = new THREE.Vector3()
    // // box3.getCenter(vector)
    // // // logoGroupRef.current.position.set(-vector.x, -vector.y, -vector.z)
    // // let center = (-vector.x, -vector.y, -vector.z)

    // //#endregion -------------------- LOGO center --------------------


    //#region -------------------- LOGO spin --------------------

    useFrame(() => {
        logoGroupRef.current.rotation.y += 0.025;
    });

    //#endregion -------------------- LOGO spin --------------------


    return (
        <group ref={logoGroupRef}>
        {/* <group position={center} ref={logoGroupRef}>
        <group position={center} ref={logoGroupRef} rotation={thisRotation}> */}
            {shapes.map((props) => (
                <LogoMesh key={props.shape.uuid} {...props} />
            ))}
        </group>
    )
}

//#endregion ==================== LOGOSHAPE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================



export default function Logo() {
    return (
        <>
            <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude.svg" fillOpacity="0.5" extrudeDir="positive" />
            <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude.svg" fillOpacity="0.5" extrudeDir="negative" />
        </>
    )
}
