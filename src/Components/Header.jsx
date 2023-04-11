import React from "react";
import headerSec2Img from "../Images/hero-illustrations.png";
import headerSec2ImgRes from "../Images/hero-illustration12.png";
import exploreBtnImg from "../Images/Vector.png";
import Logo from "../Images/Frame.svg";
import style from "../Styles/Header.module.css";
import NavbarBtn from "./Buttons/NavbarBtn";
import NavbarBtn2 from "./Buttons/NavbarBtn2";
import Burger from "../Images/Group 1067.svg";
import curvers from "../Images/Group 1.svg";
import star from "../Images/star.svg";
import bgTYpe from "../Images/hero-bg.svg";

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
      <div className={`${style.Navbar} relative z-10`}>
        <div>
          <img
            className="relative z-0 w-[294px] h-[94px]"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="xl:relative left-[3%]">
          <p className="font-medium text-[20px] leading-[30px]">About</p>
          <p className="font-medium text-[20px] leading-[30px]">Authors</p>
          <p className="font-medium text-[20px] leading-[30px]">Team</p>
          <NavbarBtn className={style.btn1} value="CONNECT WALLET" />
          <button className="hidden">SELECT WALLET</button>
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
      <img className="absolute top-0 left-0 w-[100%]" src={bgTYpe} alt="BG" />
      <div className={`${style.Header}`}>
        <div className={`${style.HeaderP1}`}>
          <img src={star} className="self-end" alt="" />
          <p style={{fontFamily:'Prata'}} className="text-[40px] font-normal leading-[60px] text-[#FFFFFF] md:text-[60px] lg:text-[82px] lg:leading-[100px]  xl:text-[96px] xl:leading-[115px]">
            Your books on chain.
          </p>
          <p className="text-[20px] font-normal leading-[30px] text-[#F6F6F6] md:text-[26px] xl:text-[32px] xl:leading-[48px]">The storefront you need to publish and sell books as NFTs</p>
          <div className={style.heroBtns}>
            <NavbarBtn2 src={exploreBtnImg} value="EXPLORE" />
            <NavbarBtn value="PUBLISH" />
          </div>
        </div>
        <div className={style.HeaderP2}>
          <img  src={headerSec2Img} alt="" width={100} height={100} />
          <img src={headerSec2ImgRes} alt="" />
        </div>
      </div>
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
          <p onClick={removeOffC} >Team</p>
        </div>
      </div>
      <img src={curvers} className='md:absolute top-0 left-[10%] w-[80%] z-0' alt="" />
    </div>
  );
}

export default Header;
