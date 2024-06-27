import tw_icon from '../assets/Twitter Icon.png'
import fb_icon from '../assets/Facebook Icon.png'
import ig_icon from '../assets/Instagram Icon.png'
import gh_icon from '../assets/Github Icon.png'

function Footer() {

    return (
      <footer className="icons">
        <img className="icon--tw" src={tw_icon}/>
        <img className="icon--fb" src={fb_icon}/>
        <img className="icon--gr" src={ig_icon}/>
        <img className="icon--gh" src={gh_icon}/>
      </footer>
    )
  }
  
  export default Footer
  