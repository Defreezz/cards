import React, {ReactElement, useCallback} from "react";
import {NavLink} from "react-router-dom";
import style from "./header.module.scss";
import {Path} from "../Routes/Router";
import {Person, Style} from "@mui/icons-material";
import SuperButton from "../common/SuperButton/SuperButton";
import {logout} from "../../../store/reducers/profileReducer";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";


type NavbarItemType = {
    path: string
    name: string
    icon: ReactElement
}
const navbarItems: NavbarItemType[] = [
    {name: "Profile", path: Path.Profile, icon: <Person/>},
    {name: "Packs list", path: Path.PacksList, icon: <Style/>},
]

const NavbarItem = ({path, name, icon}: NavbarItemType) => {
    return (
        <div className={style.item}>
            <NavLink to={path} className={(navData) => navData.isActive ? style.active : ''}>
                {name}{icon}
            </NavLink>
        </div>
    )
}

export const Header = () => {

    const dispatch = useTypedDispatch()

    const handleLogoutClick = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    return (
        <div className={style.container}>
            <div className={style.title}>
                NEKO CARDS
            </div>
            <div className={style.nav}>{navbarItems.map((nav, index) =>
                <NavbarItem
                    icon={nav.icon}
                    key={`${nav.name}+${index}`}
                    name={nav.name}
                    path={nav.path}
                />)}</div>
            <div>
                <div className={style.logout_button}>
                    <SuperButton
                        onClick={handleLogoutClick}
                    >
                        Logout
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}



