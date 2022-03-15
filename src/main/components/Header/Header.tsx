import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";
import {Path} from "../Routes/Router";

type NavbarItemType = {
    path: string
    name: string
}
const navbarItems: NavbarItemType[] = [
    {name: "Profile", path: Path.Profile},
    {name: "Packs list", path: Path.PackList},
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



