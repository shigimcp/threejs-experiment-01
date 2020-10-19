import React from "react";
// import ReactDOM from "react-dom";
import { Suspense } from 'react';

import { Canvas } from "react-three-fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import Camera from "./components/Camera"

import * as THREE from 'three'

// import "./styles.css";

export default function Canvas() {

    window.scene = new THREE.Scene();
    window.THREE = THREE;

    return (
        <Canvas shadowMap>
            <Suspense fallback={null}>
                <Lights />
                <Camera />
                <Scene />
            </Suspense>
        </Canvas>
    )
}
