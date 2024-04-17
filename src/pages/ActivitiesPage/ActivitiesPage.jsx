import "./ActivitiesPage.scss";
import FrameTwo from "../../assets/images/Frame2.png";
import Skating from "../../assets/images/skating.png";
import Kayaking from "../../assets/images/kayak.png";
import Snowboarding from "../../assets/images/snowboarding.png";
import Hiking from "../../assets/images/hiking.png";
import Surfing from "../../assets/images/surfing.png";
import Sailing from "../../assets/images/sailing.png";
import Home from "../../assets/icons/home.png";
import Back from "../../assets/icons/back.png";
import { Link } from "react-router-dom";

export default function ActivitiesPage() {
  return (
    <div className="activities-page--container">
      <div className="activities-page-title--container">
        <h2 className="activities-page-title">Activities</h2>
      </div>

      <div className="activities-page--navigation">
        <Link className="linkToPreviousPage" to={`/`}>
          <img src={Back} className="back-button" />
        </Link>
        <Link className="linkToHome" to={`/`}>
          <img src={Home} className="home-button" />
        </Link>
      </div>

      <div className="activities-page-cards--container">
        <div className="activities-page-cards">
          <div className="activity-card">
            <img className="activity-card--image" src={Skating} alt="skating" />
            <p className="activity-card--title">Skating</p>
          </div>

          <div className="activity-card">
            <img
              className="activity-card--image"
              src={Kayaking}
              alt="kayaking"
            />
            <p className="activity-card--title">Kayaking</p>
          </div>

          <div className="activity-card">
            <img
              className="activity-card--image"
              src={Snowboarding}
              alt="snowboarding"
            />
            <p className="activity-card--title">Snowboarding</p>
          </div>

          <div className="activity-card">
            <img className="activity-card--image" src={Hiking} alt="hiking" />
            <p className="activity-card--title">Hiking</p>
          </div>

          <div className="activity-card">
            <img className="activity-card--image" src={Surfing} alt="surfing" />
            <p className="activity-card--title">Surfing</p>
          </div>

          <div className="activity-card">
            <img className="activity-card--image" src={Sailing} alt="sailing" />
            <p className="activity-card--title">Sailing</p>
          </div>
        </div>
        <div className="activities-page-instruction">
        <p className="instruction">Select One to Two Activities</p>
      </div>
        <div className="next-button--container">
          <Link className="linkToLocations" to={`/locations`}>
            <button className="next-button">Next</button>
          </Link>
        </div>
      </div>
      <div className="activities-country-collage--container">
        <img className="activities-country-collage" src={FrameTwo} alt="" />
      </div>
    </div>
  );
}
