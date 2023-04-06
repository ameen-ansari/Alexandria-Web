import React from "react";
import headerSec2Img from "../Images/hero-illustrations.png";
import headerSec2ImgRes from "../Images/Group 1066 (1).svg";
import exploreBtnImg from "../Images/Vector.png";
import Logo from "../Images/Frame.svg";
import style from "../Styles/Header.module.css";
import NavbarBtn from "./Buttons/NavbarBtn";
import NavbarBtn2 from "./Buttons/NavbarBtn2";
import Burger from "../Images/Group 1067.svg";
import ill1 from ".././Images/Ellipse 9 (1).svg";
import ill3 from ".././Images/Ellipse 10 (1).svg";
import ill2 from ".././Images/Ellipse 9 (2).svg";
import curvers from "../Images/Group 1.svg";
import star from '../Images/star.svg'

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
          <img className="relative z-10" src={Logo} alt="Logo" />
        </div>
        <div>
          <p>About</p>
          <p>Authors</p>
          <p>Team</p>
          <NavbarBtn className={style.btn1} value="CONNECT WALLET" />
          <button>SELECT WALLET</button>
          <div>
            <img
              onClick={showOffC}
              className={style.burger}
              src={Burger}
              alt="More Opt..."
            />
          </div>
        </div>
      </div>
   <div className={style.Header}>
        <div className={style.HeaderP1}>
          <p >Your books on-chain.</p>
          <p>The storefront you need to publish and sell books as NFTs</p>
          <div>
            <NavbarBtn2 src={exploreBtnImg} value="EXPLORE" />
            <NavbarBtn value="PUBLISH" />
          </div>
          <img style={{zIndex:1234567890}} className="absolute  top-[-5%] md:top-[5%]  right-0" src={star} alt="" />
        </div>
        <div className={style.HeaderP2}>
          <img src={headerSec2Img} alt="" width={100} height={100} />
          <img src={headerSec2ImgRes} alt="" width={100} height={100} />
          <img className="absolute top-0 left-0"  src={ill3} alt="" width={100} height={100} />
          <img  className="absolute top-0 right-0" src={ill3} alt="" width={100} height={100} />
        </div>
      </div>
     <img className={style.ill1} src={ill1} alt="" />
      <img className={style.ill2} src={ill2} alt="" />
      <img className={`${style.curvers} z-10`} src={curvers} alt="" />
      <div id="offC" className={style.offcanvas}>
        <div>
          <p className={style.cencel} onClick={removeOffC}>
            X
          </p>
          <p style={{ cursor: "pointer" }} onClick={removeOffC}>
            About
          </p>
          <p style={{ cursor: "pointer" }} onClick={removeOffC}>
            Author
          </p>
          <p onClick={removeOffC}>Team</p>
          <NavbarBtn
            func={removeOffC}
            className={style.btn1}
            value="CONNECT WALLET"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
