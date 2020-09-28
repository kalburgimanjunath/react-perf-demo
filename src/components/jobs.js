import React from 'react';
// import {JOBS} from '../assets/mock/jobs.json'
function Jobs() {
  const JOBS = [{
      title:'front end developer',
      designation:'lead developer',
      skills:'react,angular,nodejs,jekyll',
      description:'lorem param lorem param  lorem param'
    },  
    {
        title:'UI developer',
        designation:'lead developer',
        skills:'react,angular,nodejs,jekyll,html,css',
        description:'lorem param lorem param  lorem param'
    },    
    ]
  return (
    <div className="jobs">
        {JOBS.map((item)=>{
            return <div key={item.title}>
            <div>Job title:{item.title}</div>
            <div>Job designation:{item.title}</div>
            <div>Skills required:{item.skills}</div>
            <div>Job description:{item.description}</div>
            <div><button>Apply</button></div>
        </div>
        })}
      
    </div>
  );
}

export default Jobs;
