import React from 'react'; 
import { Canvas } from "@react-three/fiber"; 
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from "../components/HackerRoom.jsx";
const { Suspense } = React;
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 767});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);


    const x = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10
        }
    })


  return (
    <section className='min-h-screen w-full flex-col relative'>
        <div className='w-full flex flex-col mx-auto sm:mt-36 mt-20'>
            <p className='sm:text=3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I'm Aaron <span className='waving-hand'>👋🏻</span></p>
            <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>

            <div className='w-full h-full absolute inset-0'>
                <Leva/>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}></PerspectiveCamera>


                    <HackerRoom 
                        // scale={0.07} 
                        // position={[0, 0, 0]} 
                        // rotation={[0, 0, 0]} 
                        position={sizes.deskPosition}
                        scale={sizes.deskScale}
                        rotation={[0.3, -Math.PI, 0]}
                        />

                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                        </group>

                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Hero
