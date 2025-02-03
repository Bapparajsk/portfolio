"use client";

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useScreenSize from "@/hooks/useScreenSize";

const getScalePosition = (size) => {
    if (size >= 1024) {
        return {
            scale: [1.5, 1.5, 1.5],
            position: [0, -2, 0],
            rotation: [0.15, 0, 0],
        };
    } else if (size < 1024 && size > 768) {
        return {
            scale: [1.2, 1.2, 1.2],
            position: [0, -1.5, 0],
            rotation: [0.15, 0, 0],
        };
    } else if (size < 768 && size > 480) {
        return {
            scale: [1, 1, 1],
            position: [0, -1.3, 0],
            rotation: [0.15, 0, 0],
        };
    } else {
        return {
            scale: [0.8, 0.8, 0.8],
            position: [0, -.9, 0],
            rotation: [0.15, 0, 0],
        };
    }
}

export function MainModel(props) {
    const modelRef = useRef();
    const { nodes, materials, animations } = useGLTF(
        "/models/scene-transformed.glb"
    );
    const { actions } = useAnimations(animations, modelRef);

    useEffect(() => {
        console.log("MainModel loaded");
        actions["Take 001"].play();
        
    },[]);

    const size = useScreenSize();
    const sceneData = getScalePosition(size);

    useFrame((state) => {
        modelRef.current.position.y =
        sceneData.position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
    });

    
    return (
        <group 
            ref={modelRef} 
            {...props} 
            {...sceneData}
        >
            <group>
                <group name="RootNode" rotation={[0.001, 0, 0]} scale={0.041}>
                    <group name="geo_sword" position={[0.592, 35.219, 1.075]}>
                        <group name="sword_main" position={[-0.592, -0.191, -1.075]}>
                            <mesh
                                name="sword_main_M_Sword_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.sword_main_M_Sword_0.geometry}
                                material={materials.M_Sword}
                            />
                            <mesh
                                name="sword_main_M_Emissive_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.sword_main_M_Emissive_0.geometry}
                                material={materials.M_Emissive}
                            />
                        </group>
                        <group name="sword_piece" position={[-0.592, -0.244, -1.075]}>
                            <group name="sword_piece_1" position={[0, -0.016, 0]}>
                                <mesh
                                    name="sword_piece_1_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_1_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_2" position={[0, -0.003, 0]}>
                                <mesh
                                    name="sword_piece_2_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_2_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_3" position={[0, -0.042, 0]}>
                                <mesh
                                    name="sword_piece_3_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_3_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_4">
                                <mesh
                                    name="sword_piece_4_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_4_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_5">
                                <mesh
                                    name="sword_piece_5_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_5_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_6">
                                <mesh
                                    name="sword_piece_6_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_6_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_7" position={[0, -0.246, 0]}>
                                <mesh
                                    name="sword_piece_7_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_7_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_8" position={[0, -0.173, 0]}>
                                <mesh
                                    name="sword_piece_8_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_8_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                            <group name="sword_piece_9" position={[0, -0.199, 0]}>
                                <mesh
                                    name="sword_piece_9_M_Sword_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.sword_piece_9_M_Sword_0.geometry}
                                    material={materials.M_Sword}
                                />
                            </group>
                        </group>
                    </group>
                    <group name="vfx_circle" scale={0.382}>
                        <mesh
                            name="vfx_circle_M_VFX2_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.vfx_circle_M_VFX2_0.geometry}
                            material={materials.M_VFX2}
                        />
                    </group>
                    <group
                        name="vfx_circle1"
                        rotation={[-Math.PI, -1.1, -Math.PI]}
                        scale={[0.479, 0.887, 0.479]}
                    >
                        <mesh
                            name="vfx_circle1_M_VFX2_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.vfx_circle1_M_VFX2_0.geometry}
                            material={materials.M_VFX2}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/models/scene-transformed.glb");
