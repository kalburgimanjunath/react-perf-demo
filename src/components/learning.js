import React from 'react';

function Learning() {
  const LESSONS = [{
      title: 'Front end development with react',
      subtitle: 'intro to react',
      tags: 'react into,react basics,getting started',
      image: 'https://picsum.photos/200/300',
      description:'Lorem pasam'
  },
  {
    title: 'Front end development with react plus',
    subtitle: 'creating your first react app',
    tags: 'react into,react basics,getting started,hello world',
    image: 'https://picsum.photos/id/237/200/300',
    description:'Lorem pasam'
  } 
  ];
  return (
        <div className="learning">  
            {LESSONS.map((item)=>{
                return <div key={item.title}>
                    <div>title:{item.title}</div>
                    <div>subtitle:{item.subtitle}</div>
                    <div><img src={item.image} width="200" alt={item.title} /></div>
                    <div>tags:{item.tags}</div>
                    <div>description:{item.description}</div>
                    <div><button>Apply</button></div>
                </div>  
            })}      
                  
        </div>
    );
  }
 

export default Learning;
