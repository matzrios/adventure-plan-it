import "./HongKongPage.scss";
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
import HKHiking from "../../assets/images/hongkong-maps/hongkong-hiking.png";
import HKHKayak from "../../assets/images/hongkong-maps/hongkong-kayak.png";
import HKHotels from "../../assets/images/hongkong-maps/hongkong-hotels.png";

export default function HongKongPage() {
  const backgroundImage =
    "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url(" +
    HongKong +
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
        <p className="hongkong-city-title">Hong Kong</p>
        <p className="hongkong-country-title">China</p>
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
              src={Hiking}
              alt="hiking"
            />
            <p className="location-activity-card--title">Hiking</p>
          </div>

          <div className="location-activity-card">
            <img
              className="location-activity-card--image"
              src={Kayaking}
              alt="kayaking"
            />
            <p className="location-activity-card--title">Kayaking</p>
          </div>
        </div>
      </div>
      <div className="activity-location-maps--container">
        <div className="activity-location-maps">
          <div className="activity-location-map">
            <p className="activity-location-map--title">Hiking Locations</p>
            <img
              className="activity-location-map--image"
              src={HKHiking}
              alt="hiking map"
            />
            <div className="activity-location-button--container">
              <button
                role="link"
                onClick={() => openInNewTab("https://www.google.com/maps/search/hong+kong+hiking/@22.29195,114.1802443,12z/data=!3m1!4b1?entry=ttu")}
                className="activity-location-button"
              >
                Open in Maps
              </button>
            </div>
          </div>
          <div className="activity-location-map">
            <p className="activity-location-map--title">Kayaking Locations</p>
            <img
              className="activity-location-map--image"
              src={HKHKayak}
              alt="kayaking map"
            />
            <div className="activity-location-button--container">
              <button
                role="link"
                onClick={() => openInNewTab("https://www.google.com/maps/search/hong+kong+kayak/@22.2919916,114.1802444,12z/data=!3m1!4b1?entry=ttu")}
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
              src={HKHotels}
              alt="hotels map"
            />
            <div className="activity-location-button--container">
              <button
                role="link"
                onClick={() => openInNewTab("https://www.google.com/maps/search/hong+kong+hotels/@22.3056508,114.1609562,14z/data=!3m1!4b1?entry=ttu")}
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
