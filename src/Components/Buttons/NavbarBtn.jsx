import React from "react";
import style from "../../Styles/NavbarBtn.module.css";

function NavbarBtn(prop) {

  return <button style={{cursor:'pointer'}} onClick={prop.func} className={style.Parent}>{prop.value}</button>;
}

export default NavbarBtn;
