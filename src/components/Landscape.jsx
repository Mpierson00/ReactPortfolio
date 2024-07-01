import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Plane, useTexture } from '@react-three/drei';

const Landscape = () => {
  const grassTexture = useTexture('/textures/grass.jpg');

  return (
    <Canvas className="background">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Sky
        distance={450000} 
        sunPosition={[0, 1, 0]} 
        inclination={0} 
        azimuth={0.25} 
      />
      <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial attach="material" map={grassTexture} />
      </Plane>
      <OrbitControls />
    </Canvas>
  );
};

export default Landscape;
