import React from "react";
// import ReactDOM from "react-dom";
import { Suspense } from 'react';

// import Credits from "./components/Credits"
import { Canvas } from "react-three-fiber";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Scene from "./components/Scene";

import Logo from "./components/Logo";

// import "./styles.css";

export default function Home() {
    return (
        <>
            {/* <Credits /> */}

            <Canvas>
                <Suspense fallback={null}>
                    <Logo />
                    <Cubes />
                    <Lights />
                    <Scene />
                </Suspense>
            </Canvas>
        </>
    );
}
