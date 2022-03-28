import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <div className="footer_frame">
           <button type="button" className="footer_icon">< a href="https://www.facebook.com/viettasker/"><FontAwesomeIcon icon={faFacebookF} size="lg" className=""/></a></button>
           <button type="button" className="footer_icon">< a href="https://github.com/viettask/viettask.github.io"><FontAwesomeIcon icon={faGithub} size="lg" className=""/></a></button>
      </div>
    );
  }