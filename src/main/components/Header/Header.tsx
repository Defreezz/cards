import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";
import {Path} from "../Routes/Router";

type NavbarItemType = {
    path: string
    name: string
}
const navbarItems: NavbarItemType[] = [
    {name: "Login", path: Path.LogIn},
    {name: "Registration", path: Path.Registration},
    {name: "Profile", path: Path.Profile},
    {name: "404", path: Path.Error404},
    {name: "Reset password", path: Path.ResetPassword},
    {name: "Create  password", path: Path.CreatePassword},
    {name: "SuperComponents", path: Path.SuperComponents},
]

const NavbarItem = ({path, name}: NavbarItemType) => {
    return (
        <div className={style.item}>
            <NavLink to={path} className={(navData) => navData.isActive ? style.active : ''}>
                {name}
            </NavLink>
        </div>
    )
}

export const Header = () => {
    return (
        <div className={style.nav}>
            {navbarItems.map((nav,index) => <NavbarItem key={`${nav.name}+${index}` } name={nav.name} path={nav.path}/>)}
        </div>
    )
}



