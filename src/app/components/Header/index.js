import React from 'react';
import Proptypes from 'prop-types';
import './index.scss';

import data from './data';

function Header(props) {
  const { language, onLanguage } = props;
  const { contacts, picture, name, summary } = data[language];
  return (
    <header className="Header">
      <h1>{name}</h1>
      <hr />
      <p className="Header--contact">
        {`${contacts.phone.label} ${contacts.phone.value}`}
      </p>
      <p className="Header--contact">
        {`${contacts.email.label} `}
        <a
          href={`mailto:${contacts.email.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contacts.email.value}
        </a>
      </p>
      <p className="Header--sumary">{summary}</p>
      <img
        className="Header--profile-picture"
        alt={picture.alt}
        src={picture.src}
      />

      <select onChange={event => onLanguage(event.target.value)}>
        <option value="en">English</option>
        <option value="kr">한국어</option>
      </select>
    </header>
  );
}

Header.prototype = {
  language: Proptypes.oneOf(['en', 'kr']),
  onLanguage: Proptypes.func.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

export default Header;
