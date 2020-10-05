import { Popover } from "antd";
import React, { ReactElement, ReactNode } from "react";
import "./ButtonLink.scss";
interface Props {
  href?: string;
  children?: ReactNode;
  content?: ReactNode;
}

function ButtonLink(props: Props): ReactElement {
  const { href, children,content } = props;
  return href ? (
    <a
      className="button-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Popover
      content={content}
      trigger='hover'
      placement='right'
    >
      <div className="button-link" style={{paddingLeft : 3.5+'rem',paddingRight : 3.5+'rem'}}>{children}</div>
    </Popover>
  );
}

export default ButtonLink;
