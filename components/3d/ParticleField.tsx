'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  size?: number;
  spread?: number;
}

export default function ParticleField({
  count = 500,
  size = 0.02,
  spread = 20
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Random positions
      positions[i3] = (Math.random() - 0.5) * spread;
      positions[i3 + 1] = (Math.random() - 0.5) * spread;
      positions[i3 + 2] = (Math.random() - 0.5) * spread;

      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    return { positions, velocities };
  }, [count, spread]);

  // Set up geometry
  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry as THREE.BufferGeometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionAttribute = pointsRef.current.geometry.getAttribute('position');
    if (!positionAttribute) return;

    const posArray = positionAttribute.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Update positions with wave motion
      posArray[i3] += Math.sin(time + i * 0.1) * 0.002;
      posArray[i3 + 1] += Math.cos(time * 0.5 + i * 0.1) * 0.002;
      posArray[i3 + 2] += velocities[i3 + 2];

      // Wrap around boundaries
      if (Math.abs(posArray[i3]) > spread / 2) {
        posArray[i3] *= -0.9;
      }
      if (Math.abs(posArray[i3 + 1]) > spread / 2) {
        posArray[i3 + 1] *= -0.9;
      }
      if (Math.abs(posArray[i3 + 2]) > spread / 2) {
        posArray[i3 + 2] *= -0.9;
      }
    }

    positionAttribute.needsUpdate = true;

    // Rotate the entire particle system slowly
    pointsRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={size}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
