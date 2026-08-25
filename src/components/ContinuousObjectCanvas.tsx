import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ContinuousObjectCanvasProps {
  scrollProgress: number; // 0 to 1 overall
  currentSection: number; // 0 to 4
  pinnedStepProgress?: number; // 0 to 1 inside section 3
}

// Section-specific luxury color palettes
const SECTION_PALETTES = [
  // Section 0: Hero — Platinum White & Champagne Gold Stardust
  {
    primary: new THREE.Color('#f0ece1'),
    secondary: new THREE.Color('#d4af37'),
    ambient: new THREE.Color('#8a7647'),
    particleSize: 0.14,
    opacity: 0.7,
  },
  // Section 1: Philosophy — Warm Antique Gold & Amber Fluid Matrix
  {
    primary: new THREE.Color('#d4af37'),
    secondary: new THREE.Color('#e6c27a'),
    ambient: new THREE.Color('#6b5220'),
    particleSize: 0.16,
    opacity: 0.75,
  },
  // Section 2: Methodology — Brilliant Champagne & Platinum Geometry
  {
    primary: new THREE.Color('#f5eedb'),
    secondary: new THREE.Color('#d4af37'),
    ambient: new THREE.Color('#94793b'),
    particleSize: 0.18,
    opacity: 0.8,
  },
  // Section 3: Governance — Sovereign Gold & Global Network Nodes
  {
    primary: new THREE.Color('#e0c57e'),
    secondary: new THREE.Color('#ffffff'),
    ambient: new THREE.Color('#785f26'),
    particleSize: 0.15,
    opacity: 0.75,
  },
  // Section 4: Advisory & CTA — Radiant Golden Embers & Ascension
  {
    primary: new THREE.Color('#ffd670'),
    secondary: new THREE.Color('#d4af37'),
    ambient: new THREE.Color('#b3862b'),
    particleSize: 0.17,
    opacity: 0.85,
  },
];

export const ContinuousObjectCanvas = ({
  scrollProgress,
  currentSection,
  pinnedStepProgress = 0,
}: ContinuousObjectCanvasProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // References for multi-section 3D luxury objects
  const particlesRef = useRef<THREE.Points | null>(null);
  const ambientParticlesRef = useRef<THREE.Points | null>(null);
  const networkLinesRef = useRef<THREE.LineSegments | null>(null);
  const animFrameId = useRef<number | null>(null);

  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  const stateRef = useRef<{
    scrollProgress: number;
    currentSection: number;
    pinnedStepProgress: number;
    interpolatedSection: number;
  }>({
    scrollProgress,
    currentSection,
    pinnedStepProgress,
    interpolatedSection: currentSection,
  });

  useEffect(() => {
    stateRef.current.scrollProgress = scrollProgress;
    stateRef.current.currentSection = currentSection;
    stateRef.current.pinnedStepProgress = pinnedStepProgress;
  }, [scrollProgress, currentSection, pinnedStepProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 3. Crisp Luxury Dot Texture Generator
    const createLuxuryDotTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // High quality multi-stop radial glow
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.18, 'rgba(255, 255, 255, 0.95)');
        gradient.addColorStop(0.42, 'rgba(255, 245, 220, 0.5)');
        gradient.addColorStop(0.7, 'rgba(212, 175, 55, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(64, 64, 64, 0, Math.PI * 2);
        ctx.fill();
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      return texture;
    };

    const dotTexture = createLuxuryDotTexture();

    // 4. Primary Morphing 3D Luxury System (320 refined points)
    const particleCount = 320;
    const geometry = new THREE.BufferGeometry();
    
    // Positions array (dynamic)
    const currentPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const alphas = new Float32Array(particleCount);

    // Multi-Section Formations Precalculated
    // Forma 0: Hero Floating Cosmic Halo / Depth Cloud
    const formHero = new Float32Array(particleCount * 3);
    // Forma 1: Philosophy 3D Wave Matrix
    const formPhilosophy = new Float32Array(particleCount * 3);
    // Forma 2: Methodology 4-Pillar Geometric Helix / Crystal Polyhedron
    const formMethodology = new Float32Array(particleCount * 3);
    // Forma 3: Governance 3D Global Nexus Lattice
    const formGovernance = new Float32Array(particleCount * 3);
    // Forma 4: Advisory Ascending Luxury Flare / Column
    const formAdvisory = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const u = i / particleCount;

      // --- Hero Formation: Subtle dispersed ellipse with depth ---
      const angleHero = u * Math.PI * 2 * 3;
      const rHero = 2.5 + Math.sin(i * 13) * 1.8;
      formHero[idx] = Math.cos(angleHero) * rHero * 1.4;
      formHero[idx + 1] = Math.sin(angleHero) * (rHero * 0.7) + (Math.random() - 0.5) * 1.2;
      formHero[idx + 2] = Math.sin(i * 7) * 3.5;

      // --- Philosophy Formation: Undulating 3D Ribbon / Wave Matrix ---
      const gridX = ((i % 20) / 19 - 0.5) * 12;
      const gridY = (Math.floor(i / 20) / 15 - 0.5) * 8;
      formPhilosophy[idx] = gridX;
      formPhilosophy[idx + 1] = gridY + Math.sin(gridX * 0.6) * 0.8;
      formPhilosophy[idx + 2] = Math.cos(gridX * 0.8 + gridY * 0.5) * 2.5;

      // --- Methodology Formation: 4-Core Hexagonal Double Helix & Pillar Nodes ---
      const strand = i % 4; // 4 pillars
      const t = Math.floor(i / 4) / 80;
      const pillarAngle = (strand * Math.PI) / 2 + t * Math.PI * 4;
      const pillarRadius = 2.4 + Math.sin(t * Math.PI * 2) * 0.6;
      formMethodology[idx] = Math.cos(pillarAngle) * pillarRadius;
      formMethodology[idx + 1] = (t - 0.5) * 8.5;
      formMethodology[idx + 2] = Math.sin(pillarAngle) * pillarRadius;

      // --- Governance Formation: Interconnected Global Sphere Lattice Nodes ---
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const rGov = 3.2 + (i % 5 === 0 ? 0.4 : 0);
      formGovernance[idx] = rGov * Math.cos(theta) * Math.sin(phi);
      formGovernance[idx + 1] = rGov * Math.sin(theta) * Math.sin(phi);
      formGovernance[idx + 2] = rGov * Math.cos(phi);

      // --- Advisory Formation: Convergent Light Pillar / Embers Vortex ---
      const radAdv = Math.pow(Math.random(), 0.5) * 3.8;
      const angleAdv = Math.random() * Math.PI * 2;
      formAdvisory[idx] = Math.cos(angleAdv) * radAdv * (1 - u * 0.5);
      formAdvisory[idx + 1] = (u - 0.5) * 9.0;
      formAdvisory[idx + 2] = Math.sin(angleAdv) * radAdv * (1 - u * 0.5);

      // Initial positions = Hero
      currentPositions[idx] = formHero[idx];
      currentPositions[idx + 1] = formHero[idx + 1];
      currentPositions[idx + 2] = formHero[idx + 2];

      colors[idx] = 1;
      colors[idx + 1] = 0.95;
      colors[idx + 2] = 0.85;

      alphas[i] = 0.8;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      map: dotTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // 5. Subtle Interconnecting 3D Vectors for Governance (Section 3)
    const lineCount = 120;
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 2 * 3);
    const lineColors = new Float32Array(lineCount * 2 * 3);

    for (let l = 0; l < lineCount; l++) {
      const idx1 = Math.floor(Math.random() * particleCount) * 3;
      const idx2 = Math.floor(Math.random() * particleCount) * 3;
      
      linePositions[l * 6] = formGovernance[idx1];
      linePositions[l * 6 + 1] = formGovernance[idx1 + 1];
      linePositions[l * 6 + 2] = formGovernance[idx1 + 2];
      
      linePositions[l * 6 + 3] = formGovernance[idx2];
      linePositions[l * 6 + 4] = formGovernance[idx2 + 1];
      linePositions[l * 6 + 5] = formGovernance[idx2 + 2];

      for (let c = 0; c < 6; c += 3) {
        lineColors[l * 6 + c] = 0.83; // #D4AF37 in linear RGB
        lineColors[l * 6 + c + 1] = 0.68;
        lineColors[l * 6 + c + 2] = 0.22;
      }
    }

    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0, // Fades in only during Section 3 Governance
      blending: THREE.AdditiveBlending,
    });

    const networkLines = new THREE.LineSegments(lineGeo, lineMaterial);
    scene.add(networkLines);
    networkLinesRef.current = networkLines;

    // 6. Deep Ambient Micro Dust (160 ultra-fine ambient points)
    const ambientCount = 160;
    const ambientGeo = new THREE.BufferGeometry();
    const ambientPos = new Float32Array(ambientCount * 3);

    for (let a = 0; a < ambientCount; a++) {
      ambientPos[a * 3] = (Math.random() - 0.5) * 26;
      ambientPos[a * 3 + 1] = (Math.random() - 0.5) * 18;
      ambientPos[a * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    }

    ambientGeo.setAttribute('position', new THREE.BufferAttribute(ambientPos, 3));

    const ambientMat = new THREE.PointsMaterial({
      size: 0.08,
      map: dotTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xe6d5aa,
    });

    const ambientPoints = new THREE.Points(ambientGeo, ambientMat);
    scene.add(ambientPoints);
    ambientParticlesRef.current = ambientPoints;

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 0.6;
      mouseRef.current.targetY = y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      cameraRef.current.aspect = newW / newH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Dynamic Color Interpolation Helper
    const lerpedPrimary = new THREE.Color();
    const lerpedSecondary = new THREE.Color();

    // 7. Master Render & Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const { scrollProgress: sp, currentSection: cs, pinnedStepProgress: psp } = stateRef.current;

      // Smooth section interpolation for seamless transition between pages
      stateRef.current.interpolatedSection = THREE.MathUtils.lerp(
        stateRef.current.interpolatedSection,
        cs,
        0.05
      );
      const is = stateRef.current.interpolatedSection;

      // Mouse Parallax Lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      // Calculate Target Colors based on interpolated section
      const secLow = Math.floor(THREE.MathUtils.clamp(is, 0, 4));
      const secHigh = Math.min(secLow + 1, 4);
      const secFactor = THREE.MathUtils.clamp(is - secLow, 0, 1);

      const palLow = SECTION_PALETTES[secLow];
      const palHigh = SECTION_PALETTES[secHigh];

      lerpedPrimary.copy(palLow.primary).lerp(palHigh.primary, secFactor);
      lerpedSecondary.copy(palLow.secondary).lerp(palHigh.secondary, secFactor);

      const targetPointSize = THREE.MathUtils.lerp(palLow.particleSize, palHigh.particleSize, secFactor);
      const targetOpacity = THREE.MathUtils.lerp(palLow.opacity, palHigh.opacity, secFactor);

      if (material) {
        material.size = THREE.MathUtils.lerp(material.size, targetPointSize, 0.05);
        material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, 0.05);
      }

      // Camera Movement
      if (cameraRef.current) {
        // Section specific camera position
        let camTargetZ = 10;
        let camTargetY = 0;

        if (cs === 0) {
          camTargetZ = 9.5;
          camTargetY = 0;
        } else if (cs === 1) {
          camTargetZ = 10.5;
          camTargetY = 0.5;
        } else if (cs === 2) {
          camTargetZ = 8.5 + psp * 1.5;
          camTargetY = (psp - 0.5) * 1.5;
        } else if (cs === 3) {
          camTargetZ = 9.8;
          camTargetY = -0.3;
        } else if (cs === 4) {
          camTargetZ = 11.0;
          camTargetY = 1.0;
        }

        cameraRef.current.position.x = THREE.MathUtils.lerp(
          cameraRef.current.position.x,
          mouseRef.current.x * 1.2,
          0.04
        );
        cameraRef.current.position.y = THREE.MathUtils.lerp(
          cameraRef.current.position.y,
          camTargetY + mouseRef.current.y * 1.2,
          0.04
        );
        cameraRef.current.position.z = THREE.MathUtils.lerp(
          cameraRef.current.position.z,
          camTargetZ,
          0.04
        );
        cameraRef.current.lookAt(0, 0, 0);
      }

      // Compute Active Formations Interpolation
      // Form 0 (Hero) -> Form 1 (Philosophy) -> Form 2 (Methodology) -> Form 3 (Governance) -> Form 4 (Advisory)
      const forms = [formHero, formPhilosophy, formMethodology, formGovernance, formAdvisory];
      const formA = forms[secLow];
      const formB = forms[secHigh];

      if (particlesRef.current) {
        const posAttr = particlesRef.current.geometry.attributes.position;
        const colAttr = particlesRef.current.geometry.attributes.color;
        const positions = posAttr.array as Float32Array;
        const cols = colAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;

          // Base positions blended between Section Formations
          const baseAx = formA[idx];
          const baseAy = formA[idx + 1];
          const baseAz = formA[idx + 2];

          const baseBx = formB[idx];
          const baseBy = formB[idx + 1];
          const baseBz = formB[idx + 2];

          let targetX = THREE.MathUtils.lerp(baseAx, baseBx, secFactor);
          let targetY = THREE.MathUtils.lerp(baseAy, baseBy, secFactor);
          let targetZ = THREE.MathUtils.lerp(baseAz, baseBz, secFactor);

          // Subtle organic mathematical wave oscillation per section type
          if (cs === 0) {
            // Hero: Soft gentle drifting stardust
            targetX += Math.sin(elapsed * 0.4 + i) * 0.25;
            targetY += Math.cos(elapsed * 0.35 + i * 0.8) * 0.25;
            targetZ += Math.sin(elapsed * 0.25 + i * 1.2) * 0.2;
          } else if (cs === 1) {
            // Philosophy: Harmonic golden wave
            targetY += Math.sin(targetX * 0.8 + elapsed * 1.2) * 0.4;
            targetZ += Math.cos(targetY * 0.6 + elapsed * 0.9) * 0.4;
          } else if (cs === 2) {
            // Methodology: Rotational helix dynamics guided by pinned step
            const rotAngle = elapsed * 0.3 + psp * Math.PI * 2;
            const curR = Math.hypot(targetX, targetZ);
            const curTheta = Math.atan2(targetZ, targetX) + rotAngle;
            targetX = Math.cos(curTheta) * curR;
            targetZ = Math.sin(curTheta) * curR;
          } else if (cs === 3) {
            // Governance: Global pulsating constellation
            const pulse = 1 + Math.sin(elapsed * 0.8 + (i % 7)) * 0.06;
            targetX *= pulse;
            targetY *= pulse;
            targetZ *= pulse;
          } else if (cs === 4) {
            // Advisory: Gentle upward rising embers
            targetY += (elapsed * 0.4 + (i * 0.05)) % 6 - 3;
            targetX += Math.sin(elapsed * 0.6 + i) * 0.15;
          }

          // Smooth position interpolation
          positions[idx] = THREE.MathUtils.lerp(positions[idx], targetX, 0.06);
          positions[idx + 1] = THREE.MathUtils.lerp(positions[idx + 1], targetY, 0.06);
          positions[idx + 2] = THREE.MathUtils.lerp(positions[idx + 2], targetZ, 0.06);

          // Per-particle luxury color blend (Primary <-> Secondary shimmer)
          const shimmer = (Math.sin(elapsed * 1.5 + i * 0.5) + 1) * 0.5;
          const pCol = (i % 3 === 0) ? lerpedSecondary : lerpedPrimary;

          cols[idx] = THREE.MathUtils.lerp(cols[idx], pCol.r * (0.85 + shimmer * 0.25), 0.08);
          cols[idx + 1] = THREE.MathUtils.lerp(cols[idx + 1], pCol.g * (0.85 + shimmer * 0.25), 0.08);
          cols[idx + 2] = THREE.MathUtils.lerp(cols[idx + 2], pCol.b * (0.85 + shimmer * 0.25), 0.08);
        }

        posAttr.needsUpdate = true;
        colAttr.needsUpdate = true;

        // Smooth rotation of whole assembly
        particlesRef.current.rotation.y = elapsed * 0.02 + sp * 0.5;
        particlesRef.current.rotation.x = Math.sin(elapsed * 0.015) * 0.04;
      }

      // Governance lines visibility & sync (fade in gracefully during section 3)
      if (networkLinesRef.current) {
        const govWeight = THREE.MathUtils.clamp(1 - Math.abs(is - 3), 0, 1);
        (networkLinesRef.current.material as THREE.LineBasicMaterial).opacity = govWeight * 0.22;
        networkLinesRef.current.rotation.y = particlesRef.current?.rotation.y || 0;
        networkLinesRef.current.rotation.x = particlesRef.current?.rotation.x || 0;
      }

      // Ambient micro-particles gentle rotation
      if (ambientParticlesRef.current) {
        ambientParticlesRef.current.rotation.y = -elapsed * 0.01;
        ambientParticlesRef.current.rotation.x = Math.cos(elapsed * 0.01) * 0.02;
        (ambientParticlesRef.current.material as THREE.PointsMaterial).color = lerpedPrimary;
      }

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      if (rendererRef.current && rendererRef.current.domElement && container) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      dotTexture.dispose();
      geometry.dispose();
      material.dispose();
      lineGeo.dispose();
      lineMaterial.dispose();
      ambientGeo.dispose();
      ambientMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="continuous-luxury-3d-stage"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden transition-opacity duration-1000 opacity-90"
    />
  );
};
