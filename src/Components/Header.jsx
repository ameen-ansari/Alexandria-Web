import React from "react";
import bgImg from "../Images/hero-illustrations.png";
import Logo from "../Images/Frame.png";
import style from "../Styles/Header.module.css";
import NavbarBtn from "./Buttons/NavbarBtn";
import NavbarBtn2 from "./Buttons/NavbarBtn2";
import img from "../Images/Vector.png";
import Burger from "../Images/Group 1067 (1).png";

function Header() {
  return (
    <div className={style.HeaderParent}>
      <div className={style.Navbar}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <p>About</p>
          <p>Authers</p>
          <p>Team</p>
          <NavbarBtn className={style.btn1} value="CONNECT WALLET" />
          <button>SELECT WALLET</button>
          <div>
            <img className={style.burger} src={Burger} alt="More Opt..." />
          </div>
        </div>
      </div>
      <div className={style.Header}>
        <div className={style.HeaderP1}>
          <p>Your books on-chain</p>
          <p>The storefront you need to publish and sell books as NFTs</p>
          <div>
              <NavbarBtn2 src={img} value="EXPLORE" />
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
