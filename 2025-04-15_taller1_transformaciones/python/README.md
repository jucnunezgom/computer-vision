# Python - 2D Shape Transformation and Animation (Google Colab)

This repository contains a Python script designed to demonstrate 2D shape transformations (translation, rotation, and scaling) and animation using matrix operations within a Google Colab environment. The script visualizes these transformations on a simple square and exports the animations as GIF files.

## Overview

The Python script performs the following key steps:

1.  **Shape Creation:** Defines a function to create a 2D square using NumPy arrays.
2.  **Transformation Matrices:** Implements functions to generate 3x3 transformation matrices for:
    - **Translation:** Shifting the shape along the x and y axes.
    - **Rotation:** Rotating the shape around its origin.
    - **Scaling:** Changing the size of the shape along the x and y axes.
3.  **Point Transformation:** Provides a function to apply a given transformation matrix to a set of 2D points (representing the shape).
4.  **Single Transformation Visualization:** Demonstrates the application of individual transformations (translation, rotation, scaling) to the square, displaying the original and transformed shapes using Matplotlib.
5.  **Independent Transformation Animations:** Generates separate GIF animations for each transformation, showing the square transitioning from its original state to its transformed state over a series of frames.
6.  **Combined Transformation Animation (Example):** Includes an example of animating a combination of transformations (oscillating translation, continuous rotation, and oscillating scaling) over time.
7.  **GIF Export:** Utilizes the `imageio` library to save the generated animation frames as GIF files.

## Libraries Used

- **NumPy:** For numerical operations, especially handling matrices and arrays.
- **Matplotlib:** For creating static, interactive, and animated visualizations in Python. Used here to plot the 2D shapes and save frames for the animation.
- **imageio:** For reading and writing image data, used to create the animated GIF files.
- **IPython.display:** For displaying the generated GIF directly within the Google Colab notebook.

## How to Use

1.  **Open in Google Colab:** The script is designed to be run in a Google Colab environment. You can open the `.ipynb` file (if you saved the Colab notebook) or copy and paste the code blocks into separate cells of a new Colab notebook.
2.  **Run Cells Sequentially:** Execute the code cells in the order they are presented.
    - The initial cells define the shape creation and transformation matrix functions.
    - Subsequent cells demonstrate individual static transformations.
    - The animation cells will generate and display GIF animations for each transformation.
3.  **Observe the Output:** Matplotlib plots will display the static transformations, and the generated GIF animations will be shown in the Colab output after the animation cells are executed. The GIF files will also be saved in the Colab environment's file storage.
