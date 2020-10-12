//#region ==================== IMPORTS ====================

// REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1

import React from 'react';
import { useRef, useMemo } from 'react';

import * as THREE from 'three';
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
    //        -------------------- PARAMETERS - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------

    var zPos;

    var extrudeSettings = {
        curveSegments: 3, 
        steps: 2, 
        depth: 50, 
        bevelEnabled: false, 
        // bevelThickness: 30, 
        // bevelSize: 10, 
        // bevelOffset: 0, 
        // bevelSegments: 20, 
        // extrudePath: [some THREE.Curve], 
        // UVGenerator: [some Oject]
    };


    // Checks if black or white. Should be made more dynamic ultimately.

    // if (color.r !== 1) {
    if (color !== 1) {
    // if (color === 1) {

        console.log('');
        // console.log('color = ' + color);
        console.log('color === 1 ' + color);
        console.log(color);
        // console.log('fillOpacity = ' + fillOpacity);

        // zPos = 1;
        zPos = 0;

    } else {

        console.log('');
        // console.log('color = ' + color);
        console.log('color !== 1 ' + color);
        console.log(color);
        // console.log('fillOpacity = ' + fillOpacity);


        zPos = 0;
        // zPos = -1;
        // thisBlend = THREE.SubtractiveBlending;
        // thisCull = THREE.CullFaceNone;
    }


    return (
        <mesh scale={[0.005, -0.005, 0.005]} position={[-2.5, 0, zPos]}>
            <meshPhongMaterial attach="material" color={color} side={THREE.DoubleSide} opacity={fillOpacity} depthWrite={true} />
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
        paths.flatMap((thisPath, i) => 
            thisPath.toShapes(true).map((shape) => 
                ({ shape, color: thisPath.color, fillOpacity: thisPath.userData.style.fillOpacity })
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



// export default () => {
export default function Logo() {
    return (
        <>
            <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_transparent.svg" />
        </>
    )
}
