//import React from 'react'

function Info() {

    return (
        <div className="info">
            <h1 className="info--name">Laura Smith</h1>
            <h3 className="info--position">Frontend Developer</h3>
            <h4 className="info--site">laurasmith.website</h4>
            <div className="info--buttons">
                <button className="info--email"><i className="material-icons">email</i>Email</button>
                <button className="info--in"><span className="info--in--icon"></span>LinkedIn</button>
            </div>
            <h2 className="about--title">About</h2>
            <h4 className="about--text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, and am always looking for new things to learn.</h4>
            <h2 className="inter--title">Interests</h2>
            <h4 className="inter--text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h4>
        </div>
    )
  }
  
  export default Info
  