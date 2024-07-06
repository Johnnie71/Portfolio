const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

vec3 hslToRgb(float h, float s, float l) {
  float c = (1.0 - abs(2.0 * l - 1.0)) * s;
  float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
  float m = l - c * 0.5;

  vec3 rgb;

  if (h < 1.0 / 6.0) {
    rgb = vec3(c, x, 0.0);
  } else if (h < 2.0 / 6.0) {
    rgb = vec3(x, c, 0.0);
  } else if (h < 3.0 / 6.0) {
    rgb = vec3(0.0, c, x);
  } else if (h < 4.0 / 6.0) {
    rgb = vec3(0.0, x, c);
  } else if (h < 5.0 / 6.0) {
    rgb = vec3(x, 0.0, c);
  } else {
    rgb = vec3(c, 0.0, x);
  }

  return rgb + vec3(m, m, m);
}

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;

  // Calculate the transition parameter
  float t = mod(u_time * 0.1, 1.0);

  // Define sets of 3 colors
  vec3 set1Color1 = vec3(1.0, 0.5, 0.0);  // Orange
  vec3 set1Color2 = vec3(1.0, 0.0, 0.0);  // Red
  vec3 set1Color3 = vec3(1.0, 1.0, 0.0);  // Yellow

  vec3 set2Color1 = vec3(0.0, 0.5, 1.0);  // Light Blue
  vec3 set2Color2 = vec3(0.0, 1.0, 0.0);  // Green
  vec3 set2Color3 = vec3(1.0, 0.0, 1.0);  // Magenta

  vec3 set3Color1 = vec3(1.0, 0.5, 1.0);  // Light Purple
  vec3 set3Color2 = vec3(0.0, 1.0, 1.0);  // Cyan
  vec3 set3Color3 = vec3(1.0, 1.0, 1.0);  // White

  // Interpolate between the sets of colors
  vec3 colorA, colorB, colorC;

  if (t < 0.33) {
    colorA = mix(set1Color1, set2Color1, t / 0.33);
    colorB = mix(set1Color2, set2Color2, t / 0.33);
    colorC = mix(set1Color3, set2Color3, t / 0.33);
  } else if (t < 0.66) {
    t = (t - 0.33) / 0.33;
    colorA = mix(set2Color1, set3Color1, t);
    colorB = mix(set2Color2, set3Color2, t);
    colorC = mix(set2Color3, set3Color3, t);
  } else {
    t = (t - 0.66) / 0.33;
    colorA = mix(set3Color1, set1Color1, t);
    colorB = mix(set3Color2, set1Color2, t);
    colorC = mix(set3Color3, set1Color3, t);
  }

  // Calculate the radial gradient
  float radius = length(vUv - 0.5) * 2.0;
  vec3 color;

  if (radius < 0.5) {
    // Transition from colorA to colorB
    color = mix(colorA, colorB, radius * 2.0);  // 0.0 to 1.0 range
  } else {
    // Transition from colorB to colorC
    color = mix(colorB, colorC, (radius - 0.5) * 2.0);  // 0.0 to 1.0 range
  }

  // Apply distortion
  color *= (1.0 - distort);

  // Set the final fragment color
  gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;