// #region ==================== IMPORTS ====================

import React from 'react';
// import { useState } from 'react';
import { useEffect } from 'react';
import { useRef, useMemo } from 'react';

// import { DoubleSide } from "three";
// import { Box3, Sphere, Vector3 } from "three";
import { Box3, Vector3 } from "three";

import { useLoader } from 'react-three-fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useFrame } from 'react-three-fiber';

// #endregion ==================== IMPORTS ====================



// #region ==================== CONSTANTS / VARS ====================

// const localLoc = '../images/';
const remoteGitImageLoc = 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/';

// const meshScaleFactor = 0.05;
// let meshScaleFactor;
// const meshColor = "#0000ff";

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

// #endregion ==================== CONSTANTS / VARS ====================



// #region ==================== RESPONSIVE: meshScaleFactor (dirty soln) ====================

// #region -------------------- RESPONSIVE: INIT - meshScaleFactor (dirty soln) --------------------

// // console.log('');
// // console.log('getWidth() = ' + getWidth() + '     getHeight() = ' + getHeight());

// // console.log('window.screen.orientation = ' + window.screen.orientation);
// // console.log('window.screen.orientation =');
// // console.log(window.screen.orientation);

// // console.log('document.body.clientWidth = ' + document.body.clientWidth);

// // if (getWidth() > 768) {
// // if (getWidth() > 768 && getHeight() < getWidth()) {
// // if (window.screen.orientation.type === 'landscape-primary') {
// if (getHeight() < getWidth() || window.screen.orientation.type === 'landscape-primary') {
// // if ((getWidth() > 768 && getHeight() < getWidth()) || window.screen.orientation.type === 'landscape-primary') {

//     // console.log(window.screen.orientation.type);
//     console.log('orienttion = landscape');

//     meshScaleFactor = 0.05;

// } else {

//     // console.log(window.screen.orientation.type);
//     console.log('orienttion = portrait');

//     meshScaleFactor = 0.025;
// }

// #endregion -------------------- RESPONSIVE: INIT - meshScaleFactor (dirty soln) --------------------


// #region -------------------- RESPONSIVE: WINDOW RESIZE - meshScaleFactor (dirty soln) --------------------

// window.addEventListener('resize', () => {


//     // console.log('');
//     // console.log('window.screen.orientation.type = ' + window.screen.orientation.type);
//     // console.log('window.screen.orientation.type =');
//     // console.log(window.screen.orientation.type);

//     // console.log('document.body.clientWidth = ' + document.body.clientWidth);

//     // this.setState({ windowWidth: document.body.clientWidth })

    // // if (getWidth() > 768) {
    // // if (getWidth() > 768 && getHeight() < getWidth()) {
    // // if (window.screen.orientation.type === 'landscape-primary') {
    // if (getHeight() < getWidth() || window.screen.orientation.type === 'landscape-primary') {
    // // if ((getWidth() > 768 && getHeight() < getWidth()) || window.screen.orientation.type === 'landscape-primary') {

    //     // console.log(window.screen.orientation.type);
    //     console.log('orienttion = landscape');

    //     meshScaleFactor = 0.05;

    // } else {

    //     // console.log(window.screen.orientation.type);
    //     console.log('orienttion = portrait');

    //     meshScaleFactor = 0.025;
    // }
// });

// #endregion -------------------- RESPONSIVE: WINDOW RESIZE - meshScaleFactor (dirty soln) --------------------

// #endregion ==================== RESPONSIVE: meshScaleFactor (dirty soln) ====================



// #region ==================== FUNCTIONS ====================

// #region -------------------- FUNCTION: checkWindow(thisObject) --------------------

function checkWindow(thisObject) {

    // console.log('');
    // console.log('-------------------- FUNCTION: checkWindow(thisObject) --------------------');
    // // console.log('thisObject = ' + thisObject);
    // console.log('thisObject = ');
    // console.log(thisObject);


    let thisScale;

    if (getHeight() < getWidth() || window.screen.orientation.type === 'landscape-primary') {

        // console.log(window.screen.orientation.type);
        // console.log('orienttion = landscape');

        thisScale = 1;

    } else {

        // console.log(window.screen.orientation.type);
        // console.log('orienttion = portrait');

        thisScale = 0.45;
    }

    thisObject.scale.x = thisScale;
    thisObject.scale.y = thisScale;
    thisObject.scale.z = thisScale;
}

// #endregion -------------------- FUNCTION: checkWindow(thisObject) --------------------

// #endregion ==================== FUNCTIONS ====================



// #region ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================

function LogoMesh(props) {

    const meshScaleFactor = 0.05;
    // const meshScaleFactor = 1;
    const meshColor = "#0000ff";


    // #region -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------

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

    // #endregion -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------


    return (
        <mesh id={props.id} scale={[meshScaleFactor, -meshScaleFactor, meshScaleFactor]} castShadow receiveShadow>
            <meshNormalMaterial attach="material" color={meshColor} wireframe={true} depthWrite={true} transparent opacity={props.fillOpacity} />
            <extrudeBufferGeometry attach="geometry" args={[[props.shape], extrudeSettings]} />
        </mesh>
    );
}

// #endregion ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================



// #region ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

// const logoShape_Ref = React.createRef();


function LogoShape(props) {
// const LogoShape = React.forwardRef((props, logoShape_Ref) => {


    // #region -------------------- LOGOSHAPE shapes --------------------

    const { paths } = useLoader(SVGLoader, props.url)

    const shapes = useMemo(() =>
        paths.flatMap((thisPath, i) =>
            thisPath.toShapes(true).map((shape) =>
                ({ shape, color: props.fillColor, fillOpacity: props.fillOpacity, extrudeDir: props.extrudeDir, nodeID: thisPath.userData.node.id })
            )
        ), [paths, props]
    );

    // #endregion -------------------- LOGOSHAPE shapes --------------------


    const logoShape_Ref = useRef();

    // #region -------------------- LOGOSHAPE center - REF: https://muffinman.io/three-js-extrude-svg-path/ --------------------

    useEffect(() => {

        // #region - - - - - - - - - - - LOGOSHAPE useEffect: center - REF: https://muffinman.io/three-js-extrude-svg-path/ - - - - - - - - - - -

        let bBox = new Box3().setFromObject(logoShape_Ref.current);
        let bSize = new Vector3();

        // bBox.setFromObject(logoShape_Ref.current);
        bBox.getSize(bSize);


        // console.log(logoShape_Ref.current.children);
        // console.log(bBox);
        // console.log(bSize);
        // // console.log(bBox.getSize(bSize));


        let xOffset = bSize.x * -0.5;
        let yOffset = bSize.y * 0.5;

        logoShape_Ref.current.children.forEach(item => {
            item.position.x = xOffset;
            item.position.y = yOffset;
        })

        // #endregion - - - - - - - - - - - LOGOSHAPE useEffect: center - REF: https://muffinman.io/three-js-extrude-svg-path/ - - - - - - - - - - -


        checkWindow(logoShape_Ref.current);


        // #region - - - - - - - - - - - LOGOSHAPE useEffect: RESPONSIVE: WINDOW RESIZE - resizeListener - - - - - - - - - - -

        let timeoutId = null;

        const resizeListener = () => {

            // console.log('');
            // console.log('- - - - - - - - - - - LOGOSHAPE useEffect: RESPONSIVE: WINDOW RESIZE - resizeListener - - - - - - - - - - -');
            // console.log('logoShape_Ref.current.scale = ');
            // console.log(logoShape_Ref.current.scale);
            // console.log(logoShape_Ref.current);


            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => checkWindow(logoShape_Ref.current))
        }

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }

        // #endregion - - - - - - - - - - - LOGOSHAPE useEffect: RESPONSIVE: WINDOW RESIZE - resizeListener - - - - - - - - - - -


    }, []);

    // #endregion -------------------- LOGOSHAPE center - REF: https://muffinman.io/three-js-extrude-svg-path/ --------------------


    // #region -------------------- LOGOSHAPE spin --------------------

    // const logoShape_Ref = useRef()

    useFrame(() => {
        logoShape_Ref.current.rotation.y += 0.025;
    });

    // #endregion -------------------- LOGOSHAPE spin --------------------


    return (
        <group ref={logoShape_Ref}>
            {shapes.map((props) => (
                <LogoMesh key={props.shape.uuid} {...props} />
            ))}
        </group>
    )
};

//     );
// }, [logoShape_Ref]);

// #endregion ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================


export default function Logo() {

    // const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_clean_sm.svg';
    // const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude02_stroke.svg';
    const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_stroke.svg';


    return (
        // <LogoShape id="logoSVGid" url={logoSVG} fillOpacity="0.25" extrudeDir="positive" ref={logoShape_Ref} />
        <LogoShape id="logoSVGid" url={logoSVG} fillOpacity="0.25" extrudeDir="positive" />
    );
}
