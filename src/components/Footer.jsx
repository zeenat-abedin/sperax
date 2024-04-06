import { Button, Container } from 'react-bootstrap';
import { FaDiscord, FaTwitter, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import "./footer.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f4f6f8', padding: '20px 0' }}>
      <Container>
        <div className="top">
          <div className="left">
          <img
          src="../assets/i_sperax_logo_gray.svg"
          alt="Sperax logo"
            />
            <Button type="text" variant='outlined' style={{border: '1px solid black', borderRadius: '20px'}}>Forum</Button>
            <Button type="text" variant='outlined' style={{border: '1px solid black', borderRadius: '20px'}}>Snapshot</Button>
          </div>
          <div className="right">
            <FaDiscord />
            <FaTwitter />
            <FaTelegramPlane />
            <FaGithub />
            <FaMedium/>
          </div>
        </div>
        <div className="middle">
          <div className="column-one">
            <span><img src="../assets/div.coin_icon_24.png" alt="coin-img-1" /></span> 
            <p>USDs Arbitrum</p>
          </div>
          <div className="column-two">
            <span><img src="../assets/div.coin_icon_25.png" alt="coin-img-2" /></span> 
            <p>SPA Arbitrum</p>
          </div>
          <div className="column-three">
            <span><img src="../assets/div.coin_icon_26.png" alt="coin-img-3" /></span>
            <p>ve SPA Arbitrum</p>
          </div>
          <div className="column-four">
            <span><img src="../assets/div.coin_icon_27.png" alt="coin-img-4" /></span>
            <p>w SPA Ethereum</p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            © 2023 Sperax Inc. All rights reserved.
          </div>
          <div className="bottom-right">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
