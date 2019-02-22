import React from 'react';
import './index.scss';

function Main() {
  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>Education</h3>
        </div>
        <div className="Section--right">
          <h3>Vilniaus Gedimino technikos universitetas</h3>
          <p>
            <span>Major:</span>Biomechanic.
          </p>
          <p>
            <span>Minor:</span>Carpenter.
          </p>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>Skills</h3>
        </div>
        <div className="Section--right">
          <div>
            <h3>AutoCAD</h3>
            <p>
              lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm
              lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm
            </p>
          </div>
          <div>
            <h3>AutoCAD</h3>
            <p>
              lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm
              lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm
            </p>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>Experience</h3>
        </div>
        <div className="Section--right">
          <div>
            <div className="Section--right-job-title">
              <h3>Code Academy</h3>
              <span>Very Good Student, 2018.10 - present</span>
            </div>

            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div>
            <div className="Section--right-job-title">
              <h3>The school of Life{''}</h3>
              <span>Very Good Student,- present</span>
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
          <h3>Hobies</h3>
        </div>
        <div className="Section--right">
          <p>
            lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm
            lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm
          </p>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>References</h3>
        </div>
        <div className="Section--right">
          <p>lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm</p>
        </div>
      </section>
    </main>
  );
}
export default Main;
