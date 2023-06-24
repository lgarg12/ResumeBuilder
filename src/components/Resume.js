import React, { useState } from 'react'
import {CiLinkedin , CiGlobe} from "react-icons/ci"
import {BsGithub,BsTelephone} from "react-icons/bs"
import {SlCalender} from "react-icons/sl"


export const Resume = (props) => {
 
  const resumeInformation = props.resumeInformation;
  const sections = props.sections;
  const color = props.color;
  console.log(color);
  


  return (
    <div className='p-4 flex flex-col gap-2 shadow-lg rounded-3xl border-slate-200 border-2 hover:shadow-2xl hover:shadow-slate-400'>
        <div>Name</div>
        <div>C++ Developer</div>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center' style={{ color }}><CiGlobe className='text-2xl '/>Example_gmail@mail.com</div>

          <div className='flex gap-2 items-center' style={{ color }}><BsTelephone className='text-2xl'/>9518077276</div>

          <div className='flex gap-2 items-center' style={{ color }}><CiLinkedin className='text-2xl'/>http://Linkedin_Id</div>

          <div className='flex gap-2 items-center' style={{ color }}><BsGithub className='text-2xl'/>http://Github_Id</div>

        </div>
        <div className='flex justify-between my-3 gap-5'>
            <div className='w-1/2 flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                  <div className='uppercase text-3xl'>
                    Projects
                  </div>
                  <div className='h-1 bg-black w-full'/>
                  <div>
                    Title
                  </div>
                  <div>
                    Overview
                  </div>
                  <div>DeploymentLink</div>
                  <div>GithubLink</div>
                  <div>Description of project</div>
              </div>
            <div className='flex flex-col gap-2'>
                <div className='uppercase text-3xl font-lightbold'>
                  Education
                </div>
                <div className='h-1 bg-black w-full'/>
                <div>College Name</div>
                <div>Location of company</div>
                <div className='flex gap-2 items-center'>
                  <SlCalender/><span>12/07/2021 - 2/02/2022</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl uppercase'>
                summary
              </div>
              <div className='h-1 bg-black w-full'/>
              <div>
                Description of your summary
              </div>
            </div>
          </div>
            <div className='w-1/2 flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='uppercase text-3xl font-lightbold'>
                  work experience
                </div>
                <div className='h-1 bg-black'/>
                <div>
                  Full stack Developer
                </div>
                <div>
                  company Name
                </div>
                <div className='flex gap-2 items-center'>
                  <SlCalender/><span>12/07/2021 - 2/02/2022</span>
                </div>
                <div>
                  Description or Role in that company
                </div>
              </div>
            <div className='flex flex-col gap-2'>
              <div className='uppercase text-3xl font-lightbold'>
                achievement
              </div>
              <div className='h-1 bg-black w-full'/>
              <div>
                Description of Your Skills and Achievements
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='uppercase text-3xl font-lightbold'>
                other 
              </div>
              <div className='h-1 bg-black w-full'/>
              <div>
                Description Of other section
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
