import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MatterhornPopup } from "./MatterhornPopup";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/HotelsPage.module.css";

export const HotelsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const onWebLogo1Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelsPageDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.topHeader}>
            <div className={styles.topContainerDiv}>
              <img
                className={styles.webLogo1Icon}
                alt=""
                src="weblogo-1.svg"
                onClick={onWebLogo1Click}
              />
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
          <div className={styles.bannerDiv}>
            <img
              className={styles.unsplashe8e4YY65sOkIcon}
              alt=""
              src="unsplashe8e4yy65sok@2x.png"
            />
            <div className={styles.frameDiv3}>
              <div className={styles.staysInLosAngeles}>
                Stays in Los Angeles
              </div>
              <div className={styles.optionsDiv}>
                <div className={styles.pilldefaultDiv}>
                  <div className={styles.bedsDiv}>Recommended</div>
                </div>
                <div className={styles.pilldefaultDiv1}>
                  <div className={styles.bedsDiv}>Price</div>
                </div>
                <div className={styles.pilldefaultDiv1}>
                  <div className={styles.bedsDiv}>Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hotelResultsDiv}>
          <div className={styles.resultsSumamryDiv}>
            <div className={styles.resultsDiv}>200+ results</div>
            <div className={styles.filtersDiv}>
              <img className={styles.filtersIcon} alt="" src="filters.svg" />
              <div className={styles.filtersDiv1}>Filters</div>
            </div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.resultCardsDiv}>
              <div className={styles.frameDiv5}>
                <img
                  className={styles.unsplashs6cH7n3eoqYIcon}
                  alt=""
                  src="unsplashs6ch7n3eoqy@2x.png"
                />
                <div className={styles.frameDiv6}>
                  <div className={styles.frameDiv7}>
                    <div className={styles.frameDiv8}>
                      <div className={styles.kingBedStandard}>
                        1 king bed standard
                      </div>
                      <b className={styles.holidayInnExpre}>
                        Holiday Inn Expre...
                      </b>
                      <div className={styles.groupDiv}>
                        <div className={styles.reviewsDiv}>(1,136 reviews)</div>
                        <div className={styles.groupDiv1}>
                          <div className={styles.div}>4.7</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector7.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="video2.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className={styles.groupDiv2}>
                    <div className={styles.groupDiv3}>
                      <b className={styles.s286B}>$S 286</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.primaryButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv9}>
                <img
                  className={styles.unsplashs6cH7n3eoqYIcon1}
                  alt=""
                  src="unsplashs6ch7n3eoqy1@2x.png"
                />
                <div className={styles.frameDiv10}>
                  <div className={styles.resultsSumamryDiv}>
                    <div className={styles.groupDiv4}>
                      <b className={styles.freehandLosAngeles}>
                        Freehand Los Angeles
                      </b>
                      <div className={styles.bedInQuad}>Bed in Quad</div>
                      <div className={styles.groupDiv5}>
                        <div className={styles.reviewsDiv1}>
                          (1,941 reviews)
                        </div>
                        <div className={styles.groupDiv6}>
                          <div className={styles.div1}>4.2</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupDiv7}>
                    <div className={styles.groupDiv3}>
                      <b className={styles.s286B}>$S 198</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.primaryButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv9}>
                <img
                  className={styles.unsplashs6cH7n3eoqYIcon1}
                  alt=""
                  src="unsplashs6ch7n3eoqy2@2x.png"
                />
                <div className={styles.frameDiv10}>
                  <div className={styles.resultsSumamryDiv}>
                    <div className={styles.groupDiv4}>
                      <b className={styles.freehandLosAngeles}>
                        The Westin Bonavent...
                      </b>
                      <div className={styles.bedInQuad}>1 King, City view</div>
                      <div className={styles.groupDiv5}>
                        <div className={styles.reviewsDiv1}>
                          (1,002 reviews)
                        </div>
                        <div className={styles.groupDiv6}>
                          <div className={styles.div1}>4.1</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector9.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupDiv7}>
                    <div className={styles.groupDiv3}>
                      <b className={styles.s286B}>$S 289</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.primaryButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv15}>
                <img
                  className={styles.unsplashs6cH7n3eoqYIcon1}
                  alt=""
                  src="unsplashs6ch7n3eoqy3@2x.png"
                />
                <div className={styles.frameDiv10}>
                  <div className={styles.resultsSumamryDiv}>
                    <div className={styles.frameDiv8}>
                      <div className={styles.kingBedStandard}>Deluxe King</div>
                      <b className={styles.holidayInnExpre}>
                        The Ritz-Carlton, L...
                      </b>
                      <div className={styles.groupDiv}>
                        <div className={styles.reviewsDiv}>(1,136 reviews)</div>
                        <div className={styles.groupDiv1}>
                          <div className={styles.div}>4.7</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector10.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img className={styles.bellIcon} alt="" src="video3.svg" />
                  </div>
                  <div className={styles.groupDiv2}>
                    <div className={styles.groupDiv3}>
                      <b className={styles.s286B}>$S 286</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.primaryButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <iframe className={styles.mapIframe} src="https://www.bing.com/" />
          </div>
        </div>
        <div className={styles.footerSectionDiv}>
          <div className={styles.frameDiv19}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="rectangle-1861@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeaderDiv}>
                <b className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitleB}>Get weekly updates</b>
              </div>
              <form className={styles.form}>
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
                <button className={styles.button}>
                  <div className={styles.unstyledButtonDiv}>
                    <div className={styles.buttonDiv}>submit</div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleFlightBioDiv}>
              <img className={styles.logoIcon} alt="" src="logo1.svg" />
              <div className={styles.fickleFlightIsYourOneStop}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="social-icons1.svg"
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
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};
