import {
  FooterContainer,
  FooterBox,
  CompanyInfo,
  BrandName,
  BrandSlogan,
  OtherLinks,
  SocialIcons,
  LinkBox,
} from "./footer.styles";
import { ReactComponent as Github } from "../../assets/github.svg";

import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <CompanyInfo>
          <BrandName>CelebZon</BrandName>
          <BrandSlogan>Get Your True Self</BrandSlogan>
          <SocialIcons>
            <a
              href="https://github.com/Amanshukla712"
              target="_blank"
              className="github_icon"
              rel="noreferrer"
            >
              <Github />
            </a>
            
            
            <a
              href="https://twitter.com/amansh712"
              target="_blank"
              className="twitter_icon"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-shukla712/"
              target="_blank"
              rel="noreferrer"
              className="linkedin_icon"
            >
              <Linkedin />
            </a>
          </SocialIcons>
        </CompanyInfo>
        <OtherLinks>
          <LinkBox>
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Support</a>
            <a href="#">Careers</a>
          </LinkBox>
          <LinkBox>
            <h3>Quick Links</h3>
            <a href="#">Share Location</a>
            <a href="#">Order Tracking</a>
            <a href="#">Size Guide</a>
            <a href="#">FAQs</a>
          </LinkBox>
          <LinkBox>
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </LinkBox>
        </OtherLinks>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
