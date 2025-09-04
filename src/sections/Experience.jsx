import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { workExperiences } from '../constants/index.js'
import CanvasLoader from '../components/CanvasLoader.jsx'
import Developer from '../components/Developer.jsx'
import { PerformanceMonitor } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [dpr, setDpr] = useState(1.5)        // devicePixelRatio
  const [animationName, setAnimationName] = useState('salute')

  const { ref, inView } = useInView({ triggerOnce: false })

  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          {/* ==== 3D Canvas Section ==== */}
          <div className="work-canvas" ref={ref}>
            {inView && (
              <Canvas
                dpr={dpr}
                camera={{ position: [0, 0, 10], fov: 35 }}
                style={{ display: inView ? 'block' : 'none' }}
              >
                <PerformanceMonitor
                  // 🟢 Gradually reduce DPR if FPS drops
                  onDecline={() => setDpr((prev) => Math.max(0.75, prev - 0.25))}
                  // 🔵 Raise DPR back if stable
                  onIncline={() => setDpr((prev) => Math.min(2, prev + 0.25))}
                />
                <Suspense fallback={<CanvasLoader />}>
                  <ambientLight intensity={3.2} />
                  <Developer
                    position-y={-3}
                    scale={3}
                    animationName={animationName}
                  />
                </Suspense>
              </Canvas>
            )}
          </div>

          {/* ==== Work Experience Text Section ==== */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, duration, title, icon, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName('salute')}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar"></div>
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition-all ease duration-150">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
