import React from "react";
import style from "../Styles/NavbarBtn.module.css";
import as from '../Images/Vector.png'

function NavbarBtn(prop) {
  return <button className={style.Parent2}>
    <img src={as} style={{marginRight:10}} width={18} height={18} alt="" />{prop.value}</button>;
}

export default NavbarBtn;