import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const SpaceBackground = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <ambientLight />
      <Stars radius={200} depth={100} count={100000} factor={7} saturation={0} fade />
    </Canvas>
  );
};

export default SpaceBackground;
