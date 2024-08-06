import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef(); //useRef adalah hook yang memungkinkan Anda menyimpan referensi ke elemen HTML atau elemen lainnya dalam variabel

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene); //useGLTF adalah hook yang memungkinkan Anda mengimpor model 3D dan animasi dari file GLTF

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);   //useAnimations adalah hook yang memungkinkan Anda mengakses animasi yang terkait dengan model 3D

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => { //useEffect adalah hook yang memungkinkan Anda menjalankan kode setelah render pertama
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => { //useFrame adalah hook yang memungkinkan Anda menjalankan kode setiap frame artinya setiap kali layar di render ulang
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
