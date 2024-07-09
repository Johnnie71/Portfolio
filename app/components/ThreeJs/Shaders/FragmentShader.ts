const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;

  // Define the three colors
  vec3 colorPrimary = vec3(0.925, 0.616, 0.180);  // #ec9d2e
  vec3 colorSecondary = vec3(0.765, 0.757, 0.275);  // #c3c146
  vec3 colorTernary = vec3(0.933, 0.063, 0.063);  // #ee1010

  // Calculate the radial gradient
  float radius = length(vUv - 0.5) * 2.0;
  vec3 color;

  if (radius < 0.5) {
    // Transition from colorPrimary to colorSecondary
    color = mix(colorPrimary, colorSecondary, radius * 2.0);  // 0.0 to 1.0 range
  } else {
    // Transition from colorSecondary to colorTernary
    color = mix(colorSecondary, colorTernary, (radius - 0.5) * 2.0);  // 0.0 to 1.0 range
  }

  // Apply distortion
  color *= (1.0 - distort);

  // Set the final fragment color
  gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
