'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";
import useScreenSize from "@/hooks/useScreenSize";

export function AboutModel(props) {
    const { nodes, materials } = useGLTF('/models/about-transformed.glb')
    const modelRef = useRef();

    useFrame((state, delta, frame)=> {
        modelRef.current.rotation.y += 0.001;
        modelRef.current.position.y = -0.19 + Math.sin( state.clock.getElapsedTime()) * 0.2;

    },[])

    return (
        <group {...props} dispose={null}
               ref={modelRef}
               rotation={[0.20, 0, 0]}
               position={[0, 0.5, 0]}
        >
            <mesh
                name="Circle_mushroms_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle_mushroms_0.geometry}
                material={materials.mushroms}
                scale={0.007}
            />
            <mesh
                name="Plane_ground_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_ground_0.geometry}
                material={materials.ground}
                scale={0.007}
            />
        </group>
    )
}

useGLTF.preload('/models/about-transformed.glb')
