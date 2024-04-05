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
        <div className="middle">
          <div className="column-one">
            <span><img src="../assets/div.coin_icon_24.png" alt="coin-img-1" /></span> 
          </div>
          <div className="column-two">
            <span><img src="../assets/div.coin_icon_25.png" alt="coin-img-2" /></span> 
          </div>
          <div className="column-three">
            <span><img src="../assets/div.coin_icon_26.png" alt="coin-img-3" /></span> 
          </div>
          <div className="column-four">
            <span><img src="../assets/div.coin_icon_27.png" alt="coin-img-4" /></span> 
          </div>
        </div>
        <div className="bottom">

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
