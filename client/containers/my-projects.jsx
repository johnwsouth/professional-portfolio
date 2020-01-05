import React from 'react';
import ProjectCard from '../components/project-card';

export default function MyProjects() {
  var createProjectElements = () => {
    var projectTextArr = ['BookMaster', 'AdMe'];
    var projectClass = ['book-master', 'ad-me'];
    var projectImgSrcArr = ['./images/bookMaster.png', './images/adMe.png'];
    var projectSubTextArr = [
      'A Bookkeeping Application Focused on Organization and Periodization',
      'A Creator based Advertisement/Marketing Application'
    ];
    var projectCardElemArr = [];
    for (var i = 0; i < 2; i++) {
      projectCardElemArr.push(<ProjectCard
        key={projectTextArr[i]}
        title={projectTextArr[i]}
        subtitle={projectSubTextArr[i]}
        imgSrc={projectImgSrcArr[i]}
        class={projectClass[i]}/>);
    }
    return projectCardElemArr;
  };
  var projectCards = createProjectElements();
  return (
    <>
    <div className='project-card-container'>
      {projectCards}
    </div>

    </>

  );
}
