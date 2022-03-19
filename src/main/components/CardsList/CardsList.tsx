import style from './cardsList.module.scss'
import {CardsTable} from "./CardsTable/CardsTable";
import {Path} from "../Routes/Router";
import {NavLink} from "react-router-dom";
import {ArrowBack} from "@mui/icons-material";


export const CardsList = () => {

    return (
        <div className={style.container}>

            <CardsTable/>
        </div>
    )
};
