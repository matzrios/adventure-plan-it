import "./LocationsPage.scss";
import Dubai from "../../assets/images/dubai.png";
import HongKong from "../../assets/images/hongkong.jpeg";
import Niseko from "../../assets/images/niseko.jpg";
import Portland from "../../assets/images/portland.jpeg";
import Singapore from "../../assets/images/singapore.jpg";
import Vancouver from "../../assets/images/vancouver.webp";
import Home from "../../assets/icons/home.png";
import Back from "../../assets/icons/back.png";
import { Link } from "react-router-dom";

export default function LocationsPage() {
  return (
    <div className="locations-page--container">
      <div className="locations-page-title--container">
        <h2 className="locations-page-title">Locations</h2>
      </div>

      <div className="locations-page--navigation">
        <Link className="linkToPreviousPage" to={`/activities`}>
          <img src={Back} className="back-button" />
        </Link>
        <Link className="linkToHome" to={`/`}>
          <img src={Home} className="home-button" />
        </Link>
      </div>

      <div className="locations-page-cards--container">
        <div className="locations-page-cards">
          <div className="location-card">
            <img className="location-card--image" src={Dubai} alt="dubai" />
            <div className="location-card-detail--container">
              <h3 className="location-card--title">Dubai, Arab Emirates</h3>
              <p className="location-card--detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="locations-button--container">
                <Link className="linkToLocations" to={`/dubai`}>
                  <button className="locations-button">Select Location</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="location-card">
            <img className="location-card--image" src={HongKong} alt="Hong Kong" />
            <div className="location-card-detail--container">
              <h3 className="location-card--title">Hong Kong, China</h3>
              <p className="location-card--detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="locations-button--container">
                <Link className="linkToLocations" to={`/hongkong`}>
                  <button className="locations-button">Select Location</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="location-card">
            <img className="location-card--image" src={Niseko} alt="Niseko" />
            <div className="location-card-detail--container">
              <h3 className="location-card--title">Niseko, Japan</h3>
              <p className="location-card--detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="locations-button--container">
                <Link className="linkToLocations" to={`/niseko`}>
                  <button className="locations-button">Select Location</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="location-card">
            <img className="location-card--image" src={Portland} alt="portland" />
            <div className="location-card-detail--container">
              <h3 className="location-card--title">Portland, USA</h3>
              <p className="location-card--detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="locations-button--container">
                <Link className="linkToLocations" to={`/portland`}>
                  <button className="locations-button">Select Location</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="location-card">
            <img className="location-card--image" src={Singapore} alt="singapore" />
            <div className="location-card-detail--container">
              <h3 className="location-card--title">Singapore, Singapore</h3>
              <p className="location-card--detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="locations-button--container">
                <Link className="linkToLocations" to={`/singapore`}>
                  <button className="locations-button">Select Location</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="location-card">
            <img className="location-card--image" src={Vancouver} alt="vancouver" />
            <div className="location-card-detail--container">
              <h3 className="location-card--title">Vancouver, Canada</h3>
              <p className="location-card--detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="locations-button--container">
                <Link className="linkToLocations" to={`/vancouver`}>
                  <button className="locations-button">Select Location</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
