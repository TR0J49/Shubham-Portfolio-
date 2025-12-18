'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import NeuralNetwork from './NeuralNetwork';
import ParticleField from './ParticleField';

interface SceneProps {
  className?: string;
}

export default function Scene({ className = '' }: SceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={60} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#00ffff"
        />

        {/* Background color */}
        <color attach="background" args={['#0a0a0f']} />

        {/* Fog for depth */}
        <fog attach="fog" args={['#0a0a0f', 10, 30]} />

        <Suspense fallback={null}>
          {/* Neural Network */}
          <NeuralNetwork />

          {/* Particle Field */}
          <ParticleField count={300} size={0.03} spread={25} />
        </Suspense>

        {/* Subtle orbit controls for interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
