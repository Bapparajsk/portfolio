"use client";

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useScreenSize from "@/hooks/useScreenSize";

const getScalePosition = (size) => {
    if (size >= 1024) {
        return {
            scale: [2.6, 2.6, 2.6],
            position: [0, -3, 0],
        };
    } else if (size < 1024 && size > 768) {
        return {
            scale: [2.5, 2.5, 2.5],
            position: [0, -3, 0],
        };
    } else if (size < 768 && size > 480) {
        return {
            scale: [2.3, 2.3, 2.3],
            position: [0, -3, 0],
        };
    } else {
        return {
            scale: [2, 2, 2],
            position: [0, -2.4, 0],
        };
    }
}

export function MainModel(props) {
    const modelRef = useRef();
    const { nodes, materials, animations } = useGLTF(
        "/models/home.glb"
    );
    const { actions } = useAnimations(animations, modelRef);

    useEffect(() => {
        actions["Weapon Idle"].play();
        
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
        rotation={[0, 2, 0]}
      >
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.005}>
          <group name="Energy_Shape_3" position={[0, 314.399, -12.958]} rotation={[-0.032, 0, 0]}>
            <mesh
              name="Energy_Shape_3_Mat_staff_Translucent_0"
              castShadow
              receiveShadow
              geometry={nodes.Energy_Shape_3_Mat_staff_Translucent_0.geometry}
              material={materials.Mat_staff_Translucent}
            />
          </group>
          <group
            name="Energy_core"
            position={[0, 316.582, -13.129]}
            rotation={[-0.214, -0.205, -0.044]}>
            <mesh
              name="Energy_core_Mat_Staff_0"
              castShadow
              receiveShadow
              geometry={nodes.Energy_core_Mat_Staff_0.geometry}
              material={materials.Mat_Staff}
            />
          </group>
          <group name="Energy_Shape_2" position={[0, 314.168, -11.503]} rotation={[0.001, 0, 0]}>
            <mesh
              name="Energy_Shape_2_Mat_staff_Translucent_0"
              castShadow
              receiveShadow
              geometry={nodes.Energy_Shape_2_Mat_staff_Translucent_0.geometry}
              material={materials.Mat_staff_Translucent}
            />
          </group>
          <group name="Energy_Shape_1" position={[0, 318.471, -13.133]} rotation={[-0.006, 0, 0]}>
            <mesh
              name="Energy_Shape_1_Mat_staff_Translucent_0"
              castShadow
              receiveShadow
              geometry={nodes.Energy_Shape_1_Mat_staff_Translucent_0.geometry}
              material={materials.Mat_staff_Translucent}
            />
          </group>
          <group
            name="Energy_aura_1"
            position={[0, 317.403, -13.129]}
            rotation={[1.344, -0.207, 0.727]}>
            <mesh
              name="Energy_aura_1_Mat_staff_Translucent_0"
              castShadow
              receiveShadow
              geometry={nodes.Energy_aura_1_Mat_staff_Translucent_0.geometry}
              material={materials.Mat_staff_Translucent}
            />
          </group>
          <group
            name="Energy_aura_2"
            position={[0, 320.619, -13.129]}
            rotation={[-1.826, 0.054, -0.204]}>
            <mesh
              name="Energy_aura_2_Mat_staff_Translucent_0"
              castShadow
              receiveShadow
              geometry={nodes.Energy_aura_2_Mat_staff_Translucent_0.geometry}
              material={materials.Mat_staff_Translucent}
            />
          </group>
        </group>
        <mesh
          name="Staff_Body_Mat_Staff_0"
          castShadow
          receiveShadow
          geometry={nodes.Staff_Body_Mat_Staff_0.geometry}
          material={materials.Mat_Staff}
          scale={0.005}
        />
      </group>
    </group>
    );
}

useGLTF.preload("/models/home.glb");
