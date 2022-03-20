import style from './cardsList.module.scss'
import {CardsTable} from "./CardsTable/CardsTable";

export const CardsList = () => {

    return (
        <div className={style.container}>

            <CardsTable/>
        </div>
    )
};
