import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  let scene;

  try {
    scene = useGLTF("/models/target-stand/model.gltf").scene;
  } catch (e) {
    console.warn("Target model failed to load:", e);
    return null; // or render a placeholder mesh
  }

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 6, 0]}>
      <primitive object={scene} scale={1} />
    </mesh>
  );
};

export default Target;
