import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const WelcomeOpening = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionRef = useRef<THREE.AnimationAction | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    // Scene setup - transparent background
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 11.5, 3);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.pointerEvents = 'none';
    currentMount.appendChild(renderer.domElement);

    // Enhanced lighting for terrarium atmosphere
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(3, 15, 3);
    directionalLight.target.position.set(0, 11.5, 1);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    const fillLight = new THREE.DirectionalLight(0xffffcc, 0.4);
    fillLight.position.set(-3, 8, -3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x00ff88, 0.3, 10);
    rimLight.position.set(0, 12, 2);
    scene.add(rimLight);

    // Smooth easing function for camera movement
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // Load GLB model
    const loadBottleModel = async () => {
      try {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const loader = new GLTFLoader();

        setLoadingProgress(20);

        loader.load(
          '/assets/glb/bottle5.glb',
          (gltf) => {
            const bottle = gltf.scene;
            
            const box = new THREE.Box3().setFromObject(bottle);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 4 / maxDim;
            bottle.scale.setScalar(scale);
            
            bottle.position.copy(center.multiplyScalar(-scale));
            bottle.position.y = 10;

            bottle.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            scene.add(bottle);
            setLoadingProgress(80);

            const mixer = new THREE.AnimationMixer(bottle);
            mixerRef.current = mixer;

            const times = [0, 1, 2, 3];
            const rotationValues = [
              0, 0, 0,
              0, Math.PI/2, 0,
              0, Math.PI, 0,
              0, Math.PI * 1.5, 0
            ];
            
            const rotationTrack = new THREE.VectorKeyframeTrack('.rotation', times, rotationValues);
            const positionValues = [
              0, 10, 0,
              1, 10.5, 0.5,
              0, 11, 0,
              -1, 10.5, -0.5
            ];
            
            const positionTrack = new THREE.VectorKeyframeTrack('.position', times, positionValues);
            
            const clip = new THREE.AnimationClip('scroll-animation', 3, [rotationTrack, positionTrack]);
            const action = mixer.clipAction(clip);
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true;
            actionRef.current = action;
            action.play();
            action.paused = true;

            setLoadingProgress(100);
            setTimeout(() => setIsLoaded(true), 500);
          },
          (progress) => {
            const percentComplete = (progress.loaded / progress.total) * 60 + 20;
            setLoadingProgress(Math.min(percentComplete, 80));
          },
          (error) => {
            console.error('Error loading bottle:', error);
            createFallbackCube();
          }
        );
      } catch (err) {
        console.error('Error loading GLTFLoader:', err);
        createFallbackCube();
      }
    };

    // Fallback cube
    const createFallbackCube = () => {
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshLambertMaterial({ 
        color: 0x4f46e5,
        transparent: true,
        opacity: 0.9
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.y = 10;
      cube.castShadow = true;
      scene.add(cube);

      const mixer = new THREE.AnimationMixer(cube);
      mixerRef.current = mixer;

      const times = [0, 1, 2, 3];
      const rotationValues = [
        0, 0, 0,
        0, Math.PI/2, 0,
        0, Math.PI, 0,
        0, Math.PI * 1.5, 0
      ];
      
      const rotationTrack = new THREE.VectorKeyframeTrack('.rotation', times, rotationValues);
      const positionValues = [
        0, 10, 0,
        1, 10.5, 0.5,
        0, 11, 0,
        -1, 10.5, -0.5
      ];
      const positionTrack = new THREE.VectorKeyframeTrack('.position', times, positionValues);
      
      const clip = new THREE.AnimationClip('scroll-animation', 3, [rotationTrack, positionTrack]);
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      actionRef.current = action;
      action.play();
      action.paused = true;

      setLoadingProgress(100);
      setTimeout(() => setIsLoaded(true), 500);
    };

    loadBottleModel();

    // Improved scroll handler with smooth camera movement
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      
      const scrollPercent = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
      
      setScrollProgress(scrollPercent);
      
      if (actionRef.current && mixerRef.current) {
        const duration = actionRef.current.getClip().duration;
        actionRef.current.time = scrollPercent * duration;
        actionRef.current.paused = true;
        mixerRef.current.update(0);
      }

      // Smooth camera movement with predefined path
      const easedProgress = easeInOutCubic(scrollPercent);
      
      // Create a smooth circular path around the terrarium
      const radius = 2.5; // Distance from terrarium center
      const angle = easedProgress * Math.PI * 1.5; // 3/4 circle instead of full circle
      const heightVariation = Math.sin(easedProgress * Math.PI) * 0.8; // Smooth height change
      
      // Calculate smooth camera position
      camera.position.x = Math.sin(angle) * radius;
      camera.position.y = 11 + heightVariation; // Base height + smooth variation
      camera.position.z = Math.cos(angle) * radius + 1; // Offset to keep close to terrarium
      
      // Create smooth target position that slightly leads the camera movement
      const targetX = Math.sin(angle + 0.1) * 0.3; // Slight offset for dynamic look
      const targetY = 10.5; // Fixed height for terrarium center
      const targetZ = Math.cos(angle + 0.1) * 0.3;
      
      camera.lookAt(targetX, targetY, targetZ);
    };

    // Get scroll container and add event listener
    let scrollContainer: HTMLElement | null = null;
    
    const addScrollListener = () => {
      scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      }
    };

    setTimeout(addScrollListener, 100);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Loading Screen */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <div className="mb-4 text-2xl font-bold">Loading 3D Model...</div>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-400">{loadingProgress}%</div>
          </div>
        </div>
      )}

      {/* 3D Scene Container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />

      {/* Enhanced Scroll Progress Indicator */}
      <div className="absolute top-8 right-8 z-50">
        <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl p-6 text-white border border-white/10 shadow-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="text-sm font-medium text-green-300">התקדמות חקירה</div>
          </div>
          
          <div className="relative w-40 h-3 bg-gray-800/50 rounded-full overflow-hidden border border-gray-600/30">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ 
                width: `${scrollProgress * 100}%`,
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <div className="text-xs text-gray-400 font-mono">{Math.round(scrollProgress * 100)}%</div>
            <div className="text-xs text-emerald-300 font-medium">טרריום ליאורה</div>
          </div>
        </div>
      </div>

      {/* Scrollable content overlay */}
      <div className="scroll-container absolute inset-0 z-20 overflow-y-auto">
        <div className="min-h-[400vh]">
            <section className="h-screen flex items-center justify-center relative">
            <div className="text-center text-white relative z-10">
              <div className="mb-8">
                <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-b from-white via-green-100 to-green-300 bg-clip-text text-transparent drop-shadow-2xl">
                  טרריום ליאורה
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full shadow-lg"></div>
                <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  גללו למטה כדי לחקור את עולם הטרריומים המדהים
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-bounce">
                  <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
                <span className="text-sm text-gray-300 font-medium">גללו למטה</span>
              </div>
            </div>
          </section>          <section className="h-screen flex items-center justify-center relative">
            <div className="relative z-10 max-w-4xl mx-4">
              <div className="bg-gradient-to-br from-black/50 via-gray-900/40 to-black/60 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    יצירת טרריומים מותאמים אישית
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 text-white">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        🌱
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-green-300">עיצוב ייחודי</h3>
                        <p className="text-gray-300 leading-relaxed">כל טרריום מעוצב במיוחד עבורכם עם תשומת לב לפרטים הקטנים</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        🍃
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-emerald-300">צמחים איכותיים</h3>
                        <p className="text-gray-300 leading-relaxed">בחירה קפדנית של צמחים טריים ובריאים המתאימים לסביבה</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        🎨
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-teal-300">סדנאות מקצועיות</h3>
                        <p className="text-gray-300 leading-relaxed">למדו ליצור טרריומים בעצמכם עם הדרכה אישית</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        💚
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-cyan-300">ליווי מתמשך</h3>
                        <p className="text-gray-300 leading-relaxed">תמיכה וייעוץ לאורך זמן לשמירה על הטרריום</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>          <section className="h-screen flex items-center justify-center relative">
            <div className="relative z-10 max-w-5xl mx-4">
              <div className="bg-gradient-to-tr from-blue-900/30 via-purple-900/20 to-indigo-900/30 backdrop-blur-2xl rounded-3xl p-12 border border-blue-300/20 shadow-2xl">
                <div className="text-center mb-10">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    טכנולוגיה מתקדמת
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-lg"></div>
                </div>
                
                <div className="text-center text-white max-w-3xl mx-auto">
                  <p className="text-xl leading-relaxed mb-8 text-gray-200">
                    אנו משתמשים בטכנולוגיות תלת-ממדיות מתקדמות כדי להציג את עולם הטרריומים 
                    בצורה אינטראקטיבית ומרתקת. החוויה שלפניכם מאפשרת לכם לחקור ולהבין 
                    כיצד נבנה כל טרריום בפירוט מדהים.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <div className="bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl p-6 border border-blue-400/20">
                      <div className="text-4xl mb-4">🔬</div>
                      <h3 className="font-bold text-lg text-blue-300 mb-2">הדמיה מדויקת</h3>
                      <p className="text-sm text-gray-300">מודלים תלת-ממדיים מפורטים של כל רכיב</p>
                    </div>
                    
                    <div className="bg-gradient-to-b from-purple-500/20 to-transparent rounded-2xl p-6 border border-purple-400/20">
                      <div className="text-4xl mb-4">🎮</div>
                      <h3 className="font-bold text-lg text-purple-300 mb-2">חוויה אינטראקטיבית</h3>
                      <p className="text-sm text-gray-300">גלילה חלקה עם אנימציות מתקדמות</p>
                    </div>
                    
                    <div className="bg-gradient-to-b from-indigo-500/20 to-transparent rounded-2xl p-6 border border-indigo-400/20">
                      <div className="text-4xl mb-4">✨</div>
                      <h3 className="font-bold text-lg text-indigo-300 mb-2">עיצוב מתקדם</h3>
                      <p className="text-sm text-gray-300">ממשק משתמש מודרני ומרשים</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
            
            <div className="relative z-10 max-w-4xl mx-4 text-center">
              <div className="bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-teal-900/40 backdrop-blur-2xl rounded-3xl p-16 border border-green-300/20 shadow-2xl">
                <div className="mb-8">
                  <div className="text-6xl mb-6">🎯</div>
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    המסע שלכם מתחיל כאן
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full shadow-lg mb-8"></div>
                </div>
                
                <p className="text-xl leading-relaxed text-gray-200 mb-10 max-w-2xl mx-auto">
                  הגעתם לסוף החקירה התלת-ממדית! עכשיו זה הזמן להפוך את החלום למציאות 
                  וליצור את הטרריום המושלם שלכם עם ליאורה.
                </p>
                
                <div className="space-y-6">
                  <button className="group bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 border border-green-400/20">
                    <span className="flex items-center justify-center space-x-3 space-x-reverse">
                      <span>התחילו את המסע שלכם</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">🌿</span>
                    </span>
                  </button>
                  
                  <div className="flex items-center justify-center space-x-8 space-x-reverse text-sm text-gray-400 mt-6">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>יצירה אישית</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
                      <span>ליווי מקצועי</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-400"></div>
                      <span>תוצאה מושלמת</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOpening;