import "./LandingPage.scss";
import FrameOne from "../../assets/images/Frame1.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="logo--container">
        <div className="logo">
          <h1 className="logo__text">Adventure Plant-It</h1>
        </div>
      </div>

      <div className="country-collage--container">
        <img className="country-collage" src={FrameOne} alt="country collage" />
      </div>

      <div className="get-started-button--container">
      <Link className="linkToActivities" to={`/activities`} >
        <button className="get-started-button">Ready to Start?</button>
        </Link>
      </div>
    </div>
  );
}
