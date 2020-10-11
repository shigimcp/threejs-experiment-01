import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Cube from "./SingleCube";

export default () => {
    const cubeGroup = useRef();

    useFrame(() => {
        cubeGroup.current.rotation.y += 0.005;
    });

    // const nodesCubes = map(new Array(50), (el, i) => {
    const nodesCubes = map(new Array(5), (el, i) => {
        return <Cube key={i} />;
    });

    return <group ref={cubeGroup}>{nodesCubes}</group>;
};
