import React from 'react'; 
import { Canvas } from "@react-three/fiber"; 
import { PerspectiveCamera } from '@react-three/drei';
const { Suspense } = React;
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

const HackerRoom = React.lazy(() => import("../components/HackerRoom.jsx"));
const Target = React.lazy(() => import("../components/Target.jsx"));
const ReactLogo = React.lazy(() => import("../components/ReactLogo.jsx"));
const Cube = React.lazy(() => import("../components/Cube.jsx"));
const Rings = React.lazy(() => import("../components/Rings.jsx"));

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 767});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);


    // const x = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }
    // })


  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
        <div className='w-full flex flex-col mx-auto sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I'm Aaron <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Turning Ideas into Impact
</p>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'
                        dpr={[1, 1.5]}
                        frameloop="always"
                >
                    <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}></PerspectiveCamera>

                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                            position={sizes.deskPosition}
                            scale={sizes.deskScale}
                            rotation={[0.2, -Math.PI, 0]}
                            />
                    </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition} scale={sizes.targetScale}/>
                            <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale}/>
                            <Cube position={sizes.cubePosition} scale={sizes.cubeScale}/>
                            <Rings position={sizes.ringPosition} scale={sizes.ringScale}/>
                        </group>

                        <ambientLight intensity={0.9}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.3}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#about" className='w-fit'>
                    <Button text="Let's work together" containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
