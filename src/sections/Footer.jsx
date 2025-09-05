import React from 'react'
import { useMediaQuery } from 'react-responsive';
    

const Footer = () => {
    const isSmall = useMediaQuery({maxWidth: 440});

  return (

        <section
      className={`c-space pt-7 pb-3 border-t border-black-300 flex flex-wrap gap-5 ${isSmall ? 'text-center justify-center' : 'justify-between items-center'}`}>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions </p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
            <div className='social-icon'>
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
            </div>

            <div className='social-icon'>
                <img src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2' />
            </div>

            <div className='social-icon'>
                <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
            </div>
        </div>

        <div className='text-white-500'>
            &copy; {new Date().getFullYear()} Aaron Delen. All rights reserved.
        </div>
    </section>
  )
}

export default Footer
