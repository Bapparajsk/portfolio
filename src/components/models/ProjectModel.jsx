'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";
import useScreenSize from "@/hooks/useScreenSize";

export function ProjectModel(props) {
    const { nodes, materials } = useGLTF('/models/house-transformed.glb');
    const modelRef = useRef();

    const size = useScreenSize();
    const isSmall = size <= 460;

    useFrame((state, delta, frame)=> {
        modelRef.current.rotation.y += 0.001;
        if (!isSmall) {
            modelRef.current.position.y = -0.19 + Math.sin( state.clock.getElapsedTime()) * 0.2;
        }

    },[])

    return (
        <group {...props} dispose={null}
               ref={modelRef}
               scale={[
                   isSmall ? 1 : 1.5,
                   isSmall ? 1 : 1.5,
                   isSmall ? 1 : 1.5,
               ]}

               rotation={[0.19, -8, 0]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.PaletteMaterial001}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_171.geometry}
                material={materials.PaletteMaterial001}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_172.geometry}
                material={materials.PaletteMaterial002}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_176.geometry}
                material={materials.PaletteMaterial003}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_177.geometry}
                material={materials.PaletteMaterial004}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_178.geometry}
                material={materials.PaletteMaterial005}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/house-transformed.glb')

