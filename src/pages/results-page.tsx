import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import "./results-page.css";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="results-page">
        <header className="top-header1">
          <div className="top-container1">
            <button
              className="fickleflight-logo1"
              onClick={onFickleflightLogoClick}
            >
              <img className="symbols-icon1" alt="" src="../symbols1.svg" />
            </button>
            <div className="navigation-right1">
              <div className="navigation-menu1">
                <div className="explore1" onClick={onExploreTextClick}>
                  Explore
                </div>
                <button className="search1">Search</button>
                <div className="explore1" onClick={onHotelsTextClick}>
                  Hotels
                </div>
                <button className="offers1">Offers</button>
              </div>
              <div className="account-section1">
                <img
                  className="hamburger-menu-icon1"
                  alt=""
                  src="../notification.svg"
                />
                <img
                  className="notification-bell-icon1"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="unsplashd1upkifd04a-icon"
                  alt=""
                  src="../top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="search-form-section">
          <div className="search-container1">
            <div className="banner-gradient1" />
            <img
              className="banner-background-icon"
              alt=""
              src="../banner-background@2x.png"
            />
            <div className="search-section1">
              <div className="title1">
                <div className="where-are-you-off-too">
                  Where are you off too?
                </div>
              </div>
              <div className="search-form1">
                <div className="inputs-row1">
                  <div className="input-group">
                    <Autocomplete
                      className="date-field"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
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
                  </div>
                  <div className="input-group">
                    <Autocomplete
                      className="date-field"
                      sx={{ width: "100%" }}
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                      size="medium"
                    />
                  </div>
                  <div className="input-group">
                    <div className="date-field">
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
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
                </div>
                <div className="button-group1">
                  <button className="search-flights-button1">
                    <div className="button7">Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-results">
          <div className="search-filters">
            <div className="results-summary">
              <div className="results-parent">
                <div className="results">10 out of 177 Results</div>
                <img className="frame-child" alt="" src="../vector-2.svg" />
              </div>
            </div>
            <div className="stops">
              <b className="results1">Stops</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="booking-options">
              <b className="results2">Booking Options</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="flight-experience">
              <b className="results3">Flight Experience</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <img className="frame-child" alt="" src="../vector-2.svg" />
            <div className="airlines">
              <b className="results4">Airlines</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
          </div>
          <div className="results-section">
            <div className="flight-cards">
              <div className="results5">10 out of 177 Results</div>
              <div className="flight-card">
                <div className="airline-section">
                  <img className="turkish-icon" alt="" src="../turkish.svg" />
                  <div className="singapore-airlines">Turkish Airlines</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">11:35 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration">
                    <img
                      className="flighticon"
                      alt=""
                      src="../flighticon.svg"
                    />
                    <div className="h-55m-non-stop">33H 10M, 1-stop</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am">4:45 PM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="../vector-1.svg"
                  />
                  <b className="s-730">S$ 723</b>
                </div>
              </div>
              <div className="flight-card">
                <div className="airline-section">
                  <img className="turkish-icon" alt="" src="../sia.svg" />
                  <div className="singapore-airlines">Singapore Airlines</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">8:45 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration1">
                    <img
                      className="flighticon1"
                      alt=""
                      src="../flighticon.svg"
                    />
                    <div className="h-55m-non-stop">15H 10M, 2-stops</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am">7:55 PM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="../vector-1.svg"
                  />
                  <b className="s-730">S$ 900</b>
                </div>
              </div>
              <div className="flight-card">
                <div className="airline-section">
                  <img className="japan-icon" alt="" src="../japan.svg" />
                  <div className="singapore-airlines">Japan Airlines</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">8:20 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration">
                    <img
                      className="flighticon"
                      alt=""
                      src="../flighticon.svg"
                    />
                    <div className="h-55m-non-stop">17H 30M, 1-stop</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am">9:50 PM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="../vector-1.svg"
                  />
                  <b className="s-730">S$ 859</b>
                </div>
              </div>
              <div className="flight-card">
                <div className="airline-section">
                  <img className="japan-icon" alt="" src="../ana.svg" />
                  <div className="singapore-airlines">ANA</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">6:35 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration">
                    <img
                      className="flighticon"
                      alt=""
                      src="../flighticon.svg"
                    />
                    <div className="h-55m-non-stop">19H 15M, 1-stop</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am">9:50 PM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="../vector-1.svg"
                  />
                  <b className="s-730">S$ 936</b>
                </div>
              </div>
              <div className="flight-card">
                <div className="airline-section">
                  <img
                    className="american-airlines-icon"
                    alt=""
                    src="../americanairlines.svg"
                  />
                  <div className="singapore-airlines">American Airlines</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">8:20 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration">
                    <img
                      className="flighticon"
                      alt=""
                      src="../flighticon.svg"
                    />
                    <div className="h-55m-non-stop">17H 30M, 1-stop</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am">9:50 PM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="../vector-1.svg"
                  />
                  <b className="s-730">S$ 936</b>
                </div>
              </div>
              <div className="flight-card">
                <div className="airline-section">
                  <img className="turkish-icon" alt="" src="../turkish1.svg" />
                  <div className="singapore-airlines">Turkish Airlines</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">11:35 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration">
                    <img
                      className="flighticon"
                      alt=""
                      src="../flighticon.svg"
                    />
                    <div className="h-55m-non-stop">33H 10M, 1-stop</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am">4:45 PM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="../vector-1.svg"
                  />
                  <b className="s-730">S$ 673</b>
                </div>
              </div>
              <div className="flight-card">
                <div className="airline-section">
                  <img className="japan-icon" alt="" src="../japan1.svg" />
                  <div className="singapore-airlines">Japan Airlines</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">10:25 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration">
                    <img
                      className="flighticon"
                      alt=""
                      src="../flighticon.svg"
                    />
                    <div className="h-55m-non-stop">26H 45M, 1-stop</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am">9:10 AM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="../vector-1.svg"
                  />
                  <b className="s-730">S$ 859</b>
                </div>
              </div>
              <div className="primary-button">
                <div className="primary-button-child" />
                <div className="search-flights1">Show more results</div>
              </div>
            </div>
            <div className="recently-booked">
              <div className="recently-booked-title">
                <b className="results6">Recently booked</b>
                <img
                  className="recently-booked-title-child"
                  alt=""
                  src="../vector-21.svg"
                />
              </div>
              <div className="booking-cards">
                <div className="booking-card">
                  <div className="airline-price">
                    <div className="airline">
                      <img
                        className="airlinelogo-icon"
                        alt=""
                        src="../icon.svg"
                      />
                      <div className="flightclass">Singapore Airlines</div>
                    </div>
                    <div className="price">$1128</div>
                  </div>
                  <div className="locations">
                    <div className="departure">
                      <div className="depcode">SIN</div>
                      <div className="depname">Singapore</div>
                    </div>
                    <img
                      className="flight-icon"
                      alt=""
                      src="../flight-icon.svg"
                    />
                    <div className="arrival1">
                      <div className="depcode">LAX</div>
                      <div className="arrname">Los Angeles</div>
                    </div>
                  </div>
                  <div className="details2">
                    <div className="class">
                      <img
                        className="class-icon"
                        alt=""
                        src="../class-icon.svg"
                      />
                      <div className="flightclass">Economy</div>
                    </div>
                    <div className="class">
                      <img
                        className="class-icon"
                        alt=""
                        src="../calender.svg"
                      />
                      <div className="flightclass">2 Adults</div>
                    </div>
                  </div>
                  <div className="provider">
                    <div className="flightclass">
                      <span>{`Booked on `}</span>
                      <span className="expedia">Expedia</span>
                    </div>
                    <div className="timeago">1s ago!</div>
                  </div>
                </div>
                <div className="booking-card">
                  <div className="airline-price">
                    <div className="airline">
                      <img
                        className="airlinelogo-icon"
                        alt=""
                        src="../icon1.svg"
                      />
                      <div className="flightclass">American Airlines</div>
                    </div>
                    <div className="price">$1024</div>
                  </div>
                  <div className="locations">
                    <div className="departure">
                      <div className="depcode">SFO</div>
                      <div className="depname">San Francisco</div>
                    </div>
                    <img
                      className="flight-icon"
                      alt=""
                      src="../flight-icon.svg"
                    />
                    <div className="arrival1">
                      <div className="depcode">SIN</div>
                      <div className="arrname">Singapore</div>
                    </div>
                  </div>
                  <div className="details2">
                    <div className="class">
                      <img
                        className="class-icon"
                        alt=""
                        src="../class-icon.svg"
                      />
                      <div className="flightclass">First Class</div>
                    </div>
                    <div className="class">
                      <img
                        className="class-icon"
                        alt=""
                        src="../calender1.svg"
                      />
                      <div className="flightclass">1 Adults</div>
                    </div>
                  </div>
                  <div className="provider">
                    <div className="flightclass">
                      <span>{`Booked on `}</span>
                      <span className="expedia">Kayak</span>
                    </div>
                    <div className="timeago">2s ago!</div>
                  </div>
                </div>
                <div className="booking-card">
                  <div className="airline-price">
                    <div className="airline">
                      <img
                        className="airlinelogo-icon"
                        alt=""
                        src="../icon2.svg"
                      />
                      <div className="flightclass">Japan Airlines</div>
                    </div>
                    <div className="price">$2996</div>
                  </div>
                  <div className="locations">
                    <div className="departure">
                      <div className="depcode">PHX</div>
                      <div className="depname">Phoenix</div>
                    </div>
                    <img
                      className="flight-icon"
                      alt=""
                      src="../flight-icon2.svg"
                    />
                    <div className="arrival1">
                      <div className="depcode">DXB</div>
                      <div className="depname">Dubai</div>
                    </div>
                  </div>
                  <div className="details2">
                    <div className="class">
                      <img
                        className="class-icon"
                        alt=""
                        src="../class-icon2.svg"
                      />
                      <div className="flightclass">Economy</div>
                    </div>
                    <div className="class">
                      <img
                        className="class-icon"
                        alt=""
                        src="../calender2.svg"
                      />
                      <div className="flightclass">3 Adults</div>
                    </div>
                  </div>
                  <div className="provider">
                    <div className="flightclass">
                      <span>{`Booked on `}</span>
                      <span className="expedia">Skyscanner</span>
                    </div>
                    <div className="timeago">3s ago!</div>
                  </div>
                </div>
                <div className="show-more">
                  <div className="flightclass">Show more</div>
                  <img className="class-icon" alt="" src="../icon--back.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section1">
          <div className="footer-section2">
            <div className="newsletter-form-section">
              <img
                className="newsletter-section-background"
                alt=""
                src="../newsletter-section-background@2x.png"
              />
              <div className="subscribe-form">
                <div className="form-header1">
                  <b className="results6">subscribe to our newsletter</b>
                  <b className="form-title1">Get weekly updates</b>
                </div>
                <div className="form1">
                  <div className="form-text1">
                    <div className="fill-in-your-details-to-join-t1">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="form-fields1">
                    <div className="form-text1">
                      <TextField
                        className="input3"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="form-text1">
                      <TextField
                        className="input3"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="button8">
                    <div className="unstyledbutton1">
                      <div className="button9">submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="footer1">
              <div className="fickleflight-bio1">
                <img className="logo-icon1" alt="" src="../logo1.svg" />
                <div className="fickle-flight-is-your-one-stop1">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="social-icons1"
                  alt=""
                  src="../social-icons1.svg"
                />
              </div>
              <div className="seperator" />
              <div className="footer-links1">
                <div className="company2">
                  <div className="about-us1">About Us</div>
                  <div className="company3">Company</div>
                  <div className="news1">News</div>
                  <div className="careers1">Careers</div>
                  <div className="how-we-work1">How we work</div>
                </div>
                <div className="company2">
                  <div className="account1">Account</div>
                  <div className="support3">Support</div>
                  <div className="support-center1">Support Center</div>
                  <div className="faq1">FAQ</div>
                  <div className="accessibility1">Accessibility</div>
                </div>
                <div className="more2">
                  <div className="covid-advisory1">Covid Advisory</div>
                  <div className="more3">More</div>
                  <div className="airline-fees1">Airline Fees</div>
                  <div className="tips1">Tips</div>
                  <div className="how-we-work1">Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
