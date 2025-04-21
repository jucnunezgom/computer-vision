# Unity - 3D Transformations

This Unity project demonstrates transformations applied to a 3D object.

## Overview

The scene contains a single 3D object that has the following transformations applied to it via a C# script:

- **Random Translation:** The object moves randomly along either the X or Y axis at set time intervals.
- **Constant Rotation:** The object continuously rotates around its Y-axis.
- **Oscillating Scale:** The object's size smoothly changes over time, creating a pulsing effect.

## Project Contents

- `Assets/Scenes/SampleScene.unity`: The main scene of the project.
- `Assets/transformations.cs`: The C# script containing the logic for the random translation, constant rotation, and oscillating scale of the object.

## How to Use

1. Create a new 3D project in Unity.
2. Copy the **Assets** and **ProjectSettings** folders from this repository into your project.
3. In Unity, run the scene by clicking the "Play" button in the top toolbar.
4. Observe the animated object in the "Scene" view.
5. Select the animated object in the "Hierarchy" window to view and modify the animation parameters (Translation Interval, Translation Distance, Rotation Speed, Scale Amplitude, and Scale Frequency) in the "Inspector" window while the application is running.

## Result

![Animation in Unity](https://i.imgur.com/ofdirLT.gif)

## Code

![Code](https://i.imgur.com/xmtZO4S.png)
