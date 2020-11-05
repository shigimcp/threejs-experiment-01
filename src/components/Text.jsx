//#region ==================== IMPORTS ====================

import React, { useMemo } from 'react';

import * as THREE from 'three';
import { useLoader, useUpdate } from 'react-three-fiber';

// import { TestFont } from '../fonts/ChaleParNinSix.json';

//#endregion ==================== IMPORTS ====================


//#region ==================== REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================

export default function Text ({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#0000ff', ...props }) {

    const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/ChaleParNinSix.json')

    const config = useMemo(
        // () => ({ font, size: 1, height: 0.125, curveSegments: 10, bevelEnabled: true, bevelThickness: 0, bevelSize: 0, bevelOffset: 0, bevelSegments: 0 }),
        () => ({ font, size: 1, height: 0.125, curveSegments: 10, bevelEnabled: false }),
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
                <meshPhongMaterial attach="material" color="#0000ff" />
            </mesh>
        </group>
    )
}

//#endregion ==================== REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================
