import React from 'react'
import { Canvas } from '@react-three/fiber'


const Experience = () => {
  return (
    <section className='c-space my-20'>
        <div className='w-full text-white-600'>
            <h3 className='head-text'>My Work Experience</h3>

            <div className='work-container'>
                <div className='work-canvas'>
                    <Canvas>

                    </Canvas>
                </div>

                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
