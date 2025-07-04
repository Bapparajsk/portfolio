"use client";

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useScreenSize from "@/hooks/useScreenSize";

const getScale = (size) => {
    if (size >= 1024) {
        return 1.2;
    } else if (size < 1024 && size > 768) {
        return 1.2;
    } else if (size < 768 && size > 480) {
        return 1.1;
    } else {
        return 0.8;
    }
}


export function ContactModel(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/contact.glb')
    const { actions } = useAnimations(animations, group);

    const size = useScreenSize();


    useEffect(() => { actions["Experiment"].play(); }, []);

    return (
        <group ref={group} {...props} position={[0, -1, 0]} rotation={[0.1, 0, 0]}  scale={getScale(size)} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="holo" scale={0.107}>
                    <group
                        name="group36"
                        position={[0.33, 0, -0.099]}
                        rotation={[-Math.PI, -0.142, -Math.PI]}
                        scale={0.989}>
                        <group name="group39" rotation={[0, 0.877, 0]}>
                            <group name="group37" position={[-4.63, 14.294, 1.994]}>
                                <group
                                    name="group31"
                                    position={[4.63, -4.887, -1.994]}
                                    rotation={[0.006, 0, 0.01]}
                                    scale={1.182}>
                                    <group
                                        name="group35"
                                        position={[0.225, 0.107, 0.003]}
                                        rotation={[-Math.PI, -1.463, Math.PI]}>
                                        <group name="group38" position={[0.039, 0.755, 0.248]}>
                                            <group
                                                name="group29"
                                                position={[-0.027, -10.245, -0.036]}
                                                rotation={[0, Math.PI / 4, 0]}>
                                                <group name="group21" position={[-12.687, 10.697, 0]} scale={0.245}>
                                                    <group
                                                        name="MASH1_ReproMesh12"
                                                        position={[0, 0.239, 0]}
                                                        rotation={[-1.132, 0, Math.PI / 2]}
                                                        scale={[1.033, 1, 1.033]}>
                                                        <mesh
                                                            name="MASH1_ReproMesh12_holo1_0"
                                                            castShadow
                                                            receiveShadow
                                                            geometry={nodes.MASH1_ReproMesh12_holo1_0.geometry}
                                                            material={materials.holo1}
                                                        />
                                                    </group>
                                                    <group name="group14" rotation={[0, 1.132, 0]}>
                                                        <group name="group30" rotation={[0.492, 0, 0]} scale={3.169}>
                                                            <group name="pSuperShape2" scale={2.076}>
                                                                <mesh
                                                                    name="pSuperShape2_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pSuperShape2_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                            <group name="pSuperShape3" scale={2.076}>
                                                                <mesh
                                                                    name="pSuperShape3_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pSuperShape3_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name="group28"
                                                position={[-0.027, -10.245, -0.036]}
                                                rotation={[0, Math.PI / 2, 0]}>
                                                <group name="group21_1" position={[-12.687, 10.697, 0]} scale={0.245}>
                                                    <group
                                                        name="MASH1_ReproMesh12_1"
                                                        position={[0, 0.239, 0]}
                                                        rotation={[-1.132, 0, Math.PI / 2]}
                                                        scale={[1.033, 1, 1.033]}>
                                                        <group name="MASH1_ReproMesh19">
                                                            <mesh
                                                                name="MASH1_ReproMesh19_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.MASH1_ReproMesh19_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                    </group>
                                                    <group name="group14_1" rotation={[0, 1.132, 0]}>
                                                        <group name="group7" rotation={[0.317, -0.659, 1.521]} scale={2.048}>
                                                            <group name="pGear1">
                                                                <mesh
                                                                    name="pGear1_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pGear1_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                            <group name="pGear2">
                                                                <mesh
                                                                    name="pGear2_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pGear2_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name="group27"
                                                position={[-0.027, -10.245, -0.036]}
                                                rotation={[-Math.PI, Math.PI / 4, Math.PI]}>
                                                <group name="group20" position={[-12.687, 10.697, 0]} scale={0.245}>
                                                    <group
                                                        name="MASH1_ReproMesh11"
                                                        position={[0, 0.239, 0]}
                                                        rotation={[-1.132, 0, Math.PI / 2]}
                                                        scale={[1.033, 1, 1.033]}>
                                                        <group name="MASH1_ReproMesh18">
                                                            <mesh
                                                                name="MASH1_ReproMesh18_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.MASH1_ReproMesh18_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                    </group>
                                                    <group name="group13" rotation={[0, 1.132, 0]}>
                                                        <group
                                                            name="group6"
                                                            position={[0, 0.028, 0]}
                                                            rotation={[0.479, 0.1, -0.002]}
                                                            scale={2.37}>
                                                            <group name="pHelix1">
                                                                <mesh
                                                                    name="pHelix1_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pHelix1_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                            <group name="pHelix2">
                                                                <mesh
                                                                    name="pHelix2_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pHelix2_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name="group26"
                                                position={[-0.027, -10.245, -0.036]}
                                                rotation={[-Math.PI, 0, -Math.PI]}>
                                                <group name="group19" position={[-12.687, 10.697, 0]} scale={0.245}>
                                                    <group
                                                        name="MASH1_ReproMesh10"
                                                        position={[0, 0.239, 0]}
                                                        rotation={[-1.132, 0, Math.PI / 2]}
                                                        scale={[1.033, 1, 1.033]}>
                                                        <group name="MASH1_ReproMesh17">
                                                            <mesh
                                                                name="MASH1_ReproMesh17_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.MASH1_ReproMesh17_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                    </group>
                                                    <group name="group12" rotation={[0, 1.132, 0]}>
                                                        <group
                                                            name="group4"
                                                            position={[-0.254, 1.103, -0.402]}
                                                            rotation={[-0.176, -0.673, 0.273]}
                                                            scale={1.554}>
                                                            <group name="pPyramid1" scale={[5.263, 7.637, 5.263]}>
                                                                <mesh
                                                                    name="pPyramid1_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pPyramid1_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                            <group name="pPyramid2" scale={[5.572, 8.085, 5.572]}>
                                                                <mesh
                                                                    name="pPyramid2_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pPyramid2_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name="group25"
                                                position={[-0.027, -10.245, -0.036]}
                                                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}>
                                                <group name="group18" position={[-12.692, 10.697, 0]} scale={0.245}>
                                                    <group
                                                        name="MASH1_ReproMesh9"
                                                        position={[0, 0.239, 0]}
                                                        rotation={[-1.132, 0, Math.PI / 2]}
                                                        scale={[1.033, 1, 1.033]}>
                                                        <group name="MASH1_ReproMesh16">
                                                            <mesh
                                                                name="MASH1_ReproMesh16_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.MASH1_ReproMesh16_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                    </group>
                                                    <group name="group11" rotation={[0, 1.132, 0]}>
                                                        <group name="group5" rotation={[0.222, 0.16, 0.928]} scale={1.89}>
                                                            <group name="pTorus2">
                                                                <mesh
                                                                    name="pTorus2_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pTorus2_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                            <group name="pTorus1">
                                                                <mesh
                                                                    name="pTorus1_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pTorus1_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name="group23"
                                                position={[-0.027, -10.245, -0.036]}
                                                rotation={[0, -Math.PI / 4, 0]}>
                                                <group name="group16" position={[-12.687, 10.697, 0]} scale={0.245}>
                                                    <group
                                                        name="MASH1_ReproMesh7"
                                                        position={[0, 0.239, 0]}
                                                        rotation={[-1.132, 0, Math.PI / 2]}
                                                        scale={[1.033, 1, 1.033]}>
                                                        <group name="MASH1_ReproMesh14">
                                                            <mesh
                                                                name="MASH1_ReproMesh14_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.MASH1_ReproMesh14_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                    </group>
                                                    <group name="group9" rotation={[0, 1.132, 0]} scale={1.303}>
                                                        <group name="group2" rotation={[-0.623, -0.617, 0.102]}>
                                                            <group name="pCube1" scale={4.808}>
                                                                <mesh
                                                                    name="pCube1_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pCube1_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                            <group name="pCube2" scale={4.918}>
                                                                <mesh
                                                                    name="pCube2_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pCube2_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group name="group22" position={[-0.027, -10.245, -0.036]}>
                                                <group name="group15" position={[-12.687, 10.697, 0]} scale={0.245}>
                                                    <group
                                                        name="MASH1_ReproMesh6"
                                                        position={[0, 0.239, 0]}
                                                        rotation={[-1.132, 0, Math.PI / 2]}
                                                        scale={[1.033, 1, 1.033]}>
                                                        <group name="MASH1_ReproMesh13">
                                                            <mesh
                                                                name="MASH1_ReproMesh13_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.MASH1_ReproMesh13_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                    </group>
                                                    <group name="group8" rotation={[0, 1.132, 0]}>
                                                        <group
                                                            name="group1"
                                                            rotation={[-0.513, 0, 0]}
                                                            scale={[1.223, 0.98, 1.223]}>
                                                            <group name="pCylinder2" scale={3.569}>
                                                                <mesh
                                                                    name="pCylinder2_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pCylinder2_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                            <group name="pCylinder3" scale={3.665}>
                                                                <mesh
                                                                    name="pCylinder3_holo1_0"
                                                                    castShadow
                                                                    receiveShadow
                                                                    geometry={nodes.pCylinder3_holo1_0.geometry}
                                                                    material={materials.holo1}
                                                                />
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name="pCylinder4"
                                                position={[-0.027, 0.458, -0.036]}
                                                scale={[0.818, 0.439, 0.818]}>
                                                <mesh
                                                    name="pCylinder4_holo1_0"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.pCylinder4_holo1_0.geometry}
                                                    material={materials.holo1}
                                                />
                                            </group>
                                        </group>
                                        <group
                                            name="group24"
                                            position={[0.021, -10.723, 0.224]}
                                            rotation={[0, -Math.PI / 2, 0]}>
                                            <group name="group17" position={[-12.356, 11.797, 0.231]} scale={0.295}>
                                                <group name="group10" rotation={[Math.PI, -1.163, Math.PI]}>
                                                    <group name="group3" scale={1.445}>
                                                        <group name="pPlatonic1" scale={3.239}>
                                                            <mesh
                                                                name="pPlatonic1_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.pPlatonic1_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                        <group name="pPlatonic2" scale={3.414}>
                                                            <mesh
                                                                name="pPlatonic2_holo1_0"
                                                                castShadow
                                                                receiveShadow
                                                                geometry={nodes.pPlatonic2_holo1_0.geometry}
                                                                material={materials.holo1}
                                                            />
                                                        </group>
                                                    </group>
                                                </group>
                                                <group
                                                    name="MASH1_ReproMesh8"
                                                    position={[0.227, 0.006, -0.549]}
                                                    rotation={[-1.132, 0, Math.PI / 2]}
                                                    scale={[0.818, 0.792, 0.818]}>
                                                    <group name="MASH1_ReproMesh15">
                                                        <mesh
                                                            name="MASH1_ReproMesh15_holo1_0"
                                                            castShadow
                                                            receiveShadow
                                                            geometry={nodes.MASH1_ReproMesh15_holo1_0.geometry}
                                                            material={materials.holo1}
                                                        />
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                    <group name="pPlatonic3" position={[-0.348, -0.124, -0.324]} scale={0.001}>
                                        <mesh
                                            name="pPlatonic3_holo1_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.pPlatonic3_holo1_0.geometry}
                                            material={materials.holo1}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
                <group name="ground" position={[0, 0.042, 0]} scale={0.107}>
                    <group name="pPipe4" position={[0, -0.429, 0]} rotation={[0, -0.311, 0]}>
                        <mesh
                            name="pPipe4_holo1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPipe4_holo1_0.geometry}
                            material={materials.holo1}
                        />
                        <group name="MASH1_ReproMesh2" position={[0, 0.429, 0]}>
                            <mesh
                                name="MASH1_ReproMesh2_holo1_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.MASH1_ReproMesh2_holo1_0.geometry}
                                material={materials.holo1}
                            />
                        </group>
                    </group>
                    <group name="pPipe2" position={[0, -0.576, 0]} rotation={[0, 0.311, 0]}>
                        <mesh
                            name="pPipe2_holo1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPipe2_holo1_0.geometry}
                            material={materials.holo1}
                        />
                        <group name="MASH1_ReproMesh3" position={[0, 0.576, 0]} scale={[0.819, 0.804, 0.819]}>
                            <mesh
                                name="MASH1_ReproMesh3_holo1_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.MASH1_ReproMesh3_holo1_0.geometry}
                                material={materials.holo1}
                            />
                        </group>
                        <group name="pPipe3" rotation={[0, 0.684, 0]} scale={0.856}>
                            <mesh
                                name="pPipe3_holo1_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.pPipe3_holo1_0.geometry}
                                material={materials.holo1}
                            />
                        </group>
                    </group>
                    <group name="pPipe1" rotation={[0, -0.311, 0]}>
                        <mesh
                            name="pPipe1_holo1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPipe1_holo1_0.geometry}
                            material={materials.holo1}
                        />
                        <group name="MASH1_ReproMesh1" scale={[1.033, 1, 1.033]}>
                            <mesh
                                name="MASH1_ReproMesh1_holo1_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.MASH1_ReproMesh1_holo1_0.geometry}
                                material={materials.holo1}
                            />
                        </group>
                    </group>
                </group>
                <mesh
                    name="pDisc1_holo1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pDisc1_holo1_0.geometry}
                    material={materials.holo1}
                    scale={1.189}
                />
                <primitive object={nodes._rootJoint} />
                <skinnedMesh
                    name="Object_162"
                    geometry={nodes.Object_162.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_162.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_164"
                    geometry={nodes.Object_164.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_164.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_166"
                    geometry={nodes.Object_166.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_166.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_168"
                    geometry={nodes.Object_168.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_168.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_170"
                    geometry={nodes.Object_170.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_170.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_172"
                    geometry={nodes.Object_172.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_172.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_174"
                    geometry={nodes.Object_174.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_174.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_176"
                    geometry={nodes.Object_176.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_176.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_178"
                    geometry={nodes.Object_178.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_178.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_180"
                    geometry={nodes.Object_180.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_180.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_182"
                    geometry={nodes.Object_182.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_182.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_184"
                    geometry={nodes.Object_184.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_184.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_186"
                    geometry={nodes.Object_186.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_186.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_188"
                    geometry={nodes.Object_188.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_188.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_190"
                    geometry={nodes.Object_190.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_190.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_192"
                    geometry={nodes.Object_192.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_192.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_194"
                    geometry={nodes.Object_194.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_194.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_196"
                    geometry={nodes.Object_196.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_196.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_198"
                    geometry={nodes.Object_198.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_198.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_200"
                    geometry={nodes.Object_200.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_200.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_202"
                    geometry={nodes.Object_202.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_202.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_204"
                    geometry={nodes.Object_204.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_204.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_206"
                    geometry={nodes.Object_206.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_206.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_208"
                    geometry={nodes.Object_208.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_208.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_210"
                    geometry={nodes.Object_210.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_210.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_212"
                    geometry={nodes.Object_212.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_212.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_214"
                    geometry={nodes.Object_214.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_214.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_216"
                    geometry={nodes.Object_216.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_216.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_218"
                    geometry={nodes.Object_218.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_218.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_220"
                    geometry={nodes.Object_220.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_220.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_222"
                    geometry={nodes.Object_222.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_222.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_224"
                    geometry={nodes.Object_224.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_224.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_226"
                    geometry={nodes.Object_226.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_226.skeleton}
                    scale={0.057}
                />
                <skinnedMesh
                    name="Object_228"
                    geometry={nodes.Object_228.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_228.skeleton}
                    scale={0.057}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/contact.glb')
