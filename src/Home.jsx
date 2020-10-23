import React from "react";
import { Suspense } from 'react';

import { Canvas } from "react-three-fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import Camera from "./components/Camera"

import * as THREE from 'three'

export default function Home() {

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
