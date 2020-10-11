import React, {
    useMemo,
    useRef,
    useState,
    useEffect,
    useCallback
} from "react";
import { random } from "lodash";
import { useFrame } from "react-three-fiber";

export default () => {
    const meshRef = useRef();
    const timeRef = useRef(0);

    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const isActiveRef = useRef(isActive);

    // position
    const position = useMemo(() => {
        // return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)];
        return [random(-1.5, 1.5, true), random(-1.5, 1.5, true), random(-1.5, 1.5, true)];
    }, []);

    // random time mod factor
    const timeModMemo = useMemo(() => random(0.1, 4, true), []);

    // color
    // const color = isHovered ? 0xe5d54d : (isActive ? 0xf7e7e5 : 0xf95b3c);
    const color = isHovered ? 0x666666 : (isActive ? 0x000000 : 0xdddddd);

    //useEffect of the activeState
    useEffect(() => {
        isActiveRef.current = isActive;
    }, [isActive]);

    // raf loop
    useFrame(() => {
        meshRef.current.rotation.y += 0.01 * timeModMemo;
        if (isActiveRef.current) {
            timeRef.current += 0.03;
            meshRef.current.position.y = position[1] + Math.sin(timeRef.current) * 0.4;
        }
    });

    // Events
    const onHover = useCallback(
        (e, value) => {
            e.stopPropagation();
            setIsHovered(value);
        },
        [setIsHovered]
    );

    const onClick = useCallback(
        e => {
            e.stopPropagation();
            setIsActive(v => !v);
        },
        [setIsActive]
    );

    return (
        <mesh
            ref={meshRef}
            position={position}
            onClick={e => onClick(e)}
            onPointerOver={e => onHover(e, true)}
            onPointerOut={e => onHover(e, false)}
        >
            <boxBufferGeometry attach="geometry" args={[0.005, 0.75, 1]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.6}
                metalness={0.1}
            />
        </mesh>
    );
};