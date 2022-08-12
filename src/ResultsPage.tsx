import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./css/ResultsPage.module.css";

export const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [inputDateTimePickerValue, setInputDateTimePickerValue] = useState<
    string | null
  >(null);

  const onWebLogo1ButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.resultsPageDiv}>
        <header className={styles.topHeader}>
          <div className={styles.topContainerDiv}>
            <button
              className={styles.webLogo1Button}
              onClick={onWebLogo1ButtonClick}
            >
              <img className={styles.symbolsIcon} alt="" src="symbols.svg" />
            </button>
            <div className={styles.frameDiv}>
              <div className={styles.frameDiv1}>
                <div className={styles.exploreDiv}>Explore</div>
                <div className={styles.searchDiv}>Search</div>
                <div className={styles.searchDiv}>Hotels</div>
                <div className={styles.searchDiv}>Offers</div>
              </div>
              <div className={styles.frameDiv2}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="notification.svg"
                />
                <img
                  className={styles.bellIcon}
                  alt=""
                  src="notification1.svg"
                />
                <img
                  className={styles.unsplashd1UPkiFd04AIcon}
                  alt=""
                  src="top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.searchFormSection}>
          <div className={styles.frameDiv3}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.unsplashe8e4YY65sOkIcon}
              alt=""
              src="unsplashe8e4yy65sok1@2x.png"
            />
            <div className={styles.frameDiv4}>
              <div className={styles.frameDiv5}>
                <div className={styles.whereAreYouOffToo}>
                  Where are you off too?
                </div>
              </div>
              <div className={styles.frameDiv6}>
                <div className={styles.frameDiv7}>
                  <b className={styles.searchFlightsB}>Search flights</b>
                  <div className={styles.frameDiv8}>
                    <div className={styles.flightTypeDiv}>
                      <FormControlLabel
                        className={styles.radioFormControlLabel}
                        label="Return"
                        labelPlacement="end"
                        control={<Radio color="info" size="medium" />}
                      />
                      <FormControlLabel
                        className={styles.radioFormControlLabel1}
                        label="One-way"
                        labelPlacement="end"
                        control={<Radio checked size="medium" />}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv9}>
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <Autocomplete
                        className={styles.selectOutlinedAutocomplete}
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
                    <div className={styles.frameDiv11}>
                      <Autocomplete
                        className={styles.selectOutlinedAutocomplete}
                        disablePortal
                        options={[] as any}
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
                    <div className={styles.frameDiv11}>
                      <div className={styles.selectOutlinedDiv}>
                        <div className={styles.selectOutlinedAutocomplete}>
                          <DatePicker
                            label="Date"
                            value={inputDateTimePickerValue}
                            onChange={(newValue: any) => {
                              setInputDateTimePickerValue(newValue);
                            }}
                            renderInput={(params: any) => (
                              <TextField
                                {...params}
                                color="primary"
                                variant="standard"
                                size="medium"
                                renderInput={{ placeholder: "01/05/2022" }}
                                helperText=""
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv14}>
                    <button className={styles.button}>
                      <div className={styles.buttonDiv}>Search flights</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchResultsDiv}>
          <div className={styles.searchFiltersDiv}>
            <div className={styles.resultsSummaryDiv}>
              <div className={styles.resultsDiv}>10 out of 177 Results</div>
              <img className={styles.vectorIcon} alt="" src="vector-2.svg" />
            </div>
            <div className={styles.bookingOptionsDiv}>
              <b className={styles.resultsB}>Booking Options</b>
              <div className={styles.component1formcheckboxDiv}>
                <FormControlLabel
                  className={styles.component1FormControlLabel}
                  label=""
                  control={<Checkbox color="primary" size="medium" />}
                />
                <div className={styles.singaporeAirlinesDiv}>
                  Book on Fickleflight
                </div>
              </div>
              <div className={styles.component1formcheckboxDiv1}>
                <FormControlLabel
                  className={styles.component1FormControlLabel}
                  label=""
                  control={
                    <Checkbox color="primary" defaultChecked size="medium" />
                  }
                />
                <div className={styles.singaporeAirlinesDiv}>
                  Official Airline Websites
                </div>
              </div>
            </div>
            <div className={styles.flightExperienceDiv}>
              <b className={styles.resultsB}>Flight Experience</b>
              <div className={styles.component1formcheckboxDiv}>
                <FormControlLabel
                  className={styles.component1FormControlLabel}
                  label=""
                  control={<Checkbox color="primary" size="medium" />}
                />
                <div className={styles.resultsDiv3}>No overnight flights</div>
              </div>
              <div className={styles.component1formcheckboxDiv1}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv1} />
                </div>
                <div className={styles.resultsDiv4}>No long stop-overs</div>
              </div>
            </div>
            <div className={styles.airlinesDiv}>
              <b className={styles.resultsB}>Airlines</b>
              <div className={styles.component1formcheckboxDiv}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv1} />
                </div>
                <div className={styles.singaporeAirlinesDiv}>
                  Singapore Airlines
                </div>
              </div>
              <div className={styles.component1formcheckboxDiv1}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv1} />
                </div>
                <div className={styles.singaporeAirlinesDiv}>Qatar Airways</div>
              </div>
            </div>
            <div className={styles.stopsDiv}>
              <b className={styles.resultsB}>Stops</b>
              <div className={styles.component1formcheckboxDiv6}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv1} />
                </div>
                <div className={styles.singaporeAirlinesDiv}>1 Stop</div>
              </div>
              <div className={styles.component1formcheckboxDiv1}>
                <div className={styles.component1Div}>
                  <div className={styles.rectangleDiv1} />
                </div>
                <div className={styles.resultsDiv8}>2 Stops</div>
              </div>
            </div>
            <img className={styles.vectorIcon1} alt="" src="vector-5.svg" />
          </div>
          <div className={styles.flightCardsDiv}>
            <div className={styles.flightCardDiv}>
              <div className={styles.frameDiv15}>
                <img className={styles.turkishIcon} alt="" src="turkish.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Turkish Airlines
                </div>
              </div>
              <div className={styles.frameDiv16}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>11:35 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="group-675.svg"
                  />
                  <div className={styles.h55MNonStop}>33H 10M, 1-stop</div>
                </div>
                <div className={styles.groupDiv2}>
                  <div className={styles.pMDiv}>4:45 PM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 723</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv15}>
                <img className={styles.turkishIcon} alt="" src="sia.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Singapore Airlines
                </div>
              </div>
              <div className={styles.frameDiv19}>
                <div className={styles.groupDiv3}>
                  <div className={styles.aMDiv}>8:45 PM</div>
                  <div className={styles.sINDiv1}>SIN</div>
                </div>
                <div className={styles.groupDiv4}>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="group-6751.svg"
                  />
                  <div className={styles.h55MNonStop}>15H 10M, Non-stop</div>
                </div>
                <div className={styles.groupDiv5}>
                  <div className={styles.pMDiv}>7:55 PM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B1}>S$ 900</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv15}>
                <img className={styles.japanIcon} alt="" src="japan.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Japan Airlines
                </div>
              </div>
              <div className={styles.frameDiv19}>
                <div className={styles.groupDiv3}>
                  <div className={styles.aMDiv}>8:20 PM</div>
                  <div className={styles.sINDiv1}>SIN</div>
                </div>
                <div className={styles.groupDiv7}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="group-6752.svg"
                  />
                  <div className={styles.h55MNonStop}>17H 30M, Non-stop</div>
                </div>
                <div className={styles.groupDiv5}>
                  <div className={styles.pMDiv}>9:50 AM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv15}>
                <img className={styles.japanIcon} alt="" src="ana.svg" />
                <div className={styles.singaporeAirlinesDiv}>ANA</div>
              </div>
              <div className={styles.frameDiv19}>
                <div className={styles.groupDiv3}>
                  <div className={styles.aMDiv}>6:35 PM</div>
                  <div className={styles.sINDiv1}>SIN</div>
                </div>
                <div className={styles.groupDiv7}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="group-6752.svg"
                  />
                  <div className={styles.h55MNonStop}>19H 15M, Non-stop</div>
                </div>
                <div className={styles.groupDiv5}>
                  <div className={styles.pMDiv}>9:50 AM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 936</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv15}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="americanairlines.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  American Airlines
                </div>
              </div>
              <div className={styles.frameDiv19}>
                <div className={styles.groupDiv3}>
                  <div className={styles.aMDiv}>8:20 PM</div>
                  <div className={styles.sINDiv1}>SIN</div>
                </div>
                <div className={styles.groupDiv7}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="group-6752.svg"
                  />
                  <div className={styles.h55MNonStop}>17H 30M, 1-stop</div>
                </div>
                <div className={styles.groupDiv5}>
                  <div className={styles.pMDiv}>9:50 AM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 939</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv15}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="turkish.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  Turkish Airlines
                </div>
              </div>
              <div className={styles.frameDiv19}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>11:35 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv7}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="group-6752.svg"
                  />
                  <div className={styles.h55MNonStop}>33H 10M, 1-stop</div>
                </div>
                <div className={styles.groupDiv5}>
                  <div className={styles.pMDiv}>4:45 PM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 673</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv15}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="japan.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  Japan Airlines
                </div>
              </div>
              <div className={styles.frameDiv19}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>10:25 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv7}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="group-6752.svg"
                  />
                  <div className={styles.h55MNonStop}>26H 45M, 1-stop</div>
                </div>
                <div className={styles.groupDiv5}>
                  <div className={styles.pMDiv}>9:10 AM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.frameDiv15}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="americanairlines1.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  American Airlines
                </div>
              </div>
              <div className={styles.frameDiv19}>
                <div className={styles.groupDiv}>
                  <div className={styles.aMDiv}>10:25 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.groupDiv7}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="group-6752.svg"
                  />
                  <div className={styles.h55MNonStop}>26H 45M, 1-stop</div>
                </div>
                <div className={styles.groupDiv5}>
                  <div className={styles.pMDiv}>9:10 AM</div>
                  <div className={styles.lAXDiv}>LAX</div>
                </div>
              </div>
              <div className={styles.frameDiv17}>
                <img className={styles.vectorIcon2} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.primaryButtonDiv}>
              <div className={styles.rectangleDiv6} />
              <div className={styles.searchFlightsDiv}>Show more results</div>
            </div>
          </div>
        </div>
        <div className={styles.footerSectionDiv}>
          <div className={styles.frameDiv39}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="rectangle-1862@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeaderDiv}>
                <b className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitleB}>Get weekly updates</b>
              </div>
              <div className={styles.formDiv}>
                <div className={styles.formTextDiv}>
                  <div className={styles.fillInYourDetailsToJoinT}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFieldsDiv}>
                  <div className={styles.formTextDiv}>
                    <TextField
                      className={styles.inputTextField}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.formTextDiv}>
                    <TextField
                      className={styles.inputTextField}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className={styles.button1}>
                  <div className={styles.unstyledButtonDiv}>
                    <div className={styles.buttonDiv1}>submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleFlightBioDiv}>
              <img className={styles.logoIcon} alt="" src="logo2.svg" />
              <div className={styles.fickleFlightIsYourOneStop}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="social-icons2.svg"
              />
            </div>
            <div className={styles.lineDiv} />
            <div className={styles.footerLinksDiv}>
              <div className={styles.companyDiv}>
                <a className={styles.aboutUs}>About Us</a>
                <div className={styles.companyDiv1}>Company</div>
                <div className={styles.newsDiv}>News</div>
                <div className={styles.careersDiv}>Careers</div>
                <div className={styles.howWeWork}>How we work</div>
              </div>
              <div className={styles.companyDiv}>
                <div className={styles.accountDiv}>Account</div>
                <div className={styles.supportDiv1}>Support</div>
                <div className={styles.supportCenterDiv}>Support Center</div>
                <div className={styles.fAQDiv}>FAQ</div>
                <div className={styles.accessibilityDiv}>Accessibility</div>
              </div>
              <div className={styles.moreDiv}>
                <div className={styles.covidAdvisoryDiv}>Covid Advisory</div>
                <div className={styles.moreDiv1}>More</div>
                <div className={styles.airlineFeesDiv}>Airline Fees</div>
                <div className={styles.tipsDiv}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </LocalizationProvider>
  );
};
