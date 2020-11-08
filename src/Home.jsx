// #region ==================== IMPORTS ====================

import React from "react";
// import ReactDOM from "react-dom";
import { Suspense } from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useFrame } from 'react';

import { Canvas } from "react-three-fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import Camera from "./components/Camera";

import * as THREE from 'three';

// import "./styles.css";

// #endregion ==================== IMPORTS ====================



export default function Home() {

    window.scene = new THREE.Scene();
    window.THREE = THREE;


    return (
        <Canvas shadowMap>
            <Suspense fallback={null}>
                <Lights />
                {/* <Camera /> */}
                <Camera position={[0, 0, 7.5]} fov={40} />
                <Scene />
            </Suspense>
        </Canvas>
    );
}
