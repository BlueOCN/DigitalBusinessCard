import tw_icon from '../assets/Twitter Icon.png'
import fb_icon from '../assets/Facebook Icon.png'
import ig_icon from '../assets/Instagram Icon.png'
import in_icon from '../assets/Linkedin Icon.png'
import gh_icon from '../assets/GitHub Icon.png'

function Footer() {
    return (
        <div className="shoes">
            <img src={tw_icon} alt="tw_icon" />
            <img src={fb_icon} alt="fb_icon" />
            <img src={ig_icon} alt="ig_icon" />
            <img src={in_icon} alt="in_icon" />
            <img src={gh_icon} alt="gh_icon" />
        </div>
    )
}

export default Footer