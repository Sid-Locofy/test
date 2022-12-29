import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import Col1 from "../components/col1";
import "./homepage.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className="homepage">
          <div className="hero-section">
            <header className="top-header">
              <div className="top-container">
                <button className="fickleflight-logo">
                  <img className="symbols-icon" alt="" src="../symbols.svg" />
                </button>
                <div className="navigation-right">
                  <div className="navigation-menu">
                    <button className="explore">Explore</button>
                    <div className="search" onClick={onSearchTextClick}>
                      Search
                    </div>
                    <div className="search" onClick={onHotelsTextClick}>
                      Hotels
                    </div>
                    <button className="offers">Offers</button>
                  </div>
                  <div className="account-section">
                    <img
                      className="hamburger-menu-icon"
                      alt=""
                      src="../notification.svg"
                    />
                    <img
                      className="notification-bell-icon"
                      alt=""
                      src="../notification1.svg"
                    />
                    <img
                      className="profile-picture-icon"
                      alt=""
                      src="../top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="search-section">
              <div className="banner-gradient" />
              <img
                className="banner-background"
                alt=""
                src="../banner--background@2x.png"
              />
              <div className="search-container">
                <div className="title">
                  <div className="lets-explore-travel-the-wor">{`Let’s explore & travel the world`}</div>
                  <div className="find-the-best-destinations-and">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="search-form">
                  <div className="form-title-group">
                    <b className="search-flights">Search flights</b>
                    <div className="flight-options">
                      <div className="flight-type">
                        <FormControlLabel
                          className="radio"
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className="radio1"
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-inputs-row">
                    <div className="inputs-row">
                      <Autocomplete
                        className="departure-field"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)",
                          "Sanya (SYX)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                      <div className="arrival-field">
                        <div className="input">
                          <div className="label-container">
                            <div className="arrival">Arrival</div>
                          </div>
                          <div className="active">
                            <div className="muiautocompletetag">
                              <div className="chip">
                                <div className="container">
                                  <div className="avatar">
                                    <div className="op">F</div>
                                  </div>
                                  <div className="typography">
                                    <div className="chip1">Chip</div>
                                  </div>
                                  <img
                                    className="notification-bell-icon"
                                    alt=""
                                    src="../cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className="chip">
                                <div className="container">
                                  <div className="avatar">
                                    <div className="op">F</div>
                                  </div>
                                  <div className="typography">
                                    <div className="chip1">Chip</div>
                                  </div>
                                  <img
                                    className="notification-bell-icon"
                                    alt=""
                                    src="../cancel.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="los-angeles-la">
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="departure-field">
                        <DatePicker
                          label="Date"
                          value={selectOutlinedDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setSelectOutlinedDateTimePickerValue(newValue);
                          }}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              variant="outlined"
                              size="medium"
                              renderInput={{ placeholder: "01/05/2022" }}
                              helperText=""
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="button-group">
                      <div
                        className="search-flights-button"
                        onClick={onSearchFlightsButtonClick}
                      >
                        <div className="button">Search flights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contents">
            <div className="upcoming-flight-section">
              <div className="upcoming-flight-section1">
                <b className="recent-searches">Recent Searches</b>
                <div className="flight-details">
                  <div className="recent-searches1">
                    <div className="flight-main-container">
                      <div className="to-and-from">
                        <div className="from-details">
                          <b className="sin">SIN</b>
                        </div>
                        <img
                          className="duration-icon"
                          alt=""
                          src="../duration.svg"
                        />
                        <div className="to-details">
                          <b className="lax">LAX</b>
                        </div>
                      </div>
                      <div className="depart-on-7-sep-2021">
                        <b>{`Depart on: `}</b>
                        <span>7 Sep 2021</span>
                      </div>
                    </div>
                    <div className="flight-main-container">
                      <div className="to-and-from">
                        <div className="from-details">
                          <b className="sin">MY</b>
                        </div>
                        <img
                          className="duration-icon"
                          alt=""
                          src="../duration1.svg"
                        />
                        <div className="to-details">
                          <b className="lax">DUB</b>
                        </div>
                      </div>
                      <div className="depart-on-7-sep-2021">
                        <b>Depart on:</b>
                        <span> 9 Sep 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="prepare-menu">
                    <div className="recent-searches">Prepare for your trip</div>
                    <div className="trip-menus">
                      <button className="hotel" onClick={onHotelClick}>
                        <img
                          className="hotel-icon"
                          alt=""
                          src="../hotel-icon.svg"
                        />
                        <div className="hotel1">Hotel</div>
                      </button>
                      <button className="hotel">
                        <div className="hotel-icon">
                          <div className="background" />
                          <img
                            className="ticket-icon"
                            alt=""
                            src="../ticket.svg"
                          />
                        </div>
                        <div className="attractions1">Attractions</div>
                      </button>
                      <button className="hotel">
                        <img
                          className="hotel-icon"
                          alt=""
                          src="../eats-icon.svg"
                        />
                        <div className="attractions1">Eats</div>
                      </button>
                      <button className="hotel">
                        <div className="hotel-icon">
                          <div className="background1" />
                          <img
                            className="train-icon"
                            alt=""
                            src="../vector.svg"
                          />
                        </div>
                        <div className="attractions1">Commute</div>
                      </button>
                      <button className="hotel">
                        <div className="taxi-icon">
                          <div className="background2" />
                          <img
                            className="taxi-icon1"
                            alt=""
                            src="../vector1.svg"
                          />
                        </div>
                        <div className="taxi1">Taxi</div>
                      </button>
                      <button className="hotel">
                        <div className="hotel-icon">
                          <div className="background3" />
                          <img
                            className="movie-icon"
                            alt=""
                            src="../vector2.svg"
                          />
                        </div>
                        <div className="attractions1">Movies</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-destinations-main">
              <div className="destinations-titles">
                <div className="title-container">
                  <b className="recent-searches">Plan your next trip</b>
                  <b className="most-popular-destinations">
                    Most Popular Destinations
                  </b>
                </div>
                <button className="view-all-top">
                  <div className="view-all-destinations">
                    View all destinations
                  </div>
                  <img
                    className="notification-bell-icon"
                    alt=""
                    src="../arrowright.svg"
                  />
                </button>
              </div>
              <div className="cards-container">
                <Col1
                  parisImage="../parisimage@2x.png"
                  paris="Paris"
                  component="$699"
                />
                <Col1
                  parisImage="../greeceimage@2x.png"
                  paris="Greece"
                  detailsWidth="99.92px"
                  component="$1079"
                  componentWidth="unset"
                  fromLeft="47.39px"
                />
                <Col1
                  parisImage="../norwayimage@2x.png"
                  paris="Norway"
                  component="$895"
                />
                <Col1
                  parisImage="../tuscanyimage@2x.png"
                  paris="Tuscany"
                  detailsWidth="100.62px"
                  component="$1245"
                  componentWidth="100.62px"
                  fromLeft="48.09px"
                />
              </div>
              <div className="view-all-bottom">
                <div className="view-all-destinations1">
                  View all destinations
                </div>
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="../arrowright1.svg"
                />
              </div>
            </div>
            <div className="recommended-holidays-container">
              <div className="rec-title">
                <b className="recommended-holidays">Recommended Holidays</b>
                <button className="view-all-holidays-parent">
                  <div className="view-all-holidays">View all holidays</div>
                  <img
                    className="notification-bell-icon"
                    alt=""
                    src="../arrowright2.svg"
                  />
                </button>
              </div>
              <div className="rec-cards-container">
                <button className="rec-card-1">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="../unsplash5mv818tzxeo@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Bali</div>
                        <div className="d3n">4D3N</div>
                      </div>
                      <div className="div">$899</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-1">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="../switzerlandimage@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Swiss</div>
                        <div className="d3n">6D5N</div>
                      </div>
                      <div className="div">$900</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-3">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="../boracayimage@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Boracay</div>
                        <div className="d3n">5D4N</div>
                      </div>
                      <div className="div">$699</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-4">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="../palawanimage@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Palawan</div>
                        <div className="d3n">4D3N</div>
                      </div>
                      <div className="div">$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="view-all-bottom1">
                <div className="view-all-holidays1">View all holidays</div>
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="../arrowright3.svg"
                />
              </div>
            </div>
            <div className="popular-stays">
              <div className="popular-stays-header">
                <div className="popular-stays-title">
                  <b className="popular-stays1">Popular Stays</b>
                </div>
                <button
                  className="view-all-stays-button"
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className="view-all-stays">View all stays</div>
                  <img
                    className="notification-bell-icon"
                    alt=""
                    src="../arrowright4.svg"
                  />
                </button>
              </div>
              <div className="hotel-cards">
                <div className="hotel-card-1">
                  <div className="hotel-card">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="../unsplashrlwe8f8anoc@2x.png"
                    />
                    <div className="stay-details">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">Entire bungalow</div>
                        <b className="matterhorn-suites">Matterhorn Suites</b>
                        <div className="night">$575/night</div>
                      </div>
                      <img
                        className="video-icon"
                        alt=""
                        src="../video.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className="rating">
                      <div className="reviews">(60 reviews)</div>
                      <div className="parent">
                        <div className="div4">4.9</div>
                        <img
                          className="vector-icon"
                          alt=""
                          src="../vector3.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </div>
                </div>
                <div className="hotel-card-1">
                  <div className="hotel-card">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="../unsplashtsn8bpopveo@2x.png"
                    />
                    <div className="stay-details1">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">
                          2-Story beachfront suite
                        </div>
                        <b className="matterhorn-suites">Discovery Shores</b>
                        <div className="night">$360/night</div>
                      </div>
                      <img
                        className="video-icon"
                        alt=""
                        src="../video1.svg"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className="rating">
                      <div className="reviews">(116 reviews)</div>
                      <div className="parent">
                        <div className="div4">4.8</div>
                        <img
                          className="vector-icon"
                          alt=""
                          src="../vector4.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </div>
                </div>
                <div className="hotel-card-1">
                  <div className="hotel-card2">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="../unsplashrlwe8f8anoc1@2x.png"
                    />
                    <div className="stay-details2">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">Single deluxe hut</div>
                        <b className="arctic-hut">{`Arctic Hut `}</b>
                        <div className="night">$420/night</div>
                      </div>
                      <img
                        className="video-icon"
                        alt=""
                        src="../video1.svg"
                        onClick={openMatterhornPopup2}
                      />
                    </div>
                    <div className="rating">
                      <div className="reviews2">(78 reviews)</div>
                      <div className="group-div">
                        <div className="div6">4.7</div>
                        <img
                          className="vector-icon2"
                          alt=""
                          src="../vector5.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </div>
                </div>
                <div className="hotel-card-4">
                  <div className="hotel-card3">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="../unsplashyqrybvxug5q@2x.png"
                    />
                    <div className="stay-details">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">Deluxe King Room</div>
                        <b className="arctic-hut">Lake Louise Inn</b>
                        <div className="night">$244/night</div>
                      </div>
                      <img
                        className="video-icon"
                        alt=""
                        src="../video.svg"
                        onClick={openMatterhornPopup3}
                      />
                    </div>
                    <div className="rating">
                      <div className="reviews">(63 reviews)</div>
                      <div className="parent">
                        <div className="div4">4.6</div>
                        <img
                          className="vector-icon"
                          alt=""
                          src="../vector6.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mobile-view-all-stays">
                <div className="view-all-stays1">View all stays</div>
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="../arrowright5.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="subscribe-section">
              <img
                className="subscribe-section-background"
                alt=""
                src="../subscribe-section-background@2x.png"
              />
              <div className="share-your-travels-form">
                <div className="form-header">
                  <b className="recent-searches">subscribe to our newsletter</b>
                  <b className="form-title">Get weekly updates</b>
                </div>
                <div className="form">
                  <div className="form-text">
                    <div className="fill-in-your-details-to-join-t">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="form-text">
                      <TextField
                        className="input1"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="form-text">
                      <TextField
                        className="input1"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="button5">
                    <div className="unstyledbutton">
                      <div className="button6">submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="fickleflight-bio">
                <img className="logo-icon" alt="" src="../logo.svg" />
                <div className="fickle-flight-is-your-one-stop">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="social-icons"
                  alt=""
                  src="../social-icons.svg"
                />
              </div>
              <div className="footer-child" />
              <div className="footer-links">
                <div className="company">
                  <div className="about-us">About Us</div>
                  <div className="company1">Company</div>
                  <div className="news">News</div>
                  <div className="careers">Careers</div>
                  <div className="how-we-work">How we work</div>
                </div>
                <div className="company">
                  <div className="account">Account</div>
                  <div className="support1">Support</div>
                  <div className="support-center">Support Center</div>
                  <div className="faq">FAQ</div>
                  <div className="accessibility">Accessibility</div>
                </div>
                <div className="more">
                  <div className="covid-advisory">Covid Advisory</div>
                  <div className="more1">More</div>
                  <div className="airline-fees">Airline Fees</div>
                  <div className="tips">Tips</div>
                  <div className="how-we-work">Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
        {isMatterhornPopup2Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup2}
          >
            <MatterhornPopup onClose={closeMatterhornPopup2} />
          </PortalPopup>
        )}
        {isMatterhornPopup3Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup3}
          >
            <MatterhornPopup onClose={closeMatterhornPopup3} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default Homepage;
