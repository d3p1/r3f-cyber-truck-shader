/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import type {GLTF} from 'three-stdlib'

export type CyberTruck = GLTF & {
  nodes: {
    interior001: THREE.Mesh
    interior001_1: THREE.Mesh
    interior001_2: THREE.Mesh
    interior001_3: THREE.Mesh
    interior001_4: THREE.Mesh
    interior001_5: THREE.Mesh
    interior001_6: THREE.Mesh
    steer: THREE.Mesh
    tires001: THREE.Mesh
    tires001_1: THREE.Mesh
  }
  materials: {
    lights: THREE.MeshStandardMaterial
    body: THREE.MeshStandardMaterial
    glass: THREE.MeshStandardMaterial
    glassframes: THREE.MeshStandardMaterial
    warninglights: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    shader: THREE.MeshStandardMaterial
    gray: THREE.MeshStandardMaterial
    tires: THREE.MeshStandardMaterial
    rims: THREE.MeshStandardMaterial
  }
}
