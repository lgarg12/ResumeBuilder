import React from 'react'
import { useState } from 'react';
import {FiDownload} from 'react-icons/fi'
import { Resume } from './Resume';

const Form = () => {
    const colors = ["#239ce2","#48bb78","#0bc5ea","#a0aec0","#ed8936"];
    const [color,setColor] = useState(colors[2]);
    // console.log(color);

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Project",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other"
    };

    const [activeSection,setActiveSection] = useState(Object.keys(sections)[0]);
    
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
    

    const handleInputChange = (section, field, value) => {
        setResumeInformation((prevState) => ({
          ...prevState,
          [section]: {
            ...prevState[section],
            detail: {
              ...prevState[section].detail,
              [field]: value,
            },
          },
        }));
    };
    
    
    const basicInfo = (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>FirstName</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.basicInfo]?.detail?.firstName || ''}
                    onChange={(e) =>
                        handleInputChange(sections.basicInfo, 'firstName', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>LastName</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.basicInfo]?.detail?.lastName || ''}
                    onChange={(e) =>
                        handleInputChange(sections.basicInfo, 'lastName', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Title</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.basicInfo]?.detail?.title || ''}
                    onChange={(e) =>
                        handleInputChange(sections.basicInfo, 'title', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Email</label>
                <input type='email' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.basicInfo]?.detail?.email || ''}
                    onChange={(e) =>
                        handleInputChange(sections.basicInfo, 'email', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Github</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.basicInfo]?.detail?.github || ''}
                    onChange={(e) =>
                        handleInputChange(sections.basicInfo, 'github', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Linkdin</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.basicInfo]?.detail?.linkedin || ''}
                    onChange={(e) =>
                        handleInputChange(sections.basicInfo, 'linkedin', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Phone no.</label>
                <input type='tel' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.basicInfo]?.detail?.phone || ''}
                    onChange={(e) =>
                        handleInputChange(sections.basicInfo, 'phone', e.target.value)
                    }
                />
            </div>
        </div>
    )
    
    const workExp = (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>CompanyName</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.workExp]?.detail?.companyName || ''}
                    onChange={(e) =>
                        handleInputChange(sections.workExp, 'companyName', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Duration</label>
                <input type='number' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.workExp]?.detail?.duration || ''}
                    onChange={(e) =>
                        handleInputChange(sections.workExp, 'duration', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>StartDate</label>
                <input type='Date' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.workExp]?.detail?.startDate || ''}
                    onChange={(e) =>
                        handleInputChange(sections.workExp, 'startDate', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>EndDate</label>
                <input type='Date' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.workExp]?.detail?.endDate || ''}
                    onChange={(e) =>
                        handleInputChange(sections.workExp, 'endDate', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Description</label>
                <textarea
                    placeholder="Enter description"
                    rows={4}
                    className="border border-gray-300 rounded-md p-2"
                    value={resumeInformation[sections.workExp]?.detail?.description || ''}
                    onChange={(e) =>
                        handleInputChange(sections.workExp, 'description', e.target.value)
                    }
                />
            </div>
        </div>
    )
    
    const project = (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Title</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.project]?.detail?.title || ''}
                    onChange={(e) =>
                        handleInputChange(sections.project, 'title', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Overview</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.project]?.detail?.overview || ''}
                    onChange={(e) =>
                        handleInputChange(sections.project, 'overview', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>DeploymentLink</label>
                <input type='url' className='border-2 border-gray-300 p-2 rounded-2xl' placeholder='Enter URL'
                    value={resumeInformation[sections.project]?.detail?.deploymentLink || ''}
                    onChange={(e) =>
                        handleInputChange(sections.project, 'deploymentLink', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>GithubLink</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl' placeholder='Enter URL'
                    value={resumeInformation[sections.project]?.detail?.githubLink || ''}
                    onChange={(e) =>
                        handleInputChange(sections.project, 'githubLink', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Description</label>
                <textarea
                    placeholder="Enter description"
                    rows={4}
                    className="border border-gray-300 rounded-md p-2"
                    value={resumeInformation[sections.project]?.detail?.description || ''}
                    onChange={(e) =>
                        handleInputChange(sections.project, 'description', e.target.value)
                    }   
                />
            </div>
        </div>
    )
    
    const education = (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>CollegeName</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.education]?.detail?.collegeName || ''}
                    onChange={(e) =>
                        handleInputChange(sections.education, 'collegeName', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Location</label>
                <input type='text' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.education]?.detail?.location || ''}
                    onChange={(e) =>
                        handleInputChange(sections.education, 'location', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>StartDate</label>
                <input type='Date' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.education]?.detail?.startDate || ''}
                    onChange={(e) =>
                        handleInputChange(sections.education, 'startDate', e.target.value)
                    }
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>EndDate</label>
                <input type='Date' className='border-2 border-gray-300 p-2 rounded-2xl'
                    value={resumeInformation[sections.education]?.detail?.endDate || ''}
                    onChange={(e) =>
                        handleInputChange(sections.education, 'endDate', e.target.value)
                    } 
                />
            </div>
        </div>
    )
    
    const achievement = (
        <div>
            <div className='flex flex-col gap-2'>
                <label className='text-semibold text-xl'>Description</label>
                <textarea
                    placeholder="Enter description"
                    rows={16}
                    className="border border-gray-300 rounded-md p-2"
                    value={resumeInformation[sections.achievement]?.detail?.description || ''}
                    onChange={(e) =>
                        handleInputChange(sections.achievement, 'description', e.target.value)
                    } 
                />
            </div>
        </div>
    )
    
    const summary = (
        <div>
            <div className='flex flex-col gap-2'>
            <label className='text-semibold text-xl'>Description</label>
                <textarea
                    placeholder="Enter description"
                    rows={16}
                    className="border border-gray-300 rounded-md p-2"
                    value={resumeInformation[sections.summary]?.detail?.description || ''}
                    onChange={(e) =>
                        handleInputChange(sections.summary, 'description', e.target.value)
                    } 
                />
            </div>
        </div>
    )
    const other = (
        <div>
            <div className='flex flex-col gap-2'>
            <label className='text-semibold text-xl'>Description</label>
                <textarea
                    placeholder="Enter description"
                    rows={16}
                    className="border border-gray-300 rounded-md p-2"
                    value={resumeInformation[sections.other]?.detail?.description || ''}
                    onChange={(e) =>
                        handleInputChange(sections.other, 'description', e.target.value)
                    } 
                />
            </div>
        </div>
    )
    
    const generateFormContent = () => {
        switch (activeSection) {
            case 'basicInfo':
                return (
                    <div>
                        {basicInfo}
                    </div>
            );
            case 'workExp':
                return (
                    <div>
                        {workExp}
                    </div>
            );
            case 'project':
                return (
                    <div>
                        {project}
                    </div>
            );
            case 'education':
                return (
                    <div>
                        {education}
                    </div>
            );
            case 'achievement':
                return (
                    <div>
                        {achievement}
                    </div>
            );
            case 'summary':
                return (
                    <div>
                        {summary}
                    </div>
            );
            case 'other':
                return (
                    <div>
                        {other}
                    </div>
            );
            default:
                return null;
            }
        };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    
    //     switch (activeSection) {
    //       case 'basicInfo':
    //         console.log(resumeInformation[sections.basicInfo]);
    //         break;
    //       case 'workExp':
    //         console.log(resumeInformation[sections.workExp]);
    //         break;
    //       case 'project':
    //         console.log(resumeInformation[sections.project]);
    //         break;
    //       case 'education':
    //         console.log(resumeInformation[sections.education]);
    //         break;
    //       case 'achievement':
    //         console.log(resumeInformation[sections.achievement]);
    //         break;
    //       case 'summary':
    //         console.log(resumeInformation[sections.summary]);
    //         break;
    //       case 'other':
    //         console.log(resumeInformation[sections.other]);
    //         break;
    //       default:
    //         break;
    //     }
    // };


     
  return (
    <div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                {
                    colors.map((item) => (
                        <div
                            key={item}
                            style={{
                              height: '50px',
                              width: '50px',
                              backgroundColor: item,
                              transition: 'transform 0.3s ease',
                            }}
                            onClick={()=>setColor(item)}
                            className='rounded-full hover:cursor-pointer hover:transform hover:translate-y-1'
                        />
                    ))
                }
            </div>
            <div>
                <button className='bg-blue-500 rounded-3xl p-4 text-white flex gap-4 items-center transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:scale-105 '>Download <FiDownload className='relative text-white'/></button>
            </div>
        </div>
        <div className='min-h-[600px] p-2 my-10 shadow-lg rounded-3xl border-slate-200 border-2 hover:shadow-2xl hover:shadow-slate-400'>
        <div className='flex gap-4 my-5'>
            {Object.entries(sections).map(([key, value]) => (
                <div key={key} className={`text-2xl font-semibold hover:cursor-pointer ${activeSection === key ? 'text-[#0bc5ea]' : undefined}`} onClick={() => setActiveSection(key)}>
                <div>{value}</div>
                <div className={`h-1 ${activeSection === key ? 'activebg' : ''}`} />
              </div>
            ))}
        </div>
        <form>
        <div className='p-2 flex flex-col gap-4'>
            {generateFormContent()}
        </div>
        {/* <button className='bg-blue-400 rounded-3xl p-2 text-white flex gap-4 items-center justify-center w-1/6 text-2xl transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-md' onClick={handleFormSubmit}>Save</button> */}
        </form>
        </div>
        <div>
            <Resume resumeInformation = {resumeInformation} sections = {sections} color = {color}/>
        </div>
    </div>
  )
}

export default Form