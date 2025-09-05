import React from 'react'
import Button from '../components/Button.jsx'
import { useState } from "react";
import CanvasLoader from '../components/CanvasLoader.jsx';  
import { Suspense } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("aarondelen.ad@gmail.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }


  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid1.webp" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Aaron</p>
                            <p className='grid-subtext'>With a year of professional experience, I have honed my skills in turning wireframes into polished responsive digital websites and practical full-stack exposure.
                            </p>

                        </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className="grid-container">
                    <img src='assets/grid2.webp' alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I specialize in React, TailwindCSS, Figma, and Elementor — crafting interfaces that are both user-friendly and visually striking.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center '>
                        <Suspense fallback={<CanvasLoader />}>
                        <Globe
                        width={326}
                        height={326}
                        backgroundColor='rgba(0, 0, 0, 0)'
                        backgroundImageOpacity={0.5}
                        // showAtmosphere
                        showGraticules
                        globeImageUrl="/textures/earth-night.webp"
                        bumpImageUrl="/textures/earth-topology.webp"
                        labelsData={[{
                            lat: 14.4, lng: 120.9, text: "I'M HERE!", size: 20,
                        }]}
                        />
                        </Suspense>
                    </div>
                    <div>
                       <p className='grid-headtext'>I work remotely across most timezones.</p> 
                       <p className='grid-subtext'>I'm based in Philippines, with remote work available.</p>
                    <Button text="Contact Me" containerClass="w-full mt-10"/>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/grid3.webp" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Digital Experiences, Delivered</p>
                        <p className='grid-subtext'>
                        I craft digital experiences that blend clean code with intuitive design. From wireframes in Figma to responsive front-end implementations, I focus on creating interfaces that delight users while solving real problems.
                        </p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="assets/grid4.webp" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact Me</p>
                        <div className='copy-container'   role="button" tabIndex={0} onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>aarondelen.ad@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
