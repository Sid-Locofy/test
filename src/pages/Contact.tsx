import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onBlogsButtonClick = useCallback(() => {
    // Please sync "Blogs Page" to the project
  }, []);

  const onCoursesButtonClick = useCallback(() => {
    // Please sync "Courses Page" to the project
  }, []);

  const onAboutButtonClick = useCallback(() => {
    // Please sync "About" to the project
  }, []);

  const onContactButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contactDiv}>
      <header className={styles.header}>
        <b className={styles.diveIntoSkills}>Dive Into Skills</b>
        <section className={styles.menuSection}>
          <button className={styles.homeButton} onClick={onHomeButtonClick}>
            Home
          </button>
          <button className={styles.blogsButton} onClick={onBlogsButtonClick}>
            Blogs
          </button>
          <button className={styles.blogsButton} onClick={onCoursesButtonClick}>
            Courses
          </button>
          <button className={styles.blogsButton} onClick={onAboutButtonClick}>
            About
          </button>
          <button className={styles.blogsButton} onClick={onContactButtonClick}>
            Contact
          </button>
        </section>
      </header>
      <div className={styles.rowDiv}>
        <div className={styles.leftDiv}>
          <div className={styles.detailsDiv}>
            <b className={styles.haveAQueryInMind}>Have a Query in Mind?</b>
            <div className={styles.youCanReachOutToMeViaEm}>
              You can reach out to me via email or social media platforms to
              discuss the query.
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.row1Div}>
              <img
                className={styles.etmapPinIcon}
                alt=""
                src="../public/etmappin.svg"
              />
              <div className={styles.muzaffargarhPunjabPakistan}>
                Muzaffargarh, Punjab, Pakistan
              </div>
            </div>
            <div className={styles.row2Div}>
              <img
                className={styles.etmapPinIcon}
                alt=""
                src="../public/antdesignmailoutlined.svg"
              />
              <div className={styles.muzaffargarhPunjabPakistan}>
                diveintoskills@gmail.com
              </div>
            </div>
            <div className={styles.row3Div}>
              <img
                className={styles.etmapPinIcon}
                alt=""
                src="../public/bxsphonecall.svg"
              />
              <div className={styles.muzaffargarhPunjabPakistan}>
                +923001312712
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <b className={styles.sendMeEmail}>Send Me Email</b>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Input placeholder="Headline" />
          <div className={styles.frameDiv1}>
            <div className={styles.detailsAboutQuery}>Details about Query</div>
          </div>
          <div className={styles.bTNDiv}>
            <div className={styles.detailsAboutQuery}>Send</div>
          </div>
          <div className={styles.haveAQueryInMind}>or</div>
          <img
            className={styles.socialIcon}
            alt=""
            src="../public/social.svg"
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.rowDiv1}>
          <div className={styles.detailsDiv1}>
            <div className={styles.diveIntoSkills1}>Dive Into Skills</div>
            <div className={styles.theLatestArticlesAndCourse}>
              The latest articles and courses to help you upgrade your skills
              and learn the latest trends. Master web Development with these
              amazing resources that are available for free!
            </div>
          </div>
          <div className={styles.menu1Div}>
            <div className={styles.homeDiv}>Home</div>
            <div className={styles.homeDiv}>Blogs</div>
            <div className={styles.homeDiv}>Courses</div>
            <div className={styles.homeDiv}>YouTube</div>
          </div>
          <div className={styles.menu2Div}>
            <div className={styles.homeDiv}>About</div>
            <div className={styles.homeDiv}>Contact</div>
            <div className={styles.homeDiv}>Privacy Policy</div>
            <div className={styles.homeDiv}>{`Terms & Conditions`}</div>
          </div>
        </div>
        <img className={styles.socialIcon} alt="" src="../public/social1.svg" />
        <div className={styles.copyrightDiv}>
          <div className={styles.cOPYRIGHT2022DiveIntoSki}>
            COPYRIGHT @ 2022 Dive Into Skills
          </div>
          <div className={styles.cOPYRIGHT2022DiveIntoSki}>
            Developed by: Ahmad Raza
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
