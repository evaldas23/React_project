import React from 'react';
import data from './data';
import ErrorBoundary from '../ErrorBoundary';

import IconLink from './IconLink';
import './index.scss';

function Footer() {
  return (
    <ErrorBoundary
      message={
        <div>
          {' '}
          <span> GOOOOOOO!!!! </span>{' '}
        </div>
      }
    >
      <footer className="Footer">
        {data.map(({ href, icon }, index) => (
          <IconLink key={index} href={href} icon={icon} />
        ))}
      </footer>
    </ErrorBoundary>
  );
}

export default Footer;
