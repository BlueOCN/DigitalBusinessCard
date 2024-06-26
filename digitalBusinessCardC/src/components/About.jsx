// import React from "react";

function About () {
    return (
        <div className="content">
            <h1 className="content--name">Laura Smith</h1>
            <h3 className="content--position" >Frontend Developer</h3>
            <h4 className="content--website">laurasmith.website</h4>

            <div className="content--buttons">
                <button className="content--buttons--email"><span className="email--logo"></span>Email</button>
                <button className="content--buttons--linkedin" ><i className="in--logo"></i>LinkedIn</button>
            </div>

            <div className="content--info">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
        
    )
}

export default About