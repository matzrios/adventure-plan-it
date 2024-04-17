import "./VancouverPage.scss";
import Dubai from "../../assets/images/dubai.png";
import HongKong from "../../assets/images/hongkong.jpeg";
import Niseko from "../../assets/images/niseko.jpg";
import Portland from "../../assets/images/portland.jpeg";
import Singapore from "../../assets/images/singapore.png";
import Vancouver from "../../assets/images/vancouver.webp";
import Home from "../../assets/icons/home.png";
import Back from "../../assets/icons/back.png";
import { Link } from "react-router-dom";
import Skating from "../../assets/images/skating.png";
import Kayaking from "../../assets/images/kayak.png";
import Snowboarding from "../../assets/images/snowboarding.png";
import Hiking from "../../assets/images/hiking.png";
import Surfing from "../../assets/images/surfing.png";
import Sailing from "../../assets/images/sailing.png";
import SurfingLocation from "../../assets/images/dubai-surfing-map.png";
import SailingLocation from "../../assets/images/dubai-sailing-map.png";
import DubaiHotelLocation from "../../assets/images/dubai-hotels-map.png";

export default function VancouverPage() {
  const backgroundImage =
    "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(" +
    Vancouver +
    ")";
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div
      className="location-detail-page--container"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="location-detail-title--container">
        <p className="vancouver-city-title">Vancouver</p>
        <p className="vancouver-country-title">Canada</p>
      </div>

      <div className="activities-page--navigation">
        <Link className="linkToPreviousPage" to={`/locations`}>
          <img src={Back} className="back-button" />
        </Link>
        <Link className="linkToHome" to={`/`}>
          <img src={Home} className="home-button" />
        </Link>
      </div>

      <div className="location-activities-title--container">
        <p className="location-activities-title">Activities</p>
      </div>
      <div className="location-activities-cards--container">
        <div className="location-activities-cards">
          <div className="location-activity-card">
            <img
              className="location-activity-card--image"
              src={Surfing}
              alt="surfing"
            />
            <p className="location-activity-card--title">Surfing</p>
          </div>

          <div className="location-activity-card">
            <img
              className="location-activity-card--image"
              src={Sailing}
              alt="sailing"
            />
            <p className="location-activity-card--title">Sailing</p>
          </div>
        </div>
      </div>
      <div className="activity-location-maps--container">
        <div className="activity-location-maps">
          <div className="activity-location-map">
            <p className="activity-location-map--title">Surfing Locations</p>
            <img
              className="activity-location-map--image"
              src={SurfingLocation}
              alt="surfing map"
            />
            <div className="activity-location-button--container">
              <button
                role="link"
                onClick={() => openInNewTab("https://www.google.com/maps")}
                className="activity-location-button"
              >
                Open in Maps
              </button>
            </div>
          </div>
          <div className="activity-location-map">
            <p className="activity-location-map--title">Sailing Locations</p>
            <img
              className="activity-location-map--image"
              src={SailingLocation}
              alt="sailing map"
            />
            <div className="activity-location-button--container">
              <button
                role="link"
                onClick={() => openInNewTab("https://www.google.com/maps")}
                className="activity-location-button"
              >
                Open in Maps
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hotels-location-maps--container">
        <div className="hotels-location-maps">
          <div className="hotels-location-map">
            <p className="hotels-location-map--title">Hotel Locations</p>
            <img
              className="hotels-location-map--image"
              src={DubaiHotelLocation}
              alt="surfing map"
            />
            <div className="activity-location-button--container">
              <button
                role="link"
                onClick={() => openInNewTab("https://www.google.com/maps")}
                className="activity-location-button"
              >
                Open in Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
