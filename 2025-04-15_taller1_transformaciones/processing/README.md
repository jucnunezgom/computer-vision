# Processing - 3D Transformations

This Processing sketch demonstrates basic 3D transformations driven by time.

## Overview

The sketch draws a 3D cube that undergoes the following transformations simultaneously:

- **Rotation:** The cube continuously rotates around its Y-axis.
- **Translation:** The cube moves up and down in a smooth, wavy motion.
- **Scaling:** The size of the cube cyclically increases and decreases.

## How to Use

1. Make sure you have Processing installed (version 3 or later). You can download it from [https://processing.org/download/](https://processing.org/download/).
2. Download or clone this repository.
3. Open the `Transformations.pde` file in the Processing IDE.
4. Click the "Run" button in the Processing toolbar.

## Code Explanation

The sketch uses the following Processing functions to achieve the transformations:

- `size(width, height, P3D)`: Sets the window size and enables 3D rendering.
- `background(gray)`: Sets the background color.
- `fill(r, g, b)`: Sets the fill color for shapes.
- `noStroke()`: Disables drawing outlines around shapes.
- `translate(x, y, z)`: Moves the origin of the coordinate system, causing subsequent shapes to be drawn at an offset. The wavy translation is achieved using `sin(frameCount * speed)`.
- `rotateY(angle)`: Rotates the coordinate system around the Y-axis. The rotation is driven by `frameCount` to create continuous movement.
- `scale(factor)`: Resizes the coordinate system. The cyclical scaling is done by mapping the output of `sin(frameCount * speed)` to a range between 0.5 and 1.5.
- `box(size)`: Draws a cube with the specified side length.
- `pushMatrix()`: This function saves the current state of the coordinate system (including position, rotation, and scale). Think of it as taking a snapshot.
- `popMatrix()`: This function restores the coordinate system to the state it was in when the most recent `pushMatrix()` was called. It's like going back to that snapshot.

The transformations are applied sequentially within the `draw()` loop, which runs repeatedly, creating the animation.

## Code

![Code](https://i.imgur.com/dVEqL0d.png)

## Result

![Animation in Processing](https://i.imgur.com/vunil1F.gif)
