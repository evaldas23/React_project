import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import data from './data';

function Main(props) {
  const { language } = props;
  const skills = data.skills[language];
  const education = data.education[language];
  const experience = data.experience[language];
  const hobies = data.hobies[language];
  const references = data.references[language];
  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>{education.label}</h3>
        </div>
        <div className="Section--right">
          <h3>{education.school}</h3>
          <p>
            <span>{`${education.major.label}`}</span>
            {`${education.major.value}`}
          </p>
          <p>
            <span>{`${education.minor.label}`}</span>
            {`${education.minor.value}`}
          </p>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{skills.label}</h3>
        </div>
        <div className="Section--right">
          {skills.list.map(({ label, value }, index) => (
            <div key={index}>
              <h3>{label}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{experience.label}</h3>
        </div>
        <div className="Section--right">
          {experience.list.map(
            ({ title, subtitle, responsibilities }, index) => (
              <div key={index}>
                <div className="Section--right-job-title">
                  <h3>{title}</h3>
                  <span>{subtitle}</span>
                </div>
                <ul>
                  {responsibilities.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            )
          )}

          <div>
            <div className="Section--right-job-title">
              <h3>{experience.label.title}</h3>
              <span>{experience.label.subtitle}</span>
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{hobies.label}</h3>
        </div>
        <div className="Section--right">
          <p>{hobies.summary}</p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{references.label}</h3>
        </div>
        <div className="Section--right">
          <p>{references.summary}</p>
        </div>
      </section>
    </main>
  );
}

Main.propTypes = {
  language: PropTypes.oneOf(['en', 'kr']),
};

Main.defaultProps = {
  language: 'en',
};
export default Main;
