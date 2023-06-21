import React from 'react'
import {AiOutlineDownload} from "react-icons/ai"
import Editer from './Editer'
import { useState } from 'react'

export const Body = () => {
    const colors = ["#239ce2","#48bb78","#0bc5ea","#a0aec0","#ed8936"];

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "project",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other"
    };

    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          detail: {},
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          detail: {},
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          detail: {},
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });
      
      
  return (
    <div className='w-9/12 mx-auto flex flex-col gap-8'>
        <div className='flex justify-between flex-wrap'>
            <div className='flex gap-2 flex-wrap'>
                {/* {colors} */}
                {
                    colors.map(item => (
                        <div style={{backgroundColor:item}} className='h-10 w-10 rounded-full' key={item}>
                        </div>
                    ))
                }
            </div> 
            <div>
                {/* download button */}
                <button className='p-4 bg-blue-500 rounded-2xl flex gap-2 font-lightbold text-white'>
                    Download <AiOutlineDownload className='text-2xl'/>
                </button>
            </div>
        </div>
        <Editer sections={sections} information={resumeInformation}/>
    </div>
  )
}
