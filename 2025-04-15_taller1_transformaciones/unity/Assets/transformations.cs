using UnityEngine;
using Random = UnityEngine.Random;

public class TransformationsIn3D : MonoBehaviour
{
    // How often to randomly move (in seconds)
    public float translationInterval = 0.5f;

    // How far it can randomly move
    public float translationDistance = 0.2f;

    // How fast it spins around (degrees per second)
    public float rotationSpeed = 100f;

    // How much the scale goes up and down
    public float scaleAmplitude = 0.5f;

    // How fast the scale goes up and down
    public float scaleFrequency = 1f;

    // Keeps track of time since the last move
    private float timeElapsed = 0f;

    // Runs every frame
    void Update()
    {
        // --- Random Movement ---
        // Keep track of time
        timeElapsed += Time.deltaTime;

        // Time to move?
        if (timeElapsed >= translationInterval)
        {
            // Reset the timer
            timeElapsed = 0f;

            // Pick X or Y to move on
            bool translateOnX = Random.value > 0.5f;

            // How much to move on X
            float translationX = translateOnX ? Random.Range(-translationDistance, translationDistance) : 0f;

            // How much to move on Y
            float translationY = !translateOnX ? Random.Range(-translationDistance, translationDistance) : 0f;

            // Move it!
            transform.Translate(translationX, translationY, 0f);
        }

        // --- Constant Spin ---
        // Spin it around the Y axis
        transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);

        // --- Pulsating Scale ---
        // Calculate the scale based on a wave
        float scale = 1f + scaleAmplitude * Mathf.Sin(Time.time * scaleFrequency);

        // Set the new scale
        transform.localScale = new Vector3(scale, scale, scale);
    }
}
