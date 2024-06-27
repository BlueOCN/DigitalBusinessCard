import tw_logo from '../assets/Twitter Icon.png'
import fb_logo from '../assets/Facebook Icon.png'
import ig_logo from '../assets/Instagram Icon.png'
import in_logo from '../assets/Linkedin Icon.png'
import gh_logo from '../assets/GitHub Icon.png'

function Footer () {
    return (
        <footer>
            <img className="tw--logo" src={tw_logo} alt="twitter_logo" />
            <img className="fb--logo" src={fb_logo} alt="facebook_logo" />
            <img className="ig--logo" src={ig_logo} alt="instagram_logo" />
            <img className="li--logo" src={in_logo} alt="linkedin_logo" />
            <img className="gh--logo" src={gh_logo} alt="github_logo" />
        </footer>
    )
}

export default Footer