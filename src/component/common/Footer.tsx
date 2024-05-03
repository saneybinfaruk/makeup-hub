import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";
import ListHeading from "./ListHeading";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className={styles.container}>

      <div className={styles.brandContainer}>
        <h1 className={styles.brandMainText}>wavey</h1>
        <h5 className={styles.brandSubText}>beauty</h5>
      </div>

      <section className={styles.contentContainer}>
        <ListHeading
          heading="about"
          data={[
            "about wavey",
            "careers",
            "stands social impact",
            "affiliates",
            "supply chain transparency",
            "sitemap",
            "global sites",
          ]}
        />

        <div className={styles.combo1}>
          <ListHeading
            heading="skincare"
            data={["makeup", "skincare", "fragnance"]}
          />
          <ListHeading
            heading="supplements"
            data={["makeup", "skincare", "fragnance"]}
          />
        </div>

        <div className={styles.combo1}>
          <ListHeading heading="makeup" data={["makeup", "skincare"]} />
          <ListHeading
            heading="mens"
            data={["makeup", "skincare", "fragnance", "bath & body"]}
          />
        </div>

        <div className={styles.combo1}>
          <ListHeading
            heading="contact"
            data={["wavey", "ul. Kowalewska 2a", "00-193 Warszawa"]}
          />
          <ListHeading
            heading=""
            data={[
              "tel.: +48 123 456 789",
              "fax: +48 123 456 789",
              "e-mail: info@wavey.com",
            ]}
          />
        </div>
      </section>

      <div className={styles.socialContainer}>
        <FaFacebookF size={25} color="#FECD4E" />
        <FaTwitter size={25} color="#FECD4E" />
        <TiSocialInstagram size={25} color="#FECD4E" />
      </div>
      
      <p className={styles.copyrightText}>
        Copyright © 2019 Wavey USA, Inc. All rights reserved. Terms of Use |
        Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
