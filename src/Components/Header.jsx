import React from "react";
import bgImg from "../Images/hero-illustrations.png";
import Logo from "../Images/Frame.svg";
import style from "../Styles/Header.module.css";
import NavbarBtn from "./Buttons/NavbarBtn";
import NavbarBtn2 from "./Buttons/NavbarBtn2";
import img from "../Images/Vector.png";
import Burger from "../Images/Group 1067.svg";
import curvers from "../Images/Group 1.svg";
import illisp1 from ".././Images/Ellipse 9.svg";
import illisp2 from ".././Images/Ellipse 10.svg";

function Header() {
  let showOffC = () => {
    let offC = document.getElementById("offC");
    offC.style.top = "0vh";
    offC.style.display = "flex";
    offC.style.transition = "0.2s";
  };
  let removeOffC = () => {
    let offC = document.getElementById("offC");
    offC.style.top = "-100vh";
    offC.style.transition = "0.2s";
  };
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
            <img onClick={showOffC} className={style.burger} src={Burger} alt="More Opt..." />
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
      <img className={style.curvers} src={curvers} alt="" />
      <img className={style.illisp2} src={illisp2} alt="" />
      <img className={style.illisp1} src={illisp1} alt="" />
      <div id="offC" className={style.offcanvas}>
        <div>
          <p className={style.cencel} onClick={removeOffC} >
            X
          </p>
          <p
            style={{ cursor: "pointer" }} onClick={removeOffC}
          >
            About
          </p>
          <p
            style={{ cursor: "pointer" }} onClick={removeOffC}
          >
            Auther
          </p>
          <p onClick={removeOffC}>Team</p>
          <NavbarBtn func={removeOffC} className={style.btn1} value="CONNECT WALLET" /> 
        </div>
      </div>
    </div>
  );
}

export default Header;
