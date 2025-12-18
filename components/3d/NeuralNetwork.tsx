'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface NodeData {
  position: THREE.Vector3;
  basePosition: THREE.Vector3;
  velocity: THREE.Vector3;
  phase: number;
  helixAngle: number;
  layer: number;
  index: number;
}

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef<THREE.InstancedMesh>(null);
  const mousePos = useRef(new THREE.Vector3());
  const prevMousePos = useRef(new THREE.Vector3());
  const mouseVelocity = useRef(new THREE.Vector3());
  const { pointer, viewport } = useThree();

  // Generate DNA helix-inspired neural network structure
  const { nodes, connections, nodeCount } = useMemo(() => {
    const nodes: NodeData[] = [];
    const connections: { start: number; end: number }[] = [];

    // Create a double helix structure
    const totalNodes = 60;
    const helixRadius = 4;
    const helixHeight = 12;
    const turns = 3;

    for (let i = 0; i < totalNodes; i++) {
      const t = i / totalNodes;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * helixHeight;

      // First strand of helix
      const x1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;

      nodes.push({
        position: new THREE.Vector3(x1, y, z1),
        basePosition: new THREE.Vector3(x1, y, z1),
        velocity: new THREE.Vector3(),
        phase: Math.random() * Math.PI * 2,
        helixAngle: angle,
        layer: Math.floor(t * 5),
        index: nodes.length
      });

      // Second strand of helix (offset by PI)
      const x2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;

      nodes.push({
        position: new THREE.Vector3(x2, y, z2),
        basePosition: new THREE.Vector3(x2, y, z2),
        velocity: new THREE.Vector3(),
        phase: Math.random() * Math.PI * 2,
        helixAngle: angle + Math.PI,
        layer: Math.floor(t * 5),
        index: nodes.length
      });

      // Connect the two strands (rungs of the helix)
      if (i % 3 === 0) {
        connections.push({ start: nodes.length - 2, end: nodes.length - 1 });
      }

      // Connect along each strand
      if (i > 0) {
        connections.push({ start: nodes.length - 4, end: nodes.length - 2 });
        connections.push({ start: nodes.length - 3, end: nodes.length - 1 });
      }
    }

    // Add some random cross-connections for neural network feel
    for (let i = 0; i < 30; i++) {
      const start = Math.floor(Math.random() * nodes.length);
      const end = Math.floor(Math.random() * nodes.length);
      if (Math.abs(start - end) > 2 && Math.abs(start - end) < 20) {
        connections.push({ start, end });
      }
    }

    return { nodes, connections, nodeCount: nodes.length };
  }, []);

  // Create line geometry
  const lineGeometry = useMemo(() => {
    const positions = new Float32Array(connections.length * 6);
    connections.forEach((conn, i) => {
      const start = nodes[conn.start].basePosition;
      const end = nodes[conn.end].basePosition;
      positions[i * 6] = start.x;
      positions[i * 6 + 1] = start.y;
      positions[i * 6 + 2] = start.z;
      positions[i * 6 + 3] = end.x;
      positions[i * 6 + 4] = end.y;
      positions[i * 6 + 5] = end.z;
    });
    return positions;
  }, [connections, nodes]);

  // Animation with new motion effects
  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Update mouse position and calculate velocity
    prevMousePos.current.copy(mousePos.current);
    mousePos.current.set(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );
    mouseVelocity.current.subVectors(mousePos.current, prevMousePos.current);

    // Rotate entire structure
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }

    if (nodesRef.current && linesRef.current) {
      const dummy = new THREE.Object3D();
      const linePositions = linesRef.current.geometry.attributes.position?.array as Float32Array;

      nodes.forEach((node, i) => {
        // DNA Helix rotation effect - nodes spiral along the helix
        const helixTime = time * 0.5 + node.phase;
        const dynamicAngle = node.helixAngle + helixTime;
        const radiusVariation = 4 + Math.sin(time * 2 + node.phase) * 0.5;

        // Calculate new helix position
        const helixX = Math.cos(dynamicAngle) * radiusVariation;
        const helixZ = Math.sin(dynamicAngle) * radiusVariation;
        const helixY = node.basePosition.y + Math.sin(time * 1.5 + i * 0.1) * 0.3;

        // Ripple effect from cursor
        const dx = mousePos.current.x - node.position.x;
        const dy = mousePos.current.y - node.position.y;
        const distToCursor = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 6;

        let repelX = 0, repelY = 0, repelZ = 0;

        // Repulsion effect - nodes push away from cursor
        if (distToCursor < repulsionRadius && distToCursor > 0.1) {
          const repelForce = (1 - distToCursor / repulsionRadius) * 2;
          const angle = Math.atan2(dy, dx);
          repelX = -Math.cos(angle) * repelForce;
          repelY = -Math.sin(angle) * repelForce;
          repelZ = Math.sin(time * 5 + i) * repelForce * 0.5;
        }

        // Wave propagation effect
        const waveSpeed = 3;
        const waveAmplitude = 0.4;
        const distanceWave = Math.sin(distToCursor * 0.5 - time * waveSpeed) * waveAmplitude;

        // Floating/levitation effect
        const floatY = Math.sin(time * 2 + node.phase * 2) * 0.2;
        const floatX = Math.cos(time * 1.5 + node.phase) * 0.1;

        // Combine all effects
        node.velocity.x += (helixX + repelX + floatX - node.position.x) * 0.08;
        node.velocity.y += (helixY + repelY + floatY + distanceWave - node.position.y) * 0.08;
        node.velocity.z += (helixZ + repelZ - node.position.z) * 0.08;

        // Apply damping
        node.velocity.multiplyScalar(0.9);
        node.position.add(node.velocity);

        dummy.position.copy(node.position);

        // Pulsing scale based on multiple factors
        const proximityPulse = distToCursor < repulsionRadius
          ? 1 + (1 - distToCursor / repulsionRadius) * 0.6
          : 1;
        const breathPulse = 1 + Math.sin(time * 3 + node.phase) * 0.15;
        const electricPulse = Math.random() > 0.995 ? 1.8 : 1; // Random electric flash

        dummy.scale.setScalar(0.1 * proximityPulse * breathPulse * electricPulse);

        dummy.updateMatrix();
        nodesRef.current!.setMatrixAt(i, dummy.matrix);
      });

      // Update line positions to follow nodes
      if (linePositions) {
        connections.forEach((conn, i) => {
          const start = nodes[conn.start].position;
          const end = nodes[conn.end].position;
          linePositions[i * 6] = start.x;
          linePositions[i * 6 + 1] = start.y;
          linePositions[i * 6 + 2] = start.z;
          linePositions[i * 6 + 3] = end.x;
          linePositions[i * 6 + 4] = end.y;
          linePositions[i * 6 + 5] = end.z;
        });
        linesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      nodesRef.current.instanceMatrix.needsUpdate = true;
    }

    // Animate glow spheres
    if (glowRef.current) {
      const glowDummy = new THREE.Object3D();
      nodes.slice(0, 20).forEach((node, i) => {
        glowDummy.position.copy(node.position);
        const glowPulse = 1 + Math.sin(time * 4 + i * 0.5) * 0.3;
        glowDummy.scale.setScalar(0.25 * glowPulse);
        glowDummy.updateMatrix();
        glowRef.current!.setMatrixAt(i, glowDummy.matrix);
      });
      glowRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Neural Network Nodes - Primary color */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={1}
          transparent
          opacity={0.95}
        />
      </instancedMesh>

      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length * 2}
            array={lineGeometry}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.25}
        />
      </lineSegments>

      {/* Glow effect spheres - Secondary color */}
      <instancedMesh ref={glowRef} args={[undefined, undefined, 20]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
        />
      </instancedMesh>
    </group>
  );
}
