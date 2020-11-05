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

<<<<<<< HEAD
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

// }
=======

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
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

//#endregion ==================== FUNCTIONS ====================



//#region ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================

<<<<<<< HEAD
function LogoMesh(props) {
=======
    useEffect(() => {

        const box = new Box3().setFromObject(logoGroupRef.current)
        const sphere = new Sphere()

        box.getBoundingSphere(sphere)

        setCenter([0, -sphere.center.y, 0])

    }, [])
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

    // console.log('');
    // console.log('==================== LOGOMESH: EXTRUDE ====================');
    // console.log(props);


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

<<<<<<< HEAD
=======
    console.log('==================== LOGOMESH ====================');
    console.log(props);
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

    //#region -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------

    let extrudeSettings = {
<<<<<<< HEAD
        curveSegments: 7,
        steps: 2,
        depth: 5, 
        // depth: 2.5,
        bevelEnabled: false,

        // curveSegments: 7,
        // steps: 2,
        // depth: 25,
        // bevelEnabled: true, 
        // bevelThickness: 5,
        // bevelSize: 5,
        // bevelOffset: 0,
        // bevelSegments: 5, 
=======
        curveSegments: 7, 
        steps: 2, 
        depth: 25, 
        bevelEnabled: false, 
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7
    };


    // console.log('props.extrudeDir = ' + props.extrudeDir);
    // console.log('extrudeSettings.depth = ' + extrudeSettings.depth);


    if (props.extrudeDir === 'negative') {
        extrudeSettings.depth = extrudeSettings.depth * -1;
    };


    // console.log('extrudeSettings.depth = ' + extrudeSettings.depth);

    //#endregion -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------


    //#region -------------------- LOGOMESH center --------------------

<<<<<<< HEAD
    useEffect(() => {
    // useMemo(() => {
=======
    const logoMeshRef = useRef()
    const [center, setCenter] = useState([0, 0, 0])


    useEffect(() => {

        const box = new Box3().setFromObject(logoMeshRef.current)
        const sphere = new Sphere()
        box.getBoundingSphere(sphere)
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

        const bBox = new Box3().setFromObject(logoMesh_Ref.current);
        const bSphere = new Sphere();

        bBox.setFromObject(logoMesh_Ref.current);
        bBox.getBoundingSphere(bSphere);


        //#region -------------------- LOGOMESH center: switch props.nodeID (see LogoShape below) --------------------

        switch (props.nodeID) {
<<<<<<< HEAD

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


            case 'kanji_ko01ID':

                //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko01ID' - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                // setCenter([-bSphere.center.x * 0.809716599190283, 0, 0]);
                // setCenter([-bSphere.center.x * 0.809716599190283, 0, -0.5]);
                setCenter([-bSphere.center.x * 0.809716599190283, 0, -bSphere.center.z]);

                // console.log('center = ' + center);
=======

            case 'kanji_ko01ID':

                setCenter([-sphere.center.x * 0.809716599190283, 0, 0])
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko01ID' - - - - - - - - - - -


            case 'kanji_ko02ID':

<<<<<<< HEAD
                //#region - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko02ID' - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                // setCenter([-bSphere.center.x * 0.798522414124903, 0, 0]);
                // setCenter([-bSphere.center.x * 0.798522414124903, 0, -0.5]);
                setCenter([-bSphere.center.x * 0.798522414124903, 0, -bSphere.center.z]);

                // console.log('center = ' + center);
=======
                setCenter([-sphere.center.x * 0.798522414124903, 0, 0])
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

                break;

                //#endregion - - - - - - - - - - - LOGOMESH center: case props.nodeID = 'kanji_ko02ID' - - - - - - - - - - -


            default:

<<<<<<< HEAD
                //#region - - - - - - - - - - - LOGOMESH center: case = default - - - - - - - - - - -

                // console.log('');
                // console.log('- - - - - - - - - - - LOGOMESH center: switch (props.nodeID) ' + props.nodeID + ' - - - - - - - - - - -');
                // console.log(logoMesh_Ref.current.material.color);
                // console.log(logoMesh_Ref.current);
                // console.log('props.nodeID = ' + props.nodeID);

                // setCenter([-bSphere.center.x, 0, 0]);
                // setCenter([-bSphere.center.x, 0, -0.5]);
                setCenter([-bSphere.center.x, 0, -bSphere.center.z]);

                // console.log('center = ' + center);
=======
                setCenter([-sphere.center.x, 0, 0])
>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7

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

<<<<<<< HEAD

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


    // let meshScaleFactor = 0.005;
    let meshScaleFactor = 0.05;

    // const meshColor = "#000000";
    // const meshColor = "#ff0000";
    const meshColor = "#000022";


=======
    
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


>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7
    return (
        <mesh id={props.id} scale={[meshScaleFactor, -meshScaleFactor, meshScaleFactor]} position={center} castShadow receiveShadow ref={logoMesh_Ref}>
            {/* <meshStandardMaterial attach="material" color={meshColor} side={DoubleSide} depthWrite={true} transparent opacity={props.fillOpacity} roughness="0" metalness="0.4" /> */}
            {/* <meshStandardMaterial attach="material" color={meshColor} side={DoubleSide} depthWrite={true} transparent opacity={props.fillOpacity} roughness="1" metalness="1" /> */}
            <meshStandardMaterial attach="material" color={meshColor} depthWrite={true} transparent opacity={props.fillOpacity} />
            {/* <meshPhongMaterial attach="material" color={meshColor} side={DoubleSide} depthWrite={true} transparent opacity={props.fillOpacity} /> */}
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

    useFrame(() => {
        logoGroup_Ref.current.rotation.y += 0.025;
    });

    //#endregion -------------------- LOGOSHAPE spin --------------------

    // const testRotation = [0, 90, 0];

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


    const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_clean_sm.svg';


    //#region -------------------- ASSETS _Ref --------------------

    // const logoGroup_Ref = useRef();
    // const logoGroup_FwdRef = useRef();

    // const logoShape_Ref = useRef();
    // const logoShapePOS_Ref = useRef();
    // const logoShapeNEG_Ref = useRef();

    // console.log('logoGroup_Ref.current = ' + logoGroup_Ref.current);
    // console.log('logoShapePOS_Ref.current = ' + logoShapePOS_Ref.current);
    // console.log('logoShapeNEG_Ref.current = ' + logoShapeNEG_Ref.current);

    //#endregion -------------------- ASSETS _Ref --------------------


    //#region -------------------- useState DEFs --------------------

    // // console.log('');
    // // console.log('-------------------- useState DEFs --------------------');

    // let [windowWidth, setWindowWidth] = useState(getWidth());

    // // console.log('windowWidth = ' + windowWidth);

    //#endregion -------------------- useState DEFs --------------------


    //#region -------------------- LOGOSHAPE center --------------------

    // const [center, setCenter] = useState([0, 0, 0])

    // const logoGroup_Ref = useRef()

    // useEffect(() => {

    //     const bBox = new Box3().setFromObject(logoGroup_Ref.current)
    //     const bSphere = new Sphere()

    //     bBox.getBoundingSphere(bSphere)

    //     setCenter([0, -bSphere.center.y, 0])

    // }, []);

    //#endregion -------------------- LOGOSHAPE center --------------------


    //#region -------------------- LOGOSHAPE spin --------------------

    // useFrame(() => {
    //     logoGroup_Ref.current.rotation.y += 0.025;
    //     // logoGroup_FwdRef.current.rotation.y += 0.025;
    // });

    //#endregion -------------------- LOGOSHAPE spin --------------------


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


    // <LogoShape url={logoSVG} fillOpacity="0.25" />
    // <LogoShape url={logoSVG} fillOpacity="0.25" ref={logoGroup_Ref} />
    // <LogoShape url={logoSVG} fillOpacity="0.25" ref={logoGroup_FwdRef} />

    return (
        <>
            {/* <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg" fillOpacity="0.25" extrudeDir="positive" />
            <LogoShape url="https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg" fillOpacity="0.25" extrudeDir="negative" />

            <LogoShape url={logoSVG} fillOpacity="0.25" extrudeDir="positive" ref={logoGroup_Ref} />
            <LogoShape url={logoSVG} fillOpacity="0.25" extrudeDir="negative" ref={logoGroup_Ref} />

            <LogoShape url={logoSVG} fillOpacity="0.25" />
            <LogoShape url={logoSVG} fillOpacity="0.25" ref={logoGroup_Ref} /> */}

            <LogoShape url={logoSVG} fillOpacity="0.5" extrudeDir="positive" />
            <LogoShape url={logoSVG} fillOpacity="0.5" extrudeDir="negative" />
        </>
    );
}
