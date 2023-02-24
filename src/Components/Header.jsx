import React from "react";
import bgImg from "../Images/hero-illustrations.png";
import Logo from "../Images/Frame.png";
import style from "../Styles/Header.module.css";
import NavbarBtn from "./NavbarBtn";
import NavbarBtn2 from "./NavbarBtn2";

function Header() {
  return (
    <div className={style.HeaderParent}>
      {/* <img src={bgImg} alt="BackGroundImage" className={style.bgImg} /> */}
      <div className={style.Navbar}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <p>Authers</p>
          <p>Team</p>
          <NavbarBtn value='CONNECT WALLET' />
        </div>
      </div>
      <div className={style.Header}>
        <div className={style.HeaderP1}>
          <p>Your books on-chain</p>
          <p>The storefront you need to publish and sell books as NFTs</p>
          <div>
          <NavbarBtn2 value='EXPLORE'  />
          <NavbarBtn value="PUBLISH" />
          </div>
        </div>
        <div className={style.HeaderP2}>
          <img src={bgImg} alt="" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Header;
