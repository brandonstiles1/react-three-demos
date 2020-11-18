import React, { useEffect } from 'react';
import * as THREE from 'three';


const ThreeCanvas = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerHeight / window.innerWidth, 0.1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const material = new THREE.LineBasicMaterial({ color: '#fff' });


    const points = [];
    points.push(new THREE.Vector3(- 10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);

    scene.add(line);

    function animate () {
      requestAnimationFrame(animate);
      line.rotation.x += 0.1;
      line.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    return;
  }, []);

  return (
    <div></div>
  );
}

export default ThreeCanvas;