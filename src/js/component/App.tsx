/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import {CyberTruck} from './app/CyberTruck.tsx'

export const App = () => {
  return (
    <Canvas shadows={true} camera={{position: [6, 8, 8]}}>
      <OrbitControls />

      <ambientLight intensity={1.5} />
      <directionalLight
        position={[6, 8, 8]}
        intensity={4.5}
        castShadow={true}
      />

      <mesh rotation-x={-Math.PI / 2} receiveShadow={true}>
        <circleGeometry args={[6]} />
        <meshStandardMaterial color="lime" />
      </mesh>

      <Suspense>
        <CyberTruck />
      </Suspense>
    </Canvas>
  )
}
