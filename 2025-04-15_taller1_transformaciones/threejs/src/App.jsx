import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function AnimatedCube() {
  const mesh = useRef(); // A reference to the cube mesh in our scene

  useFrame((state, delta) => {
    // This function runs on every frame

    // 1. Translate along a sinusoidal path (waving)
    mesh.current.position.x = Math.sin(state.clock.elapsedTime) * 2; // Move along the X-axis based on time
    mesh.current.position.y = Math.cos(state.clock.elapsedTime * 1.5) * 1.5; // Move along the Y-axis with a slightly different wave

    // 2. Rotate on its own axis (spinning)
    mesh.current.rotation.x += 0.01 * delta * 100; // Rotate around the X-axis (adjust multiplier for speed)
    mesh.current.rotation.y += 0.01 * delta * 100; // Rotate around the Y-axis

    // 3. Scale smoothly (pulsating)
    const scaleFactor = 1 + Math.sin(state.clock.elapsedTime) * 0.5; // Calculate a scale factor that oscillates
    mesh.current.scale.set(scaleFactor, scaleFactor, scaleFactor); // Apply the same scale to all axes
  });

  return (
    <mesh ref={mesh}>
      {/* This is our 3D object */}
      <boxGeometry args={[2, 2, 2]} />{" "}
      {/* Creating a cube geometry with dimensions 2x2x2 */}
      <meshStandardMaterial color="hotpink" />{" "}
      {/* Giving it a pink color with standard lighting properties */}
    </mesh>
  );
}

function App() {
  return (
    // A div to make the canvas fullscreen and centered
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [3, 3, 3] }} // Setting an initial position for the camera
        style={{ width: "80vw", height: "80vh" }} // Making the canvas take up 80% of the viewport
      >
        <ambientLight intensity={0.5} />{" "}
        {/* Adding some soft overall light to the scene */}
        <pointLight position={[5, 5, 5]} intensity={1} />{" "}
        {/* Adding a point light source at position (5, 5, 5) */}
        <AnimatedCube /> {/* Rendering our animated cube component */}
        <OrbitControls />{" "}
        {/* Adding the OrbitControls for interactive camera movement */}
      </Canvas>
    </div>
  );
}

export default App;
