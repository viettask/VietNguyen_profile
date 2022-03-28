import profile from "./images/viet_aboutme.jpg";
import "./Info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';


export default function App() {
    return (
      <div >
          <img src={profile} alt="me" className="info_photo"/>
          <h1 className="info_name">Viet H. Nguyen</h1>
          <h3 className="info_title">Fullstack Developer</h3>
          <button type="button" className="info_email"><FontAwesomeIcon icon={faEnvelope} size="lg" className="info_icon"/>< a href="mailto:viet.nguyen@viettask.com">Email</a></button>
          <button type="button" className="info_ln"><FontAwesomeIcon icon={faLinkedin} size="lg" className="info_icon"/><a href="https://www.linkedin.com/in/viethuynhnguyen/">Linkedln</a></button>
      </div>
    );
  }

  //<i class="fab fa-linkedin-in"></i>