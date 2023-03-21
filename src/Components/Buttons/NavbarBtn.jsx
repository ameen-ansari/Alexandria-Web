import React from "react";
import style from "../../Styles/NavbarBtn.module.css";

function NavbarBtn(prop) {

  return <button onClick={prop.func} className={style.Parent}>{prop.value}</button>;
}

export default NavbarBtn;
