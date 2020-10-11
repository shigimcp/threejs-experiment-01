import React from "react";
// import ReactDOM from "react-dom";
import { Suspense } from 'react';

import Credits from "./components/Credits"
import { Canvas } from "react-three-fiber";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Scene";

import Logo from "./components/Logo";

// import "./styles.css";

export default function Home() {
    return (
        <>
            <Credits />

            <Canvas>
            {/* <Canvas orthographic camera={{ position: [0, 0, 50], zoom: 10, up: [0, 0, 1], far: 10000 }}> */}
                <Suspense fallback={null}>
                    <Logo />
                    <Cubes />
                    <Lights />
                    <Environment />
                </Suspense>
            </Canvas>

            {/* <Logo /> */}
        </>
    );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
