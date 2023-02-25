import style from "../Styles/Footer.module.css";
import React from "react";
import F2 from "../Images/Frame (2).png";
import discard from '../Images/discord-fill.png'
import twitter from '../Images/twitter-fill.png'

function Footer() {
  return (
    <div className={style.parent}>
      <div>
        <img src={F2} alt="" />
        <p>© 2022 Alexandria Labs. All Right Reserved</p>
      </div>
      <div>
        <p>About</p>
        <p>Early Access</p>
      </div>
      <div>
        <p>Author Submissions</p>
        <p>Team</p>
      </div>
      <div>
        <div>
          <img src={twitter} alt="" />
          <p>Twitter</p>
        </div>
        <div>
          <img src={discard} alt="" />
          <p>Discard</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
