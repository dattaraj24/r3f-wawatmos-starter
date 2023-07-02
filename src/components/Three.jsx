import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const Game = () => {

const angleToRadians =(angle) =>{
 const sum = (Math.PI/180) * angle;
 return sum
} 
const Orbitcontrolref = useRef(null)
useFrame((state) =>{
  if(!!Orbitcontrolref.current){
 const{x,y} = state.mouse
 Orbitcontrolref.current.setAzimuthalAngle(-x * angleToRadians(90))
 Orbitcontrolref.current.setPolarAngle((y - 1)* angleToRadians(90 - 30))
 Orbitcontrolref.current.update()
  }
})

  return (
    <>
    <PerspectiveCamera makeDefault position={[0,1,5]}/>
    <OrbitControls ref={Orbitcontrolref} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>
     <mesh position={[0,0.5,0]}>
      <sphereGeometry args={[0.5,32,32]}/>
      <meshStandardMaterial color="#ffffff"/>
     </mesh>

   <mesh  rotation={[-(angleToRadians(90)),0,0]}>
    <planeGeometry args={[7,7]}/>
    <meshStandardMaterial color="#deb887"/>
   </mesh>
     

     <directionalLight args={['#ffffff', 1 ]}  position={[-4,1,0]}/>
    </>
  );
};

export default Game;