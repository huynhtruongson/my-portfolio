import React, { ReactElement } from "react";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
} from "@ant-design/icons";
import "./MediaLink.scss";
interface Props {}

function MediaLink(props: Props): ReactElement {
  return (
    <div className="media-link">
      <a href="https://github.com/huynhtruongson" target="_blank" rel="noopener noreferrer">
        <GithubFilled />
      </a>
      <a href="https://www.linkedin.com/in/s%C6%A1n-hu%E1%BB%B3nh-7601a71ab/" target="_blank" rel="noopener noreferrer">
        <LinkedinFilled />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100009445815715" target="_blank" rel="noopener noreferrer">
        <FacebookFilled />
      </a>
    </div>
  );
}

export default MediaLink;
