import React from "react";
import style from "../../Styles/NavbarBtn.module.css";

function NavbarBtn(prop) {
  return <button className={style.Parent2}>
    {prop.src?
    <img src={prop.src} style={{marginRight:10}} width={18} height={18} alt="" />:null}{prop.value}</button>;
}

export default NavbarBtn;