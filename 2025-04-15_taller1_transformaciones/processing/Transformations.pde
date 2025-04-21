void setup() {
  size(400, 400, P3D); // Set up the window for 3D
}

void draw() {
  background(200); // Gray bacnground
  fill(150, 100, 200); // Purple-ish color
  noStroke(); // No edges

  // Center everything
  translate(width / 2, height / 2, 0);

  // 1. Wavy Translation (Isolated)
  pushMatrix(); // Save the current position (center)
  float yOffset = sin(frameCount * 0.02) * 50; // Calculate the wave
  translate(0, yOffset, 0); // Move it up and down
  // We don't draw the box here, the rotation and scale will happen *relative* to this wavy position

  // 2. Rotation (Isolated relative to the wavy position)
  pushMatrix(); // Save the wavy position
  rotateY(frameCount * 0.01); // Spin it around its own Y-axis
  // Still not drawing the box yet

  // 3. Scaling (Isolated relative to the rotated and wavy position)
  pushMatrix(); // Save the rotated and wavy position
  float scaleFactor = map(sin(frameCount * 0.03), -1, 1, 0.5, 1.5); // Get the scaling factor
  scale(scaleFactor); // Scale it!

  box(80); // Finally, draw the box with all the transformations applied
  popMatrix(); // Go back to the rotation state (no scale)
  popMatrix(); // Go back to the wavy translation state (no rotation or scale)
  popMatrix(); // Go back to the original center position (no translation, rotation, or scale)
}
