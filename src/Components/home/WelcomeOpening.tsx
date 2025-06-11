import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { JSX, Suspense, useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mesh, Vector2 } from 'three';
import * as THREE from 'three';
import './WelcomeOpening.css';

// Component to load and display the 3D capsule model
function CapsuleModel({ 
  onHover, 
  onClick, 
  isTransitioning,
  cameraZoom 
}: { 
  onHover: (hovered: boolean) => void;
  onClick: () => void;
  isTransitioning: boolean;
  cameraZoom: number;
}) {
  const { scene } = useGLTF('/assets/glb/plant.glb');
  const meshRef = useRef<Mesh>(null);
  const { camera, raycaster } = useThree();  const [hovered, setHovered] = useState(false);
  const [meshOpacity, setMeshOpacity] = useState(0); // For smooth fade transitions
  const [originalMaterials, setOriginalMaterials] = useState<Map<Mesh, any>>(new Map());

  // Clone the scene to avoid modifying the original - memoize to prevent re-creation
  const clonedScene = useMemo(() => scene.clone(), [scene]);  // Store original materials and apply simple material switching
  useEffect(() => {
    const materialsMap = new Map();
    
    clonedScene.traverse((child) => {
      if (child instanceof Mesh && child.material) {
        materialsMap.set(child, child.material.clone());
      }
    });
    
    setOriginalMaterials(materialsMap);
  }, [clonedScene]);
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  // Smooth fade transition for mesh opacity
  useEffect(() => {
    const targetOpacity = hovered ? 1 : 0;
    const duration = 400; // 400ms transition
    const startTime = Date.now();
    const startOpacity = meshOpacity;
    
    const animateOpacity = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function
      const easeProgress = progress * progress * (3 - 2 * progress);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * easeProgress;
      
      setMeshOpacity(currentOpacity);
      
      if (progress < 1) {
        requestAnimationFrame(animateOpacity);
      }
    };
    
    animateOpacity();
  }, [hovered, meshOpacity]);  // Simple material switching: wireframe by default, mesh on hover, fade on click
  useEffect(() => {
    if (originalMaterials.size === 0) return;
    
    // Throttle material updates to reduce performance impact
    let isUpdating = false;
    
    const updateMaterials = () => {
      if (isUpdating) return;
      isUpdating = true;
      
      requestAnimationFrame(() => {
        clonedScene.traverse((child) => {
          if (child instanceof Mesh) {
            const originalMaterial = originalMaterials.get(child);
            if (!originalMaterial) return;
            
            if (isTransitioning) {
              // Fade out during transition
              const material = meshOpacity > 0.5 ? originalMaterial.clone() : new THREE.MeshBasicMaterial({
                wireframe: true,
                color: 0x4ade80,
                transparent: true,
                opacity: 0.8
              });
              material.transparent = true;
              material.opacity = Math.max(0, 1 - cameraZoom);
              child.material = material;            } else {
              // Blend between wireframe and mesh based on meshOpacity
              if (meshOpacity >= 0.95) {
                // Full mesh - clean transition
                const material = originalMaterial.clone();
                material.transparent = true;
                material.opacity = 1;
                child.material = material;
              } else if (meshOpacity > 0) {
                // Transitioning: fade in mesh while fading out wireframe
                const material = originalMaterial.clone();
                material.transparent = true;
                material.opacity = meshOpacity;
                child.material = material;
              } else {
                // Default wireframe
                child.material = new THREE.MeshBasicMaterial({
                  wireframe: true,
                  color: 0x4ade80,
                  transparent: true,
                  opacity: 0.8
                });
              }
            }
          }
        });
        isUpdating = false;
      });
    };
      updateMaterials();
  }, [meshOpacity, isTransitioning, cameraZoom, clonedScene, originalMaterials]);

  const handlePointerMove = useCallback((event: any) => {
    // Simple hover detection - use Three.js event system
    let mouse: Vector2;
    
    // Three.js provides normalized device coordinates directly
    if (event.point) {
      // Use Three.js intersection data if available
      const isHovered = true; // If we have a point, we're intersecting
      setHovered(isHovered);
      onHover(isHovered);
      return;
    }
    
    // Fallback for manual coordinate calculation
    if (event.clientX !== undefined && event.clientY !== undefined) {
      // Safely get canvas element
      let canvas: HTMLCanvasElement | null = null;
      
      if (event.target && typeof event.target.closest === 'function') {
        canvas = event.target.closest('canvas');
      }
      
      if (!canvas) {
        canvas = document.querySelector('canvas');
      }
      
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        mouse = new Vector2(
          ((event.clientX - rect.left) / rect.width) * 2 - 1,
          -((event.clientY - rect.top) / rect.height) * 2 + 1
        );
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(clonedScene, true);

        const isHovered = intersects.length > 0;
        setHovered(isHovered);
        onHover(isHovered);
      }
    }
  }, [camera, raycaster, clonedScene, onHover]);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    onHover(false);
  }, [onHover]);

  const handleClick = useCallback(() => {
    if (hovered) {
      onClick();
    }
  }, [hovered, onClick]);
  return (
    <primitive 
      ref={meshRef}
      object={clonedScene} 
      scale={[3, 3, 3]} 
      position={[0, 0, 0]}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
}

// Video transition component
function VideoTransition({ 
  isVisible, 
  onVideoEnd 
}: { 
  isVisible: boolean;
  onVideoEnd: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
        const timer = setTimeout(() => {
        onVideoEnd();
      }, 6000); // 6 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onVideoEnd]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/assets/vids/forest.mov"
        muted
        playsInline
      />
    </div>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
    </div>
  );
}

export default function WelcomeOpening(): JSX.Element {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cameraZoom, setCameraZoom] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = useCallback((hovered: boolean) => {
    setIsHovering(hovered);
  }, []);
  const handleClick = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Start video immediately
    setShowVideo(true);
    
    // Then quickly fade out the GLB model
    let progress = 0;
    const fadeOutDuration = 800; // 0.8 seconds quick fade
    const startTime = Date.now();
    
    const animateFadeOut = () => {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / fadeOutDuration, 1);
      
      // Smooth easing function for fade out
      const easeProgress = progress * progress * (3 - 2 * progress);
      setCameraZoom(easeProgress); // Use cameraZoom as fade progress
      
      if (progress < 1) {
        requestAnimationFrame(animateFadeOut);
      }
    };
    
    animateFadeOut();
  }, [isTransitioning]);

  const handleVideoEnd = useCallback(() => {
    setShowVideo(false);
    navigate('/home');
  }, [navigate]);
  return (
    <div className={`welcome-opening ${isTransitioning ? 'transitioning' : ''} ${isHovering ? 'hovering' : ''}`}>
      {/* 3D Model */}
      <Suspense fallback={<LoadingFallback />}>
        <Canvas camera={{ position: [0, 3, 5.5], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#4ade80" intensity={0.5} />            <CapsuleModel 
            onHover={handleHover}
            onClick={handleClick}
            isTransitioning={isTransitioning}
            cameraZoom={cameraZoom}
          />          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={!isTransitioning}
            autoRotateSpeed={2}
            enableDamping={true}
            dampingFactor={0.1}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            enableRotate={!isTransitioning}
            rotateSpeed={0.5}
            target={[0, 0, 0]}
          />
          
          <Environment preset="forest" />
        </Canvas>
      </Suspense>
      
      {/* Video Transition */}
      <VideoTransition 
        isVisible={showVideo}
        onVideoEnd={handleVideoEnd}
      />
    </div>
  );
}

// Preload the model and video
useGLTF.preload('/assets/glb/plant.glb');

// Preload the video
const preloadVideo = () => {
  const video = document.createElement('video');
  video.src = '/assets/vids/forest.mov';
  video.preload = 'auto';
  video.load();
};

// Call preload function when module loads
preloadVideo();
