//#region ==================== IMPORTS ====================

import React from "react";

import { 
    CubeTextureLoader,
    CubeCamera,
    WebGLCubeRenderTarget,
    RGBFormat,
    LinearMipmapLinearFilter,
 } from "three";
// import { MeshBasicMaterial } from "three";
import { DoubleSide } from "three";

import { 
    useThree, 
    useFrame
} from "react-three-fiber";

//#endregion ==================== IMPORTS ====================


export default () => {

    //#region ==================== cubeMaterial - REF: https://threejs.org/docs/#api/en/textures/CubeTexture ====================

    // let textureLoader = new CubeTextureLoader();
    // // textureLoader.setPath('../images/textures/');
    // textureLoader.setPath('https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/sl/');
    // // let texturePath = '../images/textures/';
    // // let texturePath = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/sl/ax00.jpg';

    // let textureCube = textureLoader.load([
    //     // 'px.png', 'nx.png',
    //     // 'py.png', 'ny.png',
    //     // 'pz.png', 'nz.png'

    //     'ax00.jpg', 'ax00.jpg',
    //     'ax00.jpg', 'ax00.jpg',
    //     'ax00.jpg', 'ax00.jpg'

    //     // texturePath + 'ax00.jpg', texturePath + 'ax00.jpg',
    //     // texturePath + 'ax00.jpg', texturePath + 'ax00.jpg',
    //     // texturePath + 'ax00.jpg', texturePath + 'ax00.jpg'

    //     // texturePath, texturePath,
    //     // texturePath, texturePath,
    //     // texturePath, texturePath
    // ]);

    // let cubeMaterial = new MeshBasicMaterial({ color: 0xffffff, envMap: textureCube });

    // console.log(textureCube);

    //#endregion ==================== cubeMaterial - REF: https://threejs.org/docs/#api/en/textures/CubeTexture ====================



    //#region ==================== SKYBOX - REF: https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/ ====================

    // Loads the skybox texture and applies it to the scene.
    function SkyBox() {

        const { scene } = useThree();
        const loader = new CubeTextureLoader();

        // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
        const texture = loader.load([
            // "https://6izyu.csb.app/4b.jpg",
            // "https://6izyu.csb.app/3.jpg",
            // "https://6izyu.csb.app/4b.jpg",
            // "https://6izyu.csb.app/4.jpg",
            // "https://6izyu.csb.app/5.jpg",
            // "https://6izyu.csb.app/2.jpg",

            // "https://codeworkshop.dev/img/blog-images/skybox/4b.jpg",
            // "https://codeworkshop.dev/img/blog-images/skybox/3.jpg",
            // "https://codeworkshop.dev/img/blog-images/skybox/4b.jpg",
            // "https://codeworkshop.dev/img/blog-images/skybox/4.jpg",
            // "https://codeworkshop.dev/img/blog-images/skybox/5.jpg",
            // "https://codeworkshop.dev/img/blog-images/skybox/2.jpg",

            // "../images/textures/4b.jpg",
            // "../images/textures/3.jpg",
            // "../images/textures/4b.jpg",
            // "../images/textures/4.jpg",
            // "../images/textures/5.jpg",
            // "../images/textures/2.jpg",

            "https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/textures/4b.jpg",
            "https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/textures/3.jpg",
            "https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/textures/4b.jpg",
            "https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/textures/4.jpg",
            "https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/textures/5.jpg",
            "https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/textures/2.jpg",
        ]);

        // Set the scene background property to the resulting texture.
        scene.background = texture;

        return null;
    }

    function Sphere() {

        const { scene, gl } = useThree();

        // The cubeRenderTarget is used to generate a texture for the reflective sphere.
        // It must be updated on each frame in order to track camera movement and other changes.
        const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
            format: RGBFormat,
            generateMipmaps: true,
            minFilter: LinearMipmapLinearFilter,
        });

        const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);

        cubeCamera.position.set(0, 100, 0);

        scene.add(cubeCamera);

        // Update the cubeCamera with current renderer and scene.
        useFrame(() => cubeCamera.update(gl, scene));

        return (
            <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
                <sphereGeometry attach="geometry" args={[2, 32, 32]} />
                <meshBasicMaterial
                    attach="material"
                    envMap={cubeCamera.renderTarget.texture}
                    color="white"
                    roughness={0.1}
                    metalness={1}
                />
            </mesh>
        );
    }

    //#region ==================== SKYBOX - REF: https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/ ====================



    //#region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================
    //        -------------------- TEXT - REF: https://spectrum.chat/react-three-fiber/general/howto-render-lots-of-text~649fcb63-b8e8-4ce5-b79d-a6c347d72253 --------------------

    function GroundPlane() {
        return (
            <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -5, 0]}>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                {/* <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} /> */}
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
            </mesh>
        );
    }

    function BackDrop() {

        return (
            <mesh receiveShadow position={[0, -1, -5]}>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
                {/* <meshStandardMaterial attach={cubeMaterial} color="white" side={DoubleSide} metalness={0.4} /> */}
            </mesh>
        );
    }

    //#endregion ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================



    return (
        <>
            {/* <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" /> */}
            {/* <meshStandardMaterial color={0xffffff} attach="material" side={BackSide} metalness={0.4}/> */}

            {/* <BackDrop /> */}
            {/* <GroundPlane /> */}

            <Sphere />
            <SkyBox />
        </>
    );
};
