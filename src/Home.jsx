import React from "react";
// import ReactDOM from "react-dom";
import { Suspense } from 'react';

import { Canvas } from "react-three-fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";

// import Cubes from "./components/Cubes";
import Logo from "./components/Logo";
// import Credits from "./components/Credits"

// import "./styles.css";

export default function Home() {
    return (
        <>
            {/* <Credits /> */}

            <Canvas>
                <Suspense fallback={null}>
                    <Logo />
                    {/* <Cubes /> */}
                    <Lights />
                    <Scene />
                </Suspense>
            </Canvas>
        </>
    );
}
