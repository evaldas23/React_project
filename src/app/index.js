import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>EVALDAS ČERNIAUSKAS</h1>
        <hr />
        <p className="Header--contact">Phone: +37060094475</p>
        <p className="Header--contact">
          Email:{' '}
          <a
            href="mailto:aurelija@czv.lt"
            target="_blank"
            rel="noopener noreferrer"
          >
            evaldas.cerniauskas@gmail.com
          </a>
        </p>
        <p className="Header--sumary">
          Welcome to our Minions Ipsum website dedicated to Lorem generating
          text. Did you know this text had been used in the printing industry
          since the 1500s basically in Latin? Well, now we came up with the idea
          to make Lorem Ipsum funnier, in a form of a bit silly but well-known
          Minisons' language. Hope you appreciate our humor So how exactly to
          use the generator? While designing a new site, or web page copy the
          following 1, 2, 3, and 4 paragraphs with plain lorem ipsum text to
          fill in the template (or your default model) for your future content.
          It is convenient to see how the content with the actual distribution
          of letters and spaces in paragraphs will be displayed.
        </p>
        <img
          className="Header--profile-picture"
          alt="This is me"
          src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2018/bmw-m3-e46/bmw-e46-m3-csl-standard-detail-01.jpg/_jcr_content/renditions/cq5dam.resized.img.1185.large.time1545143586310.jpg"
        />
      </header>
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
            <p>
              lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm lorem ipsum mmm
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
