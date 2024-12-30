"use client"

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useScreenSize from "@/hooks/useScreenSize";

export function MainModel(props) {

    const modelRef = useRef();
    const { nodes, materials } = useGLTF('/models/scene-transformed.glb');
    
    const size = useScreenSize();
    const isLarge = size >= 1024;
    const isMedium = size < 1024 && size > 768;
    const isBigSmall = size < 768 && size > 480;
    const isSmall = size <= 480;

    useFrame((state) => {
        modelRef.current.position.y = (isSmall ? -1.5 : -2.5) + Math.sin(state.clock.getElapsedTime()) * 0.2;
    })

    return (
        <group {...props} dispose={null}
            ref={modelRef}
            scale={[
                isLarge ? 0.30 : isMedium ? 0.28 : isBigSmall ? 0.25 : 0.20,
                isLarge ? 0.30 : isMedium ? 0.28 : isBigSmall ? 0.25 : 0.20,
                0.05
            ]}
            position={[0, isSmall ? -1.5 : -2.5, 0]}
            rotation={[0.20, 0, 0]}
        >
            <mesh
                name="Body_Backup004_Clothes_0"
                castShadow
                receiveShadow
                geometry={nodes.Body_Backup004_Clothes_0.geometry}
                material={materials.Clothes}
                position={[-1.004, 8.068, -2.943]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                name="Body_Backup002_Skin_0"
                castShadow
                receiveShadow
                geometry={nodes.Body_Backup002_Skin_0.geometry}
                material={materials.Skin}
                position={[-1.004, 8.068, -2.943]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                name="Body_Backup003_Hair_0"
                castShadow
                receiveShadow
                geometry={nodes.Body_Backup003_Hair_0.geometry}
                material={materials.Hair}
                position={[-1.004, 8.068, -2.943]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                name="Body_Backup005_Fire_0"
                castShadow
                receiveShadow
                geometry={nodes.Body_Backup005_Fire_0.geometry}
                material={materials.Fire}
                position={[-1.004, 8.068, -2.943]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/scene-transformed.glb');
