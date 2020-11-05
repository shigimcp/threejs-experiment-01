//#region ==================== IMPORTS ====================

import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Cube from "./SingleCube";

//#endregion ==================== IMPORTS ====================



//#region ==================== CUBES - REF: https://www.digitalocean.com/community/tutorials/react-react-with-threejs ====================

// export default () => {
export default function Cubes(props) {
    const cubeGroup = useRef();

    useFrame(() => {
        cubeGroup.current.rotation.y += 0.005;
    });

    const nodesCubes = map(new Array(5), (el, i) => {
        return <Cube key={i} />;
    });


    return (
        <group ref={cubeGroup}>
            {nodesCubes}
        </group>
    );
}

//#endregion ==================== CUBES - REF: https://www.digitalocean.com/community/tutorials/react-react-with-threejs ====================
