/**
 * @description Fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;

varying vec2 vUv;

void main() {
    float factor   = 40.0;
    float strength = step(0.5, mod((vUv.x * factor) + uTime, 1.0));

    gl_FragColor = vec4(0.0, 1.0, 1.0, strength);
}