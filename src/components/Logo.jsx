//#region ==================== IMPORTS ====================

import React from 'react';
import { useState, useEffect } from 'react';
import { useRef, useMemo } from 'react';

import { DoubleSide } from "three";
import { Box3, Sphere } from "three";

import { useLoader } from 'react-three-fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useFrame } from 'react-three-fiber';

//#endregion ==================== IMPORTS ====================



//#region ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

function LogoShape(props) {

    //#region -------------------- LOGOSHAPE shapes --------------------


    const { paths } = useLoader(SVGLoader, props.url)

    const shapes = useMemo(() =>
        paths.flatMap((thisPath, i) =>
            thisPath.toShapes(true).map((shape) =>
                ({ shape, color: props.fillColor, fillOpacity: props.fillOpacity, extrudeDir: props.extrudeDir, nodeID: thisPath.userData.node.id })
            )
            // ), []
        ), [paths, props]
    )

    //#endregion -------------------- LOGOSHAPE shapes --------------------


    //#region -------------------- LOGOSHAPE center --------------------

    const [center, setCenter] = useState([0, 0, 0])

    const logoGroupRef = useRef()

    useEffect(() => {

        const box = new Box3().setFromObject(logoGroupRef.current)
        const sphere = new Sphere()

        box.getBoundingSphere(sphere)

        setCenter([0, -sphere.center.y, 0])

    }, [])

    //#endregion -------------------- LOGOSHAPE center --------------------


    //#region -------------------- LOGOSHAPE spin --------------------

    useFrame(() => {
        logoGroupRef.current.rotation.y += 0.025;
    });

    //#endregion -------------------- LOGOSHAPE spin --------------------


    return (
        <group position={center} ref={logoGroupRef}>
            {shapes.map((props) => (
                <LogoMesh key={props.shape.uuid} {...props} />
            ))}
        </group>
    )
}

//#endregion ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================



//#region ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================

function LogoMesh(props) {

    console.log('==================== LOGOMESH ====================');
    console.log(props);

    //#region -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------

    let extrudeSettings = {
        curveSegments: 7, 
        steps: 2, 
        depth: 25, 
        bevelEnabled: false, 
    };

    if (props.extrudeDir === 'negative') {
        extrudeSettings.depth = extrudeSettings.depth * -1;
    }

    //#endregion -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------


    //#region -------------------- LOGOMESH center --------------------

    const logoMeshRef = useRef()
    const [center, setCenter] = useState([0, 0, 0])


    useEffect(() => {

        const box = new Box3().setFromObject(logoMeshRef.current)
        const sphere = new Sphere()
        box.getBoundingSphere(sphere)


        //#region - - - - - - - - - - - LOGOMESH center: via props.nodeID (see LogoShape below) - - - - - - - - - - -

        switch (props.nodeID) {

            case 'kanji_ko01ID':

                setCenter([-sphere.center.x * 0.809716599190283, 0, 0])

                break;

            case 'kanji_ko02ID':

                setCenter([-sphere.center.x * 0.798522414124903, 0, 0])

                break;

            default:

                setCenter([-sphere.center.x, 0, 0])

                break;
        }

        //#endregion - - - - - - - - - - - LOGOMESH center: via props.nodeID (see LogoShape below) - - - - - - - - - - -

    }, [props.nodeID])

    //#endregion -------------------- LOGOMESH center --------------------

    
    let meshScaleFactor;
    const meshColor = "#000022";


    //#region -------------------- LOGOMESH responsive --------------------

    switch (true) {

        case (window.innerWidth >= 1441):
            meshScaleFactor = 0.005;

            break;

        case (window.innerWidth >= 992 && window.innerWidth <= 1440):
            meshScaleFactor = 0.005;

            break;

        case (window.innerWidth >= 768 && window.innerWidth <= 991):
            meshScaleFactor = 0.005;

            break;

        case (window.innerWidth >= 375 && window.innerWidth <= 767):
            meshScaleFactor = 0.00225;

            break;

        default:
            meshScaleFactor = 0.005;

            break;
    }

    //#endregion -------------------- LOGOMESH responsive --------------------


    return (
        <mesh id={props.id} scale={[meshScaleFactor, -meshScaleFactor, meshScaleFactor]} position={center} castShadow receiveShadow ref={logoMeshRef}>
            <meshStandardMaterial attach="material" color={meshColor} side={DoubleSide} depthWrite={true} transparent opacity={props.fillOpacity} metalness="0.4" />
            <extrudeBufferGeometry attach="geometry" args={[[props.shape], extrudeSettings]} />
        </mesh>
    )
}

//#endregion ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================



export default function Logo() {
    return (
        <group>
            <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg" fillOpacity="0.25" extrudeDir="positive" />
            <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg" fillOpacity="0.25" extrudeDir="negative" />
        </group>
    )
}
