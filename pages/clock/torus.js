import { useFrame } from "@react-three/fiber";
import { useRef } from 'react'

const  Torus =(props)=> {
  const torusRef = useRef()

  useFrame(() => {
  torusRef.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={torusRef} {...props} recieveShadow={true} castShadow>
      <torusGeometry args={[1.8, 1.2, 48, 64]}/>
      <meshBasicMaterial wireframe color={0xffffff} />
    </mesh>
  );
}
export default Torus;
