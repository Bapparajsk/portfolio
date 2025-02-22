"use client";

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import useScreenSize from "@/hooks/useScreenSize";

const getScale = (size) => {
    if (size >= 1024) {
        return 1.5;
    } else if (size < 1024 && size > 768) {
        return 1.5;
    } else if (size < 768 && size > 480) {
        return 1.5;
    } else {
        return 0.8;
    }
}


export function ContactModel(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/earth-scene.glb')
    const { actions } = useAnimations(animations, group);

    const size = useScreenSize();

    useEffect(() => { actions["Animaci��n"].play(); }, []);


    return (
        <group ref={group} scale={getScale(size)} {...props}  dispose={null}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <group name="Sketchfab_Scene">
                <group name="GLTF_SceneRootNode">
                    <group
                        name="Armature001_10"
                        position={[0.564, 0.451, 0.62]}
                        rotation={[0.708, -0.369, -0.737]}
                        scale={0.01}>
                        <group name="GLTF_created_0">
                            <primitive object={nodes.GLTF_created_0_rootJoint} />
                            <skinnedMesh
                                name="Object_15"
                                geometry={nodes.Object_15.geometry}
                                material={materials.ballena}
                                skeleton={nodes.Object_15.skeleton}
                            />
                        </group>
                    </group>
                    <group
                        name="Armature002_17"
                        position={[-0.846, -0.218, -0.378]}
                        rotation={[2.298, 0.497, 1.648]}
                        scale={0.01}>
                        <group name="GLTF_created_1">
                            <primitive object={nodes.GLTF_created_1_rootJoint} />
                            <skinnedMesh
                                name="Object_25"
                                geometry={nodes.Object_25.geometry}
                                material={materials.ballena}
                                skeleton={nodes.Object_25.skeleton}
                            />
                        </group>
                    </group>
                    <group
                        name="avion003_27"
                        position={[-0.409, -1.016, 0.477]}
                        rotation={[-0.438, 0, 2.792]}
                        scale={0.018}>
                        <mesh
                            name="Object_42"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_42.geometry}
                            material={materials['Atlas.2']}
                        />
                        <group name="avion004_25">
                            <mesh
                                name="Object_44"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_44.geometry}
                                material={materials['ox-logo']}
                            />
                        </group>
                        <group
                            name="Cube009_26"
                            position={[-3.44, -0.807, 0]}
                            rotation={[2.338, 0, 0]}
                            scale={[0.319, 0.221, 0.221]}>
                            <mesh
                                name="Object_46"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_46.geometry}
                                material={materials['Atlas.2']}
                            />
                        </group>
                    </group>
                    <group
                        name="ox-logo008_28"
                        position={[-0.954, 0.859, 0.547]}
                        rotation={[2.135, 0.755, 0.825]}
                        scale={0.141}>
                        <mesh
                            name="Object_48"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_48.geometry}
                            material={materials['Atlas.2']}
                        />
                    </group>
                    <group
                        name="ox-logo009_29"
                        position={[-0.842, 0.381, -1.049]}
                        rotation={[0.344, 0.653, 0.461]}
                        scale={0.141}>
                        <mesh
                            name="Object_50"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_50.geometry}
                            material={materials['Atlas.2']}
                        />
                    </group>
                    <group
                        name="avion001_31"
                        position={[0.01, 0.636, 1.074]}
                        rotation={[1.036, 0, 0]}
                        scale={0.018}>
                        <mesh
                            name="Object_54"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_54.geometry}
                            material={materials['ox-logo']}
                        />
                    </group>
                    <group
                        name="ox-logo001_32"
                        position={[-0.954, 0.859, 0.547]}
                        rotation={[2.135, 0.755, 0.825]}
                        scale={0.141}>
                        <mesh
                            name="Object_56"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_56.geometry}
                            material={materials['ox-logo']}
                        />
                    </group>
                    <group
                        name="ox-logo002_33"
                        position={[-0.842, 0.381, -1.049]}
                        rotation={[0.344, 0.653, 0.461]}
                        scale={0.141}>
                        <mesh
                            name="Object_58"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_58.geometry}
                            material={materials['ox-logo']}
                        />
                    </group>
                    <group
                        name="avion002_35"
                        position={[0.01, 0.636, 1.074]}
                        rotation={[1.036, 0, 0]}
                        scale={0.018}>
                        <mesh
                            name="Object_60"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_60.geometry}
                            material={materials['Atlas.2']}
                        />
                        <group
                            name="Cube001_34"
                            position={[-3.44, -0.807, 0]}
                            rotation={[2.338, 0, 0]}
                            scale={[0.319, 0.221, 0.221]}>
                            <mesh
                                name="Object_62"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_62.geometry}
                                material={materials['Atlas.2']}
                            />
                        </group>
                    </group>
                    <group
                        name="Icosphere004_37"
                        position={[-0.012, 1.161, 0.6]}
                        rotation={[Math.PI / 2, -1.053, Math.PI / 2]}
                        scale={[0.045, 0.035, 0.045]}>
                        <mesh
                            name="Object_66"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_66.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="nube002_38"
                        position={[-0.003, 0, 1.572]}
                        rotation={[2.489, -1.503, -0.655]}
                        scale={[-0.023, -0.017, -0.023]}>
                        <mesh
                            name="Object_68"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_68.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="Icosphere006_39"
                        position={[1.421, 0.599, -0.52]}
                        rotation={[-3.11, -0.434, -3.05]}
                        scale={[0.063, 0.055, 0.052]}>
                        <mesh
                            name="Object_70"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_70.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="nube003_40"
                        position={[0.587, -0.527, -1.197]}
                        rotation={[0.076, 0.992, 3.078]}
                        scale={[-0.018, -0.013, -0.018]}>
                        <mesh
                            name="Object_72"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_72.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="Icosphere007_41"
                        position={[-0.495, -1.3, -0.305]}
                        rotation={[0.594, -0.483, 0.304]}
                        scale={[0.05, 0.039, 0.05]}>
                        <mesh
                            name="Object_74"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_74.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="Icosphere008_42"
                        position={[-1.436, -0.22, -0.172]}
                        rotation={[0.518, 0.025, -0.014]}
                        scale={[0.045, 0.035, 0.045]}>
                        <mesh
                            name="Object_76"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_76.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="Icosphere009_43"
                        position={[0.952, 0.357, 1.09]}
                        rotation={[2.426, 0.715, -2.624]}
                        scale={[0.045, 0.035, 0.045]}>
                        <mesh
                            name="Object_78"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_78.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="nube004_44"
                        position={[-0.487, 0.642, -1.03]}
                        rotation={[0.098, -1.134, -3.052]}
                        scale={[-0.023, -0.017, -0.023]}>
                        <mesh
                            name="Object_80"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_80.geometry}
                            material={materials.nube}
                        />
                    </group>
                    <group
                        name="nube005_45"
                        position={[-1.119, -0.737, 0.257]}
                        rotation={[0.043, 0.22, 3.129]}
                        scale={[-0.023, -0.017, -0.023]}>
                        <mesh
                            name="Object_82"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_82.geometry}
                            material={materials.nube}
                        />
                    </group>
                </group>
                <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.agua}
                />
                <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.tierra}
                    scale={0.996}
                />
                <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Atlas_1}
                    position={[0.644, -0.215, -0.719]}
                    rotation={[-1.679, 0.395, 0.896]}
                    scale={[0.015, 0.021, 0.016]}
                />
                <mesh
                    name="Object_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials['Atlas.2']}
                    position={[0.848, 0.333, 0.4]}
                    rotation={[-1.408, -0.59, -1.937]}
                    scale={0.01}
                />
                <primitive object={nodes.GLTF_created_2_rootJoint} />
                <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.ballena}
                    skeleton={nodes.Object_35.skeleton}
                    position={[0.43, -0.474, -0.704]}
                    rotation={[-0.216, 1.029, -1.973]}
                    scale={0.01}
                />
                <mesh
                    name="Object_64"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_64.geometry}
                    material={materials.vegetacin}
                    position={[0.851, 0.605, -0.005]}
                    rotation={[0.173, 0.354, -1.1]}
                    scale={0.011}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/earth-scene.glb')
