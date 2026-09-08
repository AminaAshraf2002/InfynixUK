import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * Three.js + GSAP 3D Interactive Hero Background.
 *
 * Combining WebGL 3D graphics (Three.js) with smooth motion curves (GSAP):
 * - Light White 3D Particle Field with dynamic network connection lines
 * - Rotating 3D Light White Wireframe Icosahedron & Concentric Geometric Rings
 * - GSAP-animated entry sequence, pulse timelines, and camera mouse parallax
 * - Fully SSR safe & mobile responsive
 */

export default function HeroBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    // 1. Scene, Camera, Renderer Setup
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const isMobile = width < 768;

    // 2. 3D Particles (Light White Stars & Floating Spheres)
    const particleCount = isMobile ? 50 : 100;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    const boundsX = isMobile ? 14 : 24;
    const boundsY = isMobile ? 10 : 16;
    const boundsZ = 12;

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * boundsX;
      const y = (Math.random() - 0.5) * boundsY;
      const z = (Math.random() - 0.5) * boundsZ;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.006,
        z: (Math.random() - 0.5) * 0.006,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom Canvas Texture — small crisp white dot, no glow or shadow
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(16, 16, 10, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.3 : 0.38,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0, // Animated by GSAP
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 2b. Dynamic Network Connection Lines between nearby particles
    const maxConnections = isMobile ? 60 : 150;
    const linkDistance = isMobile ? 4.5 : 5.5;
    const linePositions = new Float32Array(maxConnections * 2 * 3); // 2 vertices per line, 3 coords each
    const lineColors = new Float32Array(maxConnections * 2 * 4); // RGBA per vertex

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 4));
    lineGeometry.setDrawRange(0, 0); // Start with no lines visible

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0, // Animated by GSAP
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 3. Geometric 3D Core Wireframes (GSAP Animated Group in Light White)
    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    // Core Icosahedron Wireframe in Pure Light White
    const icoGeometry = new THREE.IcosahedronGeometry(isMobile ? 3.0 : 5.2, 2);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff, // Pure Light White
      wireframe: true,
      transparent: true,
      opacity: 0,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    heroGroup.add(icoMesh);

    // Concentric Outer Torus Ring in Pure Light White
    const torusGeometry = new THREE.TorusGeometry(isMobile ? 5.0 : 8.2, 0.03, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff, // Pure Light White
      transparent: true,
      opacity: 0,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    heroGroup.add(torusMesh);

    // Position Group in 3D Space
    heroGroup.position.x = isMobile ? 1.5 : 6.5;
    heroGroup.position.y = isMobile ? -1 : 0;
    heroGroup.position.z = -2;
    heroGroup.scale.set(0.2, 0.2, 0.2);

    // 4. GSAP Entrance Timeline & Continuous Tweens
    const ctxGSAP = gsap.context(() => {
      if (reduceMotion) {
        particleMaterial.opacity = 0.7;
        lineMaterial.opacity = 0.45;
        icoMaterial.opacity = 0.25;
        torusMaterial.opacity = 0.35;
        heroGroup.scale.set(1, 1, 1);
        return;
      }

      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(heroGroup.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2.2,
        ease: 'back.out(1.2)',
      }, 0);

      tl.to(particleMaterial, { opacity: 0.88, duration: 1.8 }, 0.2);
      tl.to(lineMaterial, { opacity: 0.55, duration: 2.0 }, 0.3);
      tl.to(icoMaterial, { opacity: 0.28, duration: 2.0 }, 0.4);
      tl.to(torusMaterial, { opacity: 0.38, duration: 2.2 }, 0.5);

      // Continuous Floating Bobbing with GSAP
      gsap.to(heroGroup.position, {
        y: '+=0.5',
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });

      // Pulse Icosahedron Wireframe
      gsap.to(icoMesh.scale, {
        x: 1.06,
        y: 1.06,
        z: 1.06,
        duration: 3.0,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });
    }, container);

    // 5. Interactive Mouse Parallax using GSAP Lerp
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouse.targetX = nx * 0.4;
      mouse.targetY = ny * 0.3;

      if (!reduceMotion) {
        gsap.to(mouse, {
          x: mouse.targetX,
          y: mouse.targetY,
          duration: 1.2,
          ease: 'power2.out',
        });
      }
    };

    if (finePointer) {
      window.addEventListener('pointermove', onPointerMove);
    }

    // 6. Render Loop
    let animationFrameId = null;
    let isVisible = true;

    const animate = () => {
      if (!reduceMotion) {
        // Drifting Particles
        const positions = particleGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += particleVelocities[i].x;
          positions[i * 3 + 1] += particleVelocities[i].y;
          positions[i * 3 + 2] += particleVelocities[i].z;

          // Boundary Wrapping
          if (Math.abs(positions[i * 3]) > boundsX) particleVelocities[i].x *= -1;
          if (Math.abs(positions[i * 3 + 1]) > boundsY) particleVelocities[i].y *= -1;
          if (Math.abs(positions[i * 3 + 2]) > boundsZ) particleVelocities[i].z *= -1;
        }
        particleGeometry.attributes.position.needsUpdate = true;

        // Update Network Connection Lines
        let lineIdx = 0;
        const lp = lineGeometry.attributes.position.array;
        const lc = lineGeometry.attributes.color.array;

        for (let i = 0; i < particleCount && lineIdx < maxConnections; i++) {
          for (let j = i + 1; j < particleCount && lineIdx < maxConnections; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < linkDistance) {
              const alpha = 1 - dist / linkDistance; // Fade with distance

              // Vertex A
              lp[lineIdx * 6] = positions[i * 3];
              lp[lineIdx * 6 + 1] = positions[i * 3 + 1];
              lp[lineIdx * 6 + 2] = positions[i * 3 + 2];
              // Vertex B
              lp[lineIdx * 6 + 3] = positions[j * 3];
              lp[lineIdx * 6 + 4] = positions[j * 3 + 1];
              lp[lineIdx * 6 + 5] = positions[j * 3 + 2];

              // RGBA for both vertices (white with distance-based alpha)
              lc[lineIdx * 8] = 1; lc[lineIdx * 8 + 1] = 1; lc[lineIdx * 8 + 2] = 1; lc[lineIdx * 8 + 3] = alpha * 0.5;
              lc[lineIdx * 8 + 4] = 1; lc[lineIdx * 8 + 5] = 1; lc[lineIdx * 8 + 6] = 1; lc[lineIdx * 8 + 7] = alpha * 0.5;

              lineIdx++;
            }
          }
        }

        lineGeometry.setDrawRange(0, lineIdx * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        // 3D Geometry Rotations
        icoMesh.rotation.x += 0.0025;
        icoMesh.rotation.y += 0.004;
        torusMesh.rotation.z += 0.003;

        // Apply Mouse Parallax to Scene Rotation
        scene.rotation.y = mouse.x * 0.45;
        scene.rotation.x = -mouse.y * 0.35;
      }

      renderer.render(scene, camera);
      if (isVisible) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Render initial frame
    renderer.render(scene, camera);
    if (!reduceMotion) {
      animationFrameId = requestAnimationFrame(animate);
    }

    // 7. Resize Observer & Intersection Observer
    const handleResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId && !reduceMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    });
    intersectionObserver.observe(container);

    // 8. Clean up
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (finePointer) window.removeEventListener('pointermove', onPointerMove);

      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      ctxGSAP.revert();

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="hero-canvas" aria-hidden="true" />;
}
