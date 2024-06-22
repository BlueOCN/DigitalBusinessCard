//import React from 'react'

function Info() {

    return (
        <div className="info">
            <img className="info--image" src="./front_img.png"/>
            <h1 className="info--name">Laura Smith</h1>
            <h3 className="info--position">Frontend Developer</h3>
            <h4 className="info--site">laurasmith.website</h4>
            <div className="info--buttons">
                <button className="info--email"><i className="material-icons">email</i>Email</button>
                <button className="info--in"><span className="info--in--icon"></span>LinkedIn</button>
            </div>
        </div>
    )
  }
  
  export default Info
  