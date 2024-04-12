import "./ActivitiesPage.scss";
import FrameTwo from "../../assets/images/Frame2.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="activities-page--container">
      <div className="activities-page-title--container">
        <h2 className="activities-page-title">Activities</h2>
      </div>

      <div className="activities-country-collage--container">
            <img className="activities-country-collage" src={FrameTwo} alt="" />
      </div>
    </div>
  );
}
