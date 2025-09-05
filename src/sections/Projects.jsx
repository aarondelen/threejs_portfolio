import React from 'react'
import { myProjects } from '../constants'
import { useState } from 'react'    
import { Canvas } from "@react-three/fiber"; 
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Center } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import DemoComputer from "../components/DemoComputer.jsx";

const Projects = () => {

    const { ref, inView } = useInView({ triggerOnce: true });
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

    const currentProject = myProjects[selectedProjectIndex];
    const projectCount = myProjects.length

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

  return (
    <section className='c-space my-20' id='project'>
        <h3 className='head-text'>My Projects</h3>

        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt="spotlight" />
                </div>

                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.style}>
                    <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                </div>

                <div className='flex flex-col gap-5 text-white-600 my-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                    <p className='animatedText '>{currentProject.desc}</p>
                    <p className='animatedText '>{currentProject.subdesc}</p>
                </div>

                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3'>
                        {currentProject.tags.map((tag, index) => {
                            return  <div key={index} className='tech-logo'>
                                        <img src={tag.path} alt={tag.name} />
                                    </div>   
                        })}
                    </div>

                    <a href={currentProject.href} /* target='_blank' */ rel='noreferrer' className='flex items-center gap-2 cursor-pointer text-white-600 z-50 hover:text-white transition-colors duration-300 ease-out'>
                        <p>Check Live Site</p>
                        <img src="/assets/arrow-up.png" className='w-3 h-3 pointer-events-none' alt="arrow-up" />
                    </a>
                </div>

                <div className='flex justify-between items-center mt-7'>
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left-arrow" aria-label="Previous project" className='w-4 h-4 ' />
                        </button>

                        <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right-arrow" aria-label="Next project" className='w-4 h-4' />
                        </button>
                </div> 
            </div>

            <div ref={ref} className='border border-black-300 bg-black-300 rounded-lg h-96 md:h-full'>
                {inView && (
                <Canvas   className='cursor-grab active:cursor-grabbing'
                          style={{ display: inView ? 'block' : 'none' }}>
                    <Suspense fallback={<CanvasLoader />}>
                        <ambientLight intensity={1.5}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                            <Center>
                            <group scale={1.9} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                <DemoComputer texture={currentProject.texture} />
                            </group>
                            </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                    </Suspense>
                </Canvas>
                )}
            </div>
        </div>
    </section>
  )
}

export default Projects
