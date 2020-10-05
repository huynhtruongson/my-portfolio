import classNames from 'classnames';
import Images from "constants/images";
import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navigator.scss';
interface Props {}

function Navigator(props: Props): ReactElement {
  const {pathname} = useLocation()
  const _location = pathname.slice(1)
  return (
    <div className={classNames('navigator',{minimize : _location})}>
      <div className="navigator__link">
        <Link to='/about' className='navigator__title'>
          <span style={{backgroundImage: `url(${Images.ABOUT})`}}></span>
          <span>About me</span>
        </Link>
      </div>
      <div className="navigator__link">
        <Link to='/skills' className='navigator__title'>
          <span style={{backgroundImage: `url(${Images.SKILL})`}}></span>
          <span>Skill Metrics</span>
        </Link>
      </div>
      <div className="navigator__link">
        <Link to='/education' className='navigator__title'>
          <span style={{backgroundImage: `url(${Images.WORK})`}}></span>
          <span>Education</span>
        </Link>
      </div>
      <div className="navigator__link">
        <Link to='/work' className='navigator__title'>
          <span style={{backgroundImage: `url(${Images.EDUCATION})`}}></span>
          <span>My Work</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigator;
