//#region ==================== IMPORTS ====================

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


    const meshScaleFactor = 0.05;
    const meshColor = "#0000ff";


    return (
        <mesh id={props.id} scale={[meshScaleFactor, -meshScaleFactor, meshScaleFactor]} castShadow receiveShadow>
            <meshNormalMaterial attach="material" color={meshColor} wireframe={true} depthWrite={true} transparent opacity={props.fillOpacity} />
            <extrudeBufferGeometry attach="geometry" args={[[props.shape], extrudeSettings]} />
        </mesh>
    );
}

//#endregion ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================



//#region ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

// const logoShape_Ref = React.createRef();

function LogoShape(props) {
// const LogoShape = React.forwardRef((props, logoShape_Ref) => {


    //#region -------------------- LOGOSHAPE shapes --------------------

    const { paths } = useLoader(SVGLoader, props.url)

    const shapes = useMemo(() =>
        paths.flatMap((thisPath, i) =>
            thisPath.toShapes(true).map((shape) =>
                ({ shape, color: props.fillColor, fillOpacity: props.fillOpacity, extrudeDir: props.extrudeDir, nodeID: thisPath.userData.node.id })
            )
        ), [paths, props]
    );

    //#endregion -------------------- LOGOSHAPE shapes --------------------


    //#region -------------------- LOGOMESH center - REF: https://muffinman.io/three-js-extrude-svg-path/ --------------------

    useEffect(() => {

        // console.log(logoShape_Ref.current.children);

        const bBox = new Box3().setFromObject(logoShape_Ref.current);
        const bSize = new Vector3();

        bBox.getSize(bSize);

        // console.log(bBox);
        // console.log(bSize);
        // console.log(bBox.getSize(bSize));

        const xOffset = bSize.x * -0.5;
        // const yOffset = bSize.y * -0.5;
        const yOffset = bSize.y * 0.5;

        logoShape_Ref.current.children.forEach(item => {
            item.position.x = xOffset;
            item.position.y = yOffset;
        })

    }, []);

    //#endregion -------------------- LOGOMESH center - REF: https://muffinman.io/three-js-extrude-svg-path/ --------------------


    //#region -------------------- LOGOSHAPE spin --------------------

    const logoShape_Ref = useRef()

    useFrame(() => {
        logoShape_Ref.current.rotation.y += 0.025;
    });

    //#endregion -------------------- LOGOSHAPE spin --------------------


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

//#endregion ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================


export default function Logo() {

    // console.log('');
    // console.log('====================  export default function Logo()  ====================');


    // const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_clean_sm.svg';
    // const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude02_stroke.svg';
    const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_stroke.svg';


    return (
        // <LogoShape id="logoSVGid" url={logoSVG} fillOpacity="0.25" extrudeDir="positive" ref={logoShape_Ref} />
        <LogoShape id="logoSVGid" url={logoSVG} fillOpacity="0.25" extrudeDir="positive" />
    );
}
