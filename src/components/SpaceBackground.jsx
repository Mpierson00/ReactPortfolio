import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpaceBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const starsGeometry = new THREE.Geometry();
    for (let i = 0; i < 10000; i++) {
      const star = new THREE.Vector3(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
      );
      starsGeometry.vertices.push(star);
    }

    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.0001;
      starField.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="background" ref={mountRef}></div>;
};

export default SpaceBackground;
