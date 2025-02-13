uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uOpacity;

varying float vWobble;

void main() {
  float colorMix = smoothstep(-1.0, 1.0, vWobble);
  csm_DiffuseColor.rgb = mix(uColorA, uColorB, colorMix);

  // Apply opacity to the final color's alpha channel
  csm_DiffuseColor.a = uOpacity; // Set alpha based on the uOpacity uniform

  // Mirror step
  // csm_Metalness = step(0.25, vWobble);
  // csm_Roughness = 1.0 - csm_Metalness;

  // Shiny tip
  csm_Roughness = 1.0 - colorMix;
}