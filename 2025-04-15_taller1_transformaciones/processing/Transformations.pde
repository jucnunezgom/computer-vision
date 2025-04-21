void setup() {
  size(400, 400, P3D); // Make the window
}

void draw() {
  background(200); // Gray background
  fill(150, 100, 200); // Purple-ish color
  noStroke(); // No outlines

  // Let's move to the center first
  translate(width / 2, height / 2, 0);

  // Make it go up and down like a wave
  float yOffset = sin(frameCount * 0.02) * 50; // 'frameCount' goes up, 'sin()' makes it wave
  translate(0, yOffset, 0); // Move it up/down based on that wave

  // Spin it around a bit
  rotateY(frameCount * 0.01); // Rotate around the Y-axis over time

  // Let's make it pulse in size
  float scaleFactor = map(sin(frameCount * 0.03), -1, 1, 0.5, 1.5); // 'sin()' again, but we make the size go between 0.5 and 1.5
  scale(scaleFactor); // Actually change the size

  box(80); // Finally, draw the cube with the current size and position
}
