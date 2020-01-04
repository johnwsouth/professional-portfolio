import React from 'react';

export default function ProjectCard(props) {
  return (
    <div className='project-card'>
      <div className='project-card-title'>{props.title}</div>
      <div className="project-card-image-container">
        <img className={'project-card-image ' + props.class} src={props.imgSrc} alt="Missing Img" />
      </div>
      <div className={'project-card-subtitle'}>{props.subtitle}</div>
      {props.title === 'BookMaster' ? <>
      <div className='technologies-slab'>
        <img className='technologies-image' src="./images/react.png" alt=""/>
        <div className='technologies-label'>ReactJS</div>
        <img className='technologies-image' src="./images/nodejs.png" alt="" />
        <div className='technologies-label'>Node.js</div>
      </div>
      <div className='technologies-slab'>
        <img className='technologies-image' src="./images/mysql.png" alt="" />
        <div className='technologies-label'>MySQL</div>
      </div>
      </>
        : <>
        <div className='technologies-slab'>
          <img className='technologies-image' src="./images/react.png" alt="" />
          <div className='technologies-label'>ReactJS</div>
          <img className='technologies-image' src="./images/php.png" alt="" />
          <div className='technologies-label'>PHP</div>
        </div>
        <div className='technologies-slab'>
          <img className='technologies-image' src="./images/mysql.png" alt="" />
          <div className='technologies-label'>MySQL</div>
        </div>
        </>}
      <div className='technologies-slab'>
        {props.title === 'BookMaster' ? <a href="http://dev.bookmaster.johnwsouth.com" target="__blank"> <button className='visit-project-button'>Visit Project</button></a>
          : <a href="http://adme.sairafe.com" target="__blank"> <button className='visit-project-button'>Visit Project</button></a>
        }
      </div>
    </div>

  );
}
