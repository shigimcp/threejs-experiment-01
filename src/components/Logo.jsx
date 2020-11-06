//#region ==================== IMPORTS ====================

import React from 'react';
import { useState, useEffect } from 'react';
import { useRef, useMemo } from 'react';

// import { DoubleSide } from "three";
import { Box3, Sphere } from "three";

import { useLoader } from 'react-three-fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useFrame } from 'react-three-fiber';

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteGitImageLoc = 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/';
// const localLoc = '../images/';

// const getWidth = () => window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;

//#endregion ==================== CONSTANTS ====================



//#region ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================

function LogoMesh(props) {

    // console.log('');
    // console.log('==================== LOGOMESH: EXTRUDE ====================');
    // console.log(props);
    // console.log('props.shape = ' + props.shape);
    // console.log('props.extrudeDir = ' + props.extrudeDir);


    //#region -------------------- ASSETS _Ref --------------------

    const logoMesh_Ref = useRef();

    // const logoGroup_Ref = useRef(null);

    // const logoShapePOS_Ref = useRef(null);
    // const logoShapeNEG_Ref = useRef(null);

    //#endregion -------------------- ASSETS _Ref --------------------


    //#region -------------------- useState DEFs --------------------

    // let [windowWidth, setWindowWidth] = useState(getWidth());

    // const [center, setCenter] = useState([0, 0, 0]);
    let [center, setCenter] = useState([0, 0, 0]);

    //#endregion -------------------- useState DEFs --------------------


    //#region -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------

    let extrudeSettings = {
        curveSegments: 7,
        steps: 1,
        depth: 5,
        bevelEnabled: false,

        // curveSegments: 7,
        // steps: 2,
        // depth: 25,
        // bevelEnabled: true, 
        // bevelThickness: 5,
        // bevelSize: 5,
        // bevelOffset: 0,
        // bevelSegments: 5, 
    };


    if (props.extrudeDir === 'negative') {
        extrudeSettings.depth = extrudeSettings.depth * -1;
    };

    //#endregion -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------


    //#region -------------------- LOGOMESH center --------------------

    useEffect(() => {
    // useMemo(() => {

        const bBox = new Box3().setFromObject(logoMesh_Ref.current);
        const bSphere = new Sphere();

        bBox.setFromObject(logoMesh_Ref.current);
        bBox.getBoundingSphere(bSphere);


        //#region -------------------- LOGOMESH center: switch props.nodeID (see LogoShape below) --------------------

        switch (props.nodeID) {

            // case 'afro':

            //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'afro' - - - - - - - - - - -

            // console.log('');
            // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
            // console.log(logoMesh_Ref.current.material.color);
            // console.log(logoMesh_Ref.current);
            // console.log('props.nodeID = ' + props.nodeID);

            // // setCenter([-bSphere.center.x, 0, 0]);
            // setCenter([-bSphere.center.x, 0, -bSphere.center.z]);

            // console.log('center = ' + center);

            // break;

            //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'afro' - - - - - - - - - - -


            // case 'glassesID':

            //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'glassesID' - - - - - - - - - - -

            // console.log('');
            // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
            // console.log(logoMesh_Ref.current.material.color);
            // console.log(logoMesh_Ref.current);
            // console.log('props.nodeID = ' + props.nodeID);

            // // setCenter([-bSphere.center.x, 0, 0]);
            // setCenter([-bSphere.center.x, 0, -bSphere.center.z]);

            // console.log('center = ' + center);

            // break;

            //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'glassesID' - - - - - - - - - - -


            case 'kanji_00':

                //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_00' - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                setCenter([-bSphere.center.x * 0.739997454, 0, -bSphere.center.z]);

                // console.log('center = ' + center);

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_00' - - - - - - - - - - -


            case 'kanji_01':

                //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_01' - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                setCenter([-bSphere.center.x * 0.91434256, 0, -bSphere.center.z]);

                // console.log('center = ' + center);

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_01' - - - - - - - - - - -


            case 'kanji_02':

                //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_02' - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                setCenter([-bSphere.center.x * 0.61677378, 0, -bSphere.center.z]);

                // console.log('center = ' + center);

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_02' - - - - - - - - - - -


            case 'kanji_ko01':

                //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko01' - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                setCenter([-bSphere.center.x * 0.809716599, 0, -bSphere.center.z]);

                // console.log('center = ' + center);

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko01' - - - - - - - - - - -


            case 'kanji_ko02':

                //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko02' - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                setCenter([-bSphere.center.x * 0.798722045, 0, -bSphere.center.z]);

                // console.log('center = ' + center);

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko02' - - - - - - - - - - -


            default:

                //#region - - - - - - - - - - - LOGOMESH center: case = default - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                setCenter([-bSphere.center.x, 0, -bSphere.center.z]);

                // console.log('center = ' + center);

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case = default - - - - - - - - - - -
        }

        //#endregion -------------------- LOGOMESH center: switch props.nodeID (see LogoShape below) --------------------


        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        // let timeoutId = null;

        // const resizeListener = () => {

        //     // console.log('useEffect: WINDOW RESIZE - resizeListener triggered!');

        //     // prevent execution of previous setTimeout
        //     clearTimeout(timeoutId);

        //     timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

        //     // centerObject: RE-CENTER OBJECT
        //     // centerObject();

        //     centerObject(scene_Ref.current.children[0]);
        //     // centerObject(scene_Ref.current.children[1]);
        // };

        // window.addEventListener('resize', resizeListener);

        // return () => {
        //     window.removeEventListener('resize', resizeListener);
        // }

        //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    }, [props.nodeID]);

    //#endregion -------------------- LOGOMESH center --------------------


    //#region -------------------- LOGOMESH responsive --------------------

    // let meshScaleFactor = 0.005;
    // const meshColor = "#000022";

    // switch (true) {

    //     case (window.innerWidth >= 1441):

    //         // console.log('');
    //         // console.log('-------------------- LOGOMESH responsive: window.innerWidth >= 1441 px --------------------');
    //         // // console.log('window.innerWidth = ' + window.innerWidth);
    //         // console.log('windowWidth = ' + windowWidth);

    //         meshScaleFactor = 0.0375;

    //         break;

    //     case (window.innerWidth >= 992 && window.innerWidth <= 1440):

    //         // console.log('');
    //         // console.log('-------------------- LOGOMESH responsive: window.innerWidth  992 px - 1440 px --------------------');
    //         // // console.log('window.innerWidth = ' + window.innerWidth);
    //         // console.log('windowWidth = ' + windowWidth);

    //         meshScaleFactor = 0.05;

    //         break;

    //     case (window.innerWidth >= 768 && window.innerWidth <= 991):

    //         // console.log('');
    //         // console.log('-------------------- LOGOMESH responsive: window.innerWidth  768 px - 991 px --------------------');
    //         // // console.log('window.innerWidth = ' + window.innerWidth);
    //         // console.log('windowWidth = ' + windowWidth);

    //         meshScaleFactor = 0.05;

    //         break;

    //     case (window.innerWidth >= 375 && window.innerWidth <= 767):

    //         // console.log('');
    //         // console.log('-------------------- LOGOMESH responsive: window.innerWidth  375 px - 767 px --------------------');
    //         // // console.log('window.innerWidth = ' + window.innerWidth);
    //         // console.log('windowWidth = ' + windowWidth);

    //         meshScaleFactor = 0.0225;

    //         break;

    //     default:

    //         // console.log('');
    //         // console.log('-------------------- LOGOMESH responsive: default --------------------');
    //         // // console.log('window.innerWidth = ' + window.innerWidth);
    //         // console.log('windowWidth = ' + windowWidth);

    //         meshScaleFactor = 0.05;

    //         break;
    // };

    //#endregion -------------------- LOGOMESH responsive --------------------


    const meshScaleFactor = 0.05;
    const meshColor = "#0000ff";


    return (
        <mesh id={props.id} scale={[meshScaleFactor, -meshScaleFactor, meshScaleFactor]} position={center} castShadow receiveShadow ref={logoMesh_Ref}>
            <meshNormalMaterial attach="material" color={meshColor} wireframe={true} depthWrite={true} transparent opacity={props.fillOpacity} />
            <extrudeBufferGeometry attach="geometry" args={[[props.shape], extrudeSettings]} />
        </mesh>
    );
}

//#endregion ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================



//#region ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

// const logoGroup_Ref = React.createRef();

function LogoShape(props) {
// const LogoShape = React.forwardRef((props, logoGroup_Ref) => {

    //#region -------------------- LOGOSHAPE shapes --------------------

    // console.log('');
    // console.log('-------------------- LOGOSHAPE shapes --------------------');
    // console.log(props);


    const { paths } = useLoader(SVGLoader, props.url)

    const shapes = useMemo(() =>
        paths.flatMap((thisPath, i) =>
            thisPath.toShapes(true).map((shape) =>
                ({ shape, color: props.fillColor, fillOpacity: props.fillOpacity, extrudeDir: props.extrudeDir, nodeID: thisPath.userData.node.id })
                // ({ shape, color: props.fillColor, fillOpacity: 0, extrudeDir: props.extrudeDir, nodeID: thisPath.userData.node.id })
            )
            // ), []
        ), [paths, props]
    );


    // console.log('paths:');
    // console.log(paths);

    // console.log('shapes:');
    // console.log(shapes);

    //#endregion -------------------- LOGOSHAPE shapes --------------------


    //#region -------------------- LOGOSHAPE center --------------------

    const [center, setCenter] = useState([0, 0, 0])

    const logoGroup_Ref = useRef()

    useEffect(() => {

        const bBox = new Box3().setFromObject(logoGroup_Ref.current)
        const bSphere = new Sphere()

        bBox.getBoundingSphere(bSphere)

        setCenter([0, -bSphere.center.y, 0])

    }, [logoGroup_Ref]);

    //#endregion -------------------- LOGOSHAPE center --------------------


    //#region -------------------- LOGOSHAPE spin --------------------

    // const testRotation = [0, 90, 0];

    useFrame(() => {
        logoGroup_Ref.current.rotation.y += 0.025;
    });

    //#endregion -------------------- LOGOSHAPE spin --------------------


    return (
        <group position={center} ref={logoGroup_Ref}>
            {shapes.map((props) => (
                <LogoMesh key={props.shape.uuid} {...props} />
            ))}
        </group>

    )
};

//     );
// }, [logoGroup_Ref]);

//#endregion ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================


export default function Logo() {

    // console.log('');
    // console.log('====================  export default function Logo()  ====================');


    // const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_clean_sm.svg';
    // const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude02_stroke.svg';
    const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_stroke.svg';


    //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    // useEffect(() => {

    //     let timeoutId = null;

    //     const resizeListener = () => {

    //         console.log('useEffect: WINDOW RESIZE - resizeListener triggered!');
    //         console.log(logoShape_Ref.current);

    //         // prevent execution of previous setTimeout
    //         clearTimeout(timeoutId);

    //         timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

    //         // centerObject();
    //         centerObject(logoShape_Ref.current);
    //     };

    //     window.addEventListener('resize', resizeListener);

    //     return () => {
    //         window.removeEventListener('resize', resizeListener);
    //     }

    // }, []);

    //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------



    return (
        <>
            <LogoShape id="logoSVGid" url={logoSVG} fillOpacity="0.25" extrudeDir="positive" />
        </>
    );
}
