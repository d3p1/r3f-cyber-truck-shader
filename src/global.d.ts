/**
 * @description Global types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {ThreeElement} from '@react-three/fiber'
import {CyberTruckBodyMaterial} from './js/component/app/cyber-truck/BodyMaterial.tsx'

declare module '@react-three/fiber' {
  interface ThreeElements {
    cyberTruckBodyMaterial: ThreeElement<typeof CyberTruckBodyMaterial>
  }
}
