import style from './cardsTable.module.scss'
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";

export const CardsTableHeader = () => {
    const dispatch = useTypedDispatch()



    return (
        <div className={style.headerTableContainer}>
            <div //onClick={handleSortName}
                 className={style.tableHeaderItem}>
                Question
                <div
                    //className={itemNameSort === '0name' ? style.arrowDown : style.arrowUp}
                />
            </div>
            <div //onClick={handleQuantitySort}
                 className={style.tableHeaderItem}>
                Answer
                <div
                    //className={quantitySort === '0cardsCount' ? style.arrowDown : style.arrowUp}
                />
            </div>
            <div
                //onClick={handleLastUpdateSort}
                className={style.tableHeaderItem}
            >
                Last Updated
                <div
                    //className={lastUpdate === '0updated' ? style.arrowDown : style.arrowUp}
                />
            </div>
            <div
                //onClick={handleUserNameSort}
                className={style.tableHeaderItem}
            >
                Rating
                <div
                    //className={userNameSort === '0user_id' ? style.arrowDown : style.arrowUp}
                />
            </div>
        </div>
    )
}