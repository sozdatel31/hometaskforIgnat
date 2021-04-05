import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css"
function Header() {
    return (
        <div className={s.Headder}>

            <div className={s.Divv}>
                 <NavLink className={s.Navi} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={s.Navi} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.Navi} to={PATH.JUNIOR_PlUS}>Junior+</NavLink>
            {/*// add NavLinks*/}
            </div>
        </div>
    )
}

export default Header
