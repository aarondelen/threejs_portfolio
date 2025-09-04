import React, { useEffect, useRef, useMemo } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

// ✅ Preload avatar GLB once (avoids re-fetching on every mount)
useGLTF.preload('/models/animations/pogiman.glb')

const Developer = ({ animationName = 'salute', ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/animations/pogiman.glb')

  // ✅ Load animations (FBX → GLTF under the hood)
  const salute = useFBX('/models/animations/salute.fbx')
  const clapping = useFBX('/models/animations/clapping.fbx')
  const victory = useFBX('/models/animations/victory.fbx')

  // ✅ Name animations only once (no re-renders)
  useMemo(() => {
    salute.animations[0].name = 'salute'
    clapping.animations[0].name = 'clapping'
    victory.animations[0].name = 'victory'
  }, [salute, clapping, victory])

  // ✅ UseAnimations with all clips
  const { actions } = useAnimations(
    [salute.animations[0], clapping.animations[0], victory.animations[0]],
    group
  )

  // ✅ Smooth transition between animations
  useEffect(() => {
    const action = actions[animationName]
    if (!action) return

    action.reset().fadeIn(0.5).play()

    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5)
      }
    }
  }, [animationName, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  )
}

export default Developer
