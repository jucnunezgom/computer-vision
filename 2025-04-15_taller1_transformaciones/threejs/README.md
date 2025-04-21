# Three.js - 3D transformations

This project demonstrates a basic 3D object animation using React Three Fiber, a React renderer for Three.js. It features translation along a sinusoidal path, rotation, smooth scaling, and interactive camera controls with OrbitControls.

## How to Use

```bash
git clone https://github.com/jucnunezgom/computer-vision.git
cd ./computer-vision/2025-04-15_taller1_transformaciones/threejs
npm install # or yarn install
npm run dev # or yarn dev
```

Open your browser and navigate to the address shown in the terminal (usually `http://localhost:5173/`).

## Overview

The scene displays a 3D cube that animates with the following movements:

- **Translation:** The cube oscillates along the X and Y axes in a wavy pattern.
- **Rotation:** The cube continuously spins around both its X and Y axes.
- **Scaling:** The cube smoothly pulses in size.

You can interact with the camera using OrbitControls to rotate around, pan, and zoom in on the animated cube.

## Code

The core logic for the animated cube is within the `AnimatedCube` component in `src/App.jsx`.

![Code](https://i.imgur.com/HcQ1dFI.png)

## Result

![Animation in Three.js](https://i.imgur.com/dSBUeuT.gif)
