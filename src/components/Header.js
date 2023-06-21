import React from 'react'
import image from "../undraw_Resume_folder_re_e0bi.png";


const Header = () => {
    
  return (
    <div className='flex flex-col gap-8'>
        <div className='bg-blue-100'>
        <div className='flex gap-2 items-center  w-9/12 mx-auto flex-wrap '>
            <div className='text-6xl w-1/2'>
                A <span className='text-blue-500'>Resume</span> that stands out! Make Your Own Resume. <span className='text-blue-500'>It's free</span>
            </div>
            <div>
                <img src={`${image}`} alt='Resume' className='w-[500px] h-[500px] rounded-3xl my-5'/>
            </div>
        </div>
        </div>
        <div className='text-center text-4xl font-lightbold'>
            Resume Builder
        </div>
    </div>
  )
}

export default Header