import React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

function IconLink(props) {
  const { href, target, icon: Icon } = props;
  return (
    <a href={href} target="blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

export default IconLink;
