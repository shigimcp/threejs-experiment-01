// REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1

// import ReactDOM from 'react-dom'
// import React, { Suspense, useState, useRef, useEffect, useMemo } from 'react'
import React from 'react'
import { useState, useRef, useEffect, useMemo } from 'react'

import { Box3, Sphere } from 'three'
import { useFrame } from 'react-three-fiber'
// import { Canvas, extend, useLoader, useThree, useFrame } from 'react-three-fiber'
// import { useThree, useFrame } from 'react-three-fiber'
import { extend, useLoader } from 'react-three-fiber'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { MapControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ MapControls })


// function Controls() {
//     const controls = useRef()
//     const { camera, gl } = useThree()
//     useFrame(() => controls.current.update())
//     return <mapControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} maxZoom={40} minZoom={1.25} />
// }

function Cell({ color, shape, fillOpacity }) {
    return (
        // <mesh>
        <mesh scale={[0.005, -0.005, 0.005]}>
            <meshBasicMaterial attach="material" color={color} opacity={fillOpacity} depthWrite={false} transparent />
            <shapeBufferGeometry attach="geometry" args={[shape]} />
        </mesh>
    )
}

function Svg({ url }) {

    const { paths } = useLoader(SVGLoader, url)

    const shapes = useMemo(() => 
        paths.flatMap((p, i) => 
            p.toShapes(true).map((shape) => 
                ({ shape, color: p.color, fillOpacity: p.userData.style.fillOpacity })
            )
        ), [paths]
    )

    const [center, setCenter] = useState([0, 0, 0])

    const logoBoxRef = useRef()
    // const logoSphereRef = useRef()

    useEffect(() => {
        const box = new Box3().setFromObject(logoBoxRef.current)
        const sphere = new Sphere()
        // const sphere = new Sphere().setFromObject(logoSphereRef.current)
        box.getBoundingSphere(sphere)
        setCenter([-sphere.center.x, -sphere.center.y, 0])
    }, [])

    useFrame(() => {
        logoBoxRef.current.rotation.y += 0.05;
        // logoSphereRef.current.rotation.y += 0.05;
    });

    return (
        <group position={center} ref={logoBoxRef}>
            {shapes.map((props) => (
                <Cell key={props.shape.uuid} {...props} />
            ))}
        </group>
    )
}

// export default () => {
export default function Logo() {
    return (
        <>
            {/* <Svg url="../images/shigeru_logo_ko.svg" /> */}
            <Svg url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/shigeru_logo.svg" />
            <Svg url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/thoughtBubble.svg" />
            {/* <Controls /> */}
        </>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'))
