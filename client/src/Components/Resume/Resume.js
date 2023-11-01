import React, { useEffect, useState } from 'react';
import './Resume.css';

export default function Resume() {

  const [ userData, setUserData ] = useState('');
  const callContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    callContact();
  }, []);

  const handlePrint = () => window.print();

  // Conditional rendering to check if userData and userData.resumedata are available
  if (!userData || !userData.resumedata || userData.resumedata.length === 0) {
    // Show loading state or return null
    return <div>Loading...</div>;
  }

  return (
    <div>
      <meta charSet="UTF-8" />
      <title>Resume | Template</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.min.css" />
      <link rel="stylesheet" href="style.css" />
      <div className="sheet">
        <button className="btn btn-print btn-sm btn-light" onClick={handlePrint}>
          <i className="fa fa-print" />
          Print
        </button>
        <div className="two-column resume">

          <section className="resume__section resume__header">
            <div className="resume__content">
              <h1>{userData.name}</h1>
              <div className="info-item"><span className="info-label"><i className="fa fa-location-arrow" /></span><span className="info-text">
                {userData.resumedata[ 0 ].address}</span></div>
              <div className="info-item"><span className="info-label"><i className="fa fa-envelope" /></span><span className="info-text"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f1929e9f8590859eb185999890969e9383909690df9e8396">{userData.resumedata[ 0 ].email}</a></span></div>
              <div className="info-item"><span className="info-label"><i className="fa fa-phone" /></span><span className="info-text">{userData.resumedata[ 0 ].phone}</span></div>
              <div className="info-item"><span className="info-label"><i className="fa fa-linkedin" /></span><span className="info-text"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f1929e9f8590859eb185999890969e9383909690df9e8396">{userData.resumedata[ 0 ].linkdin}</a></span></div>
              <div className="info-item"><span className="info-label"><i className="fa fa-globe" /></span><span className="info-text"><a href={userData.resumedata[ 0 ].portfolio} target="_blank" rel="noopener noreferrer">
                {userData.resumedata[ 0 ].portfolio}
              </a></span></div>
            </div>
          </section>

          <div className="resume__columns">
            <div className="resume__main">
              <section className="resume__section resume__summary">
                <div className="resume__content">
                  <div className="resume__section-title"><i className="fa fa-pencil-square-o" />
                    <h2>Professional Summary</h2>
                  </div>
                  <div className="other">
                    <div className="other-info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, mollitia! Ab magni eligendi consequuntur, in aliquid reprehenderit a ratione optio et doloremque doloribus exercitationem voluptatem unde, laudantium ad ipsum at aspernatur voluptates sed accusantium numquam soluta vero delectus. Mollitia, illum.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="resume__section resume__experience">
                <div className="resume__content">
                  <div className="resume__section-title"><i className="fa fa-briefcase" />
                    <h2>Project</h2>
                  </div>
                  <div className="xp-item">
                    <div className="xp-job">
                      {userData.resumedata[ 0 ].project1}
                    </div>
                    <div className="xp-date">Apr. 2017 – current</div>
                    <div className="xp-detail">
                      <ul>
                        <li>
                          {userData.resumedata[ 0 ].about_project1}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="xp-item">
                    <div className="xp-job">
                      {userData.resumedata[ 0 ].project2}
                    </div>
                    <div className="xp-date">Aug. 2018 – Apr. 2020</div>
                    <div className="xp-detail">
                      <ul>
                        <li>
                          {userData.resumedata[ 0 ].about_project2}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="resume__side">
              <section className="resume__section resume__skills">
                <div className="resume__content">
                  <div className="resume__section-title"><i className="fa fa-align-center" />
                    <h2>Skills</h2>
                  </div>
                  <div className="resume__text">               
                    <div className="extra">
                      <div className="extra-info">{userData.resumedata[ 0 ].skills}</div>
                      <div className="extra-details">
                        <div className="extra-details__progress" style={{ width: '90%' }} />
                      </div>
                    </div>
                    <div className="extra">
                      <div className="extra-info">Operating Systems<br /><small>
                        <i className="fa fa-linux" /> GNU/Linux ·
                        <i className="fa fa-apple" /> Mac OS ·
                        <i className="fa fa-windows" /> Windows</small></div>
                      <div className="extra-details">
                        <div className="extra-details__progress" style={{ width: '90%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="resume__section resume__languages">
                <div className="resume__content">
                  <div className="resume__section-title"><i className="fa fa-globe" />
                    <h2>Languages</h2>
                  </div>
                  <div className="extra">
                    <div className="extra-info">Portuguese <small>(native)</small></div>
                    <div className="extra-details">
                      <div className="extra-details__progress" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-info">English</div>
                    <div className="extra-details">
                      <div className="extra-details__progress" style={{ width: '65%' }} />
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-info">Spanish</div>
                    <div className="extra-details">
                      <div className="extra-details__progress" style={{ width: '20%' }} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
