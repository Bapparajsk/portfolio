
"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function MainModel(props) {
    const { nodes, materials } = useGLTF('/models/scene-transformed.glb');
    const modelRef = useRef();

    useFrame((state, delta, frame) => {
        modelRef.current.position.y = -2.5 + Math.sin( state.clock.getElapsedTime()) * 0.2;
    })

    return (
        <group {...props} dispose={null}
               ref={modelRef}
               scale={[0.3, 0.3, 0.05]}
               position={[0, -2.5, 0]}
               rotation={[0.20, 0, 0]}
        >
            <mesh
                name="Body_Backup004_Clothes_0"
                castShadow
                receiveShadow
                // geometry={nodes.Body_Backup004_Clothes_0.geometry}
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

useGLTF.preload('/models/scene-transformed.glb')
