import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import './Container.scss'
interface Props {
  children : JSX.Element
  title : string
  classname? :string
}

function Container(props: Props): ReactElement {
  const {children, title, classname} =  props
  return (
    <div className="container">
      <div className="container__header">
        <div>{title}</div>
        <Link to='/'/>
      </div>
      <div className={`container__content ${classname}`}>
        {children}
      </div>
    </div>
  )
}

export default Container;
