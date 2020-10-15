import React from "react";
// import ReactDOM from "react-dom";
import { Suspense } from 'react';

import { Canvas } from "react-three-fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import Camera from "./components/Camera"

import Logo from "./components/Logo";
import Cubes from "./components/Cubes";

// import "./styles.css";

export default function Home() {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Logo />
                    <Cubes />
                    <Lights />
                    <Camera />
                    <Scene />
                </Suspense>
            </Canvas>
        </>
    );
}
