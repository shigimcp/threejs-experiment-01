// #region ==================== IMPORTS ====================

import React, { useRef, useMemo } from 'react';

import * as THREE from 'three';
import { useLoader, useUpdate } from 'react-three-fiber';

// #endregion ==================== IMPORTS ====================


// #region ==================== FUNCTION: Text - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================

function Text({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#0000ff', ...props }) {

    const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/ChaleParNinSix.json')

    const config = useMemo(
        () => ({ font, size: 1, height: 0.125, curveSegments: 10, bevelEnabled: true, bevelThickness: 0, bevelSize: 0, bevelOffset: 0, bevelSegments: 0 }),
        [font]
    )

    const meshRef = useUpdate(

        self => {
            const size = new THREE.Vector3()
            self.geometry.computeBoundingBox()
            self.geometry.boundingBox.getSize(size)
            self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
            self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
        },

        [children]
    )


    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={meshRef} castShadow>
                <textGeometry attach="geometry" args={[children, config]} />
                <meshStandardMaterial attach="material" color="#000066" />
                {/* <meshPhongMaterial attach="material" color="#0000ff" /> */}
            </mesh>
        </group>
    )
}

// #endregion ==================== FUNCTION: Text - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================


export default function Hed() {

    const hedRef = useRef()

    return (
        <group ref={hedRef}>
            <Text hAlign="left" position={[0.7625, 1.5, -4]} children="Shigeru McPherson" size={5} />
            <Text hAlign="left" position={[0, 0.8125, -4]} children="digital designer • art director" size={3} />
        </group>
    )
}
