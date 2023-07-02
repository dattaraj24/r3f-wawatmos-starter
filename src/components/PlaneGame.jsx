import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTouchControls, useKeyboardControls } from './controls';
import * as THREE from 'three';

const PlaneGame = () => {
  const { size } = useThree();
  const planeRef = useRef();
  const cameraRef = useRef();
  const controls = useTouchControls(planeRef);
  // Replace with useKeyboardControls for desktop controls

  useEffect(() => {
    const plane = planeRef.current;
    plane.position.y = size.height / 2;
    plane.position.z = -10;
  }, [size.height]);

  useFrame(() => {
    const plane = planeRef.current;
    plane.position.x += controls.x * 0.05;
    plane.position.y += controls.y * 0.05;
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        args={[75, size.width / size.height, 0.1, 1000]}
      />
      <mesh ref={planeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

export default PlaneGame;