import style from "../Styles/Footer.module.css";
import React from "react";
import F2 from "../Images/Frame (2).png";
import fb from "../Images/Vector.svg";
import discard from "../Images/Vector1.svg";

function Footer() {
  return (
<>
    <div className={style.parent}>
      <div>
        <img src={F2} alt="" />
        <p className={style.copyr}>© 2022 Alexandria Labs. All Right Reserved</p>
      </div>
      <div style={{ display: "flex" }} className={style.twitterwdc}>
        <img src={fb} alt="" />
        <img src={discard} alt="" />
      </div>
      <div>
        <p>About</p>
        <p>Author Submissions</p>
      </div>
      <div>
        <p>Early Access</p>
        <p>Team</p>
      </div>
      <div>
        <div>
          <img src={fb} alt="" />
          <p>Twitter</p>
        </div>
        <div>
          <img src={discard} alt="" />
          <p>Discard</p>
        </div>
      </div>
      <div style={{textAlign:'center' , margin:'2rem 0rem 0px 0px '}}>
        <p className={style.copyr}>© 2022 Alexandria Labs. All Right Reserved</p>
      </div>
    </div>
    <div className={style.parent2}>
        <div>
          <img src={fb} alt="" />
          <p>Twitter</p>
        </div>
        <div>
          <img src={discard} alt="" />
          <p>Discard</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
