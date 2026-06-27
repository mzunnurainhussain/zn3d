import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.08
    ref.current.rotation.y += delta * 0.12
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.12
  })
  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.4}>
      <Icosahedron ref={ref} args={[1.75, 6]} position={[1.7, 0, -1]}>
        <MeshDistortMaterial color="#14b8a6" wireframe distort={0.26} speed={1.6} roughness={0.24} metalness={0.85} />
      </Icosahedron>
    </Float>
  )
}

function Nodes() {
  const group = useRef()
  const positions = useMemo(() => Array.from({ length: 36 }, (_, i) => {
    const phi = Math.acos(-1 + (2 * i) / 36)
    const theta = Math.sqrt(36 * Math.PI) * phi
    return [1.7 + 2.35 * Math.cos(theta) * Math.sin(phi), 2.35 * Math.sin(theta) * Math.sin(phi), -1 + 2.35 * Math.cos(phi)]
  }), [])
  useFrame((_, delta) => { if (group.current) group.current.rotation.y -= delta * 0.025 })
  return <group ref={group}>{positions.map((p, i) => <mesh key={i} position={p}><sphereGeometry args={[0.035, 8, 8]} /><meshBasicMaterial color={i % 3 === 0 ? '#67e8f9' : '#2dd4bf'} /></mesh>)}</group>
}

function ScrollCamera() {
  const { camera } = useThree()
  const target = useMemo(() => new THREE.Vector3(), [])
  useFrame((_, delta) => {
    const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    const progress = window.scrollY / max
    target.set(progress * 0.35, -progress * 1.1, 6 + progress * 0.8)
    camera.position.lerp(target, 1 - Math.exp(-2.6 * delta))
    camera.lookAt(0, -progress * 0.4, 0)
  })
  return null
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 48 }} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <ambientLight intensity={0.55} />
        <pointLight position={[6, 7, 5]} intensity={22} color="#22d3ee" />
        <pointLight position={[-5, -4, 3]} intensity={14} color="#8b5cf6" />
        <Stars radius={90} depth={40} count={1800} factor={3} saturation={0.3} fade speed={0.35} />
        <Core />
        <Nodes />
        <ScrollCamera />
      </Canvas>
    </div>
  )
}
