// REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1

// import ReactDOM from 'react-dom'
// import React, { Suspense, useState, useRef, useEffect, useMemo } from 'react'
import React from 'react'
// import { useState, useRef, useEffect, useMemo } from 'react'
// import { useState, useEffect } from 'react'
import { useRef, useMemo } from 'react'

// import * as THREE from 'three'
// import { Canvas } from 'react-three-fiber'
// import { Box3, Sphere } from 'three'
// import { useFrame } from 'react-three-fiber'
// import { Canvas, extend, useLoader, useThree, useFrame } from 'react-three-fiber'
// import { useThree, useFrame } from 'react-three-fiber'
// import { extend, useLoader } from 'react-three-fiber'
import { useLoader } from 'react-three-fiber'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { useFrame } from 'react-three-fiber'
// import { MapControls } from 'three/examples/jsm/controls/OrbitControls'

// extend({ MapControls })



//#region ==================== CONTROLS - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

// function Controls() {
//     const controls = useRef()
//     const { camera, gl } = useThree()
//     useFrame(() => controls.current.update())
//     return <mapControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} maxZoom={40} minZoom={1.25} />
// }

//#endregion ==================== CONTROLS - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================



//#region ==================== LOGOMESH - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

// function LogoMesh({ color, shape, fillOpacity }) {
// function LogoMesh({ color, depthNum, shape, fillOpacity, strokeColor }) {
// function LogoMesh({ color, depthNum, shape, fillOpacity }) {
function LogoMesh({ color, shape, fillOpacity }) {

    //#region -------------------- REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 --------------------

    // return (
    //     <mesh scale={[0.005, -0.005, 0.005]} position={[-2.5, 0, 0]}>
    //         <meshBasicMaterial attach="material" color={color} opacity={fillOpacity} depthWrite={false} transparent />
    //         <shapeBufferGeometry attach="geometry" args={[shape]} />
    //     </mesh>
    // )

    //#endregion -------------------- REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 --------------------


    //#region -------------------- EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f --------------------

    var extrudeSettings;
    // var zPos;
    var depthNum = 50;
    // depthNum = 5;


    // Checks if black or white. Should be made more dynamic ultimately.

    // if (color.r !== 1) {
    if (color !== 1) {
    // if (color === 1) {

        // console.log('');
        // // console.log('color = ' + color);
        // console.log('color === 1 ' + color);
        // console.log(color);
        // // console.log('fillOpacity = ' + fillOpacity);

        extrudeSettings = {
            steps: 2,
            // depth: 2,
            depth: depthNum,
            bevelEnabled: false
        }

        // zPos = 1;
        // zPos = 0;

    } else {

        // console.log('');
        // // console.log('color = ' + color);
        // console.log('color !== 1 ' + color);
        // console.log(color);
        // // console.log('fillOpacity = ' + fillOpacity);

        extrudeSettings = {
            steps: 2,
            depth: depthNum,
            bevelEnabled: false
        }

        // zPos = 0;
    }

    // <mesh scale={[0.005, -0.005, 0.005]} position={[0, 0, zPos]} rotation={[0, THREE.Math.degToRad(-30), THREE.Math.degToRad(-30)]}>

    return (
        <mesh scale={[0.005, -0.005, 0.005]} position={[-2.5, 0, 0]}>
            <meshPhongMaterial attach="material" color={color} side={"doubleSide"} opacity={fillOpacity} depthWrite={true} />
            <extrudeBufferGeometry attach="geometry" args={[[shape], extrudeSettings]} />
        </mesh>
    )

    //#endregion -------------------- EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f --------------------
}

//#endregion ==================== LOGOMESH - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================



//#region ==================== LOGOSHAPE - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

function LogoShape({ url }) {
// function LogoShape({ url, depthNum, color, shape, fillOpacity, strokeColor }) {

    const { paths } = useLoader(SVGLoader, url)

    const shapes = useMemo(() => 
        paths.flatMap((p, i) => 
            p.toShapes(true).map((shape) => 
                ({ shape, color: p.color, fillOpacity: p.userData.style.fillOpacity })
            )
        ), [paths]
    )

    // const [center, setCenter] = useState([0, 0, 0])
    const center = [0, 2.5, 0]

    const logoGroupRef = useRef()


    //#region -------------------- REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 --------------------

    // useEffect(() => {
    //     const box = new Box3().setFromObject(logoGroupRef.current)
    //     const sphere = new Sphere()
    //     box.getBoundingSphere(sphere)
    //     setCenter([-sphere.center.x, -sphere.center.y, 0])
    // }, [])

    useFrame(() => {
        logoGroupRef.current.rotation.y += 0.025;
    });

    return (
        <group position={center} ref={logoGroupRef}>
            {shapes.map((props) => (
                <LogoMesh key={props.shape.uuid} {...props} />
            ))}
        </group>
    )

    //#endregion -------------------- REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 --------------------
}

//#endregion ==================== LOGOSHAPE - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================


            // <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo_rev.svg" />
            // <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo_ko.svg" />
            // <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo_ko_rev.svg" />
            // <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo_transparent.svg" />
            // <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo_test.svg" />

            // <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/thoughtBubble.svg" />

            // <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo.svg" depthNum="2" color="#000000" />

// export default () => {
export default function Logo() {
    return (
        <>
            <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo.svg" />
        </>
    )
}
