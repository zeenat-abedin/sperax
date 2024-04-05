import { Button, Container } from 'react-bootstrap';
import { FaDiscord, FaTwitter, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import "./footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f4f6f8', padding: '20px 0' }}>
      <Container>
        <div className="top">
          <div className="left">
          <img
          src="../assets/i_sperax_logo_gray.svg"
          alt="Sperax logo"
            />
            <Button type="text" variant='outlined' style={{border: '1px solid black'}}>Forum</Button>
            <Button type="text" variant='outlined' style={{border: '1px solid black'}}>Snapshot</Button>
          </div>
          <div className="right">
            <FaDiscord />
            <FaTwitter />
            <FaTelegramPlane />
            <FaGithub />
            <FaMedium/>
          </div>
        </div>
        <div className="bottom">

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
