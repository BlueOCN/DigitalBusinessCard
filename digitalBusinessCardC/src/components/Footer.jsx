// import React from "react";
import tw_logo from '../assets/Twitter Icon.png'
import fb_logo from '../assets/Facebook Icon.png'
import ig_logo from '../assets/Instagram Icon.png'
import gh_logo from '../assets/GitHub Icon.png'

function Footer () {
    return (
        <footer>
            <img className="tw_icon" src={tw_logo} alt="tw_icon" />
            <img className="fb_icon" src={fb_logo} alt="fb_icon" />
            <img className="ig_icon" src={ig_logo} alt="ig_icon" />
            <img className="gh_icon" src={gh_logo} alt="gh_icon" />
        </footer>
    )
}

export default Footer