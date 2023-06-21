import React, { useEffect, useState } from 'react'
import { InputControl } from './InputControl/InputControl';

const Editer = (props) => {
    const sections = props.sections;
    const information = props.information;
    const [activeSection,setActiveSection] = useState(Object.keys(sections)[0]);
    // console.log(activeSection);
     
    const [activeInformation,setActiveInformation] = useState(
      information[sections[Object.keys(sections)[0]]]
    );
     
    const [sectionTitle,setSectionTitle] = useState(sections[Object.keys(sections)[0]]);
     
    const [activeDetailIndex, setActiveDetailIndex] = useState(0); 
    
    const [values, setValues] = useState({
      name: activeInformation?.detail?.name || "",
      title: activeInformation?.detail?.title || "",
      linkedin: activeInformation?.detail?.linkedin || "",
      github: activeInformation?.detail?.github || "",
      phone: activeInformation?.detail?.phone || "",
      email: activeInformation?.detail?.email || "",
      points: [...(activeInformation?.detail?.points || [])],
    });
      

    const handlePoints = (value,index)=>{
      const tempValue = {...values};
      tempValue.points[index] = value;
      setValues(tempValue);
    }
    
    
    const workExpBody = (
      <div>
        <div>
          <InputControl
            label="Title"
            placeholder="Enter title eg. Frontend developer"
            value = {values.title}
            onChange={(event)=>setValues((prev) => ({...prev,title: event.target.value}))}
          />
          <InputControl
            label="Company Name"
            placeholder="Enter company name eg. amazon"
            value = {values.companyName}
            onChange={(event)=>setValues((prev) => ({...prev,companyName: event.target.value}))}

          />
        </div>
        <div>
          <InputControl
            label="Certificate Link"
            placeholder="Enter certificate link"
            value = {values.certificate}
            onChange={(event)=>setValues((prev) => ({...prev,certificate: event.target.value}))}
          
          />
          <InputControl
            label="Location"
            placeholder="Enter location eg. Remote"
            value = {values.location}
            onChange={(event)=>setValues((prev) => ({...prev,location: event.target.value}))}
            
          />
        </div>
        <div>
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            value = {values.startDate}
            onChange={(event)=>setValues((prev) => ({...prev,startDate: event.target.value}))}
          />
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of work"
            value = {values.endDate}
            onChange={(event)=>setValues((prev) => ({...prev,endDate: event.target.value}))}
            
          />
        </div>
  
        <div>
          <label className='p-4'>Enter work description</label>
          <InputControl
            placeholder="Line 1"
            value = {values.points ? values.points[0] : ""}
            onChange={(event)=>handlePoints(event.target.value,0)}
          />
          <InputControl
            placeholder="Line 2"
            value = {values.points ? values.points[1] : ""}
            onChange={(event)=>handlePoints(event.target.value,1)}
          />
          <InputControl
            placeholder="Line 3"
            value = {values.points ? values.points[2] : ""}
            onChange={(event)=>handlePoints(event.target.value,2)}
          />
        </div>
      </div>
    );
    const projectBody = (
      <div >
        <div >
          <InputControl
            label="Title"
            placeholder="Enter title eg. Chat app"
            value = {values.title}
            onChange={(event)=>setValues((prev) => ({...prev,title: event.target.value}))}
          />
        </div>
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
          value = {values.overview}
          onChange={(event)=>setValues((prev) => ({...prev,overview: event.target.value}))}
        />
        <div>
          <InputControl
            label="Deployed Link"
            placeholder="Enter deployed link of project"
            value = {values.link}
            onChange={(event)=>setValues((prev) => ({...prev,link: event.target.value}))}
          />
          <InputControl
            label="Github Link"
            placeholder="Enter github link of project"
            value = {values.github}
            onChange={(event)=>setValues((prev) => ({...prev,github: event.target.value}))}
          />
        </div>
        <div>
          <label className='p-4'>Enter project description</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ""}
            onChange={(event)=>handlePoints(event.target.value,0)}
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(event)=>handlePoints(event.target.value,1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(event)=>handlePoints(event.target.value,2)}
          />
          <InputControl
            placeholder="Line 4"
            value={values.points ? values.points[3] : ""}
            onChange={(event)=>handlePoints(event.target.value,3)}
          />
        </div>
      </div>
    );
    const educationBody = (
      <div>
        <div>
          <InputControl
            label="Title"
            placeholder="Enter title eg. B-tech"
            value={values.title}
            onChange={(event)=>setValues((prev) => ({...prev,title:event.target.value}))}
          />
        </div>
        <InputControl
          label="College/School Name"
          placeholder="Enter name of your college/school"
          value={values.SchoolName}
          onChange={(event)=>setValues((prev) => ({...prev,SchoolName:event.target.value}))}
        />
        <div >
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of this education"
            value={values.startDate}
            onChange={(event)=>setValues((prev) => ({...prev,startDate:event.target.value}))}
          />
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of this education"
            defaultValue={values.endDate}
            value={values.endDate}
            onChange={(event)=>setValues((prev) => ({...prev,endDate:event.target.value}))}
          />
        </div>
      </div>
    );
    const basicInfoBody = (
      <div>
        <div>
          <InputControl
            label="Name"
            placeholder="Enter your full name eg. Aashu"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
          />
          <InputControl
            label="Title"
            placeholder="Enter your title eg. Frontend developer"
            value={values.title}
            onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
          />
        </div>
        <div>
          <InputControl
            label="Linkedin Link"
            placeholder="Enter your linkedin profile link"
            value={values.linkedin}
            onChange={(event) => setValues((prev) => ({ ...prev, linkedin: event.target.value }))}
          />
          <InputControl
            label="Github Link"
            placeholder="Enter your github profile link"
            value={values.github}
            onChange={(event) => setValues((prev) => ({ ...prev, github: event.target.value }))}
          />
        </div>
        <div>
          <InputControl
            label="Email"
            placeholder="Enter your email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          />
          <InputControl
            label="Enter phone"
            placeholder="Enter your phone number"
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
          />
        </div>
      </div>
    );
    const achievementsBody = (
      <div>
        <div>
          <label className='p-4'>List your achievements</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0]:""}
            onChange={(event)=>handlePoints(event.target.value,0)}
            
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1]:""}
            onChange={(event)=>handlePoints(event.target.value,1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2]:""}
            onChange={(event)=>handlePoints(event.target.value,2)}
            
          />
          <InputControl
            placeholder="Line 4"
            value={values.points ? values.points[3]:""}
            onChange={(event)=>handlePoints(event.target.value,3)}
          />
        </div>
      </div>
    );
    const summaryBody = (
      <div>
        <InputControl
          label="Summary"
          placeholder="Enter your objective/summary"
          value={values.defaultValue}
          onChange={(event)=>setValues((prev)=>({...prev,defaultValue: event.target.value}))}
        />
      </div>
    );
    const otherBody = (
      <div>
        <InputControl
          label="Other"
          placeholder="Enter something"
          value={values.other}
          onChange={(event)=>setValues((prev)=>({...prev,other: event.target.value}))}
        />
      </div>
    );  
    // console.log(activeSection);
    const GenerateBody = () => {
      switch (activeSection) {
        case "basicInfo":
          return basicInfoBody;
        case "workExp":
          return workExpBody;
        case "project":
          return projectBody;
        case "education":
          return educationBody;
        case "achievement":
          return achievementsBody;
        case "summary":
          return summaryBody;
        case "other":
          return otherBody;
        default:
          return null;
      }
    };
     
    const handleSubmission = (event) => {
      event.preventDefault();
      console.log(values); 
    };
  

    useEffect(()=>{
      const activeInfo = information[sections[activeSection]];
      setActiveInformation(activeInfo);
      setSectionTitle(sections[activeSection]);
      setValues({
        name: activeInfo?.detail?.name || "",
        title: activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        github: activeInfo?.detail?.github || "",
        phone: activeInfo?.detail?.phone || "",
        email: activeInfo?.detail?.email || "",
        points: [...(activeInfo?.detail?.points || [])],
        other: activeInfo?.detail?.other || "",
        defaultValue: activeInfo?.detail?.defaultValue || "",
        SchoolName: activeInfo?.detail?.SchoolName || "",
        startDate: activeInfo?.detail?.startDate || "",
        endDate: activeInfo?.detail?.endDate || "",
      });
    },[activeSection]);

    
  return (
    <div>
        <div className='text-2xl flex gap-4 justify-between p-2'>
        {
            (Object.keys(sections)?.map((key) => (
                <div key={key} className={key === activeSection ? "active" : "cursor-pointer"} onClick={()=>(setActiveSection(key))}>
                    <div>
                        {sections[key]}
                    </div>
                    <div className={key === activeSection ? "active-bg" : "cursor-pointer"}/>
                </div>
            )))
        }
        </div>
        <div className='shadow rounded-xl border-2 border-gray-300 min-h-[500px]'>
            <form className='p-2'>
                <InputControl
                  label="Title"
                  placeholder="Enter section title"
                  value={sectionTitle}
                  onChange={(event) => setSectionTitle(event.target.value)}
                />
                {GenerateBody()}
                <button  className='bg-blue-500 text-white  p-4 text-xl rounded-2xl transition-transform w-1/6 duration-300 transform hover:-translate-y-1 active:translate-y-0' onClick={handleSubmission}>Save</button>
            </form>  
        </div>
    </div>
  )
}

export default Editer