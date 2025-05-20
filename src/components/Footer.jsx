import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:2/3 text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iure dolor explicabo error perferendis et sit.  dolore ipsam quam sapiente perferendis asperiores!
                </p>
            </div>

            <div>
                <p>COMPANY</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
