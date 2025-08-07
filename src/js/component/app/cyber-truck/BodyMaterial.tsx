/**
 * @description Body material for the cyber truck
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {shaderMaterial} from '@react-three/drei'
import {extend} from '@react-three/fiber'
import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

export const CyberTruckBodyMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  vertexShader,
  fragmentShader,
)

extend({CyberTruckBodyMaterial})
