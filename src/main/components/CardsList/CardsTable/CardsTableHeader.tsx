import style from './packTable.module.scss'
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";

export const CardsTableHeader = () => {
    const dispatch = useTypedDispatch()



    return (
        <div className={style.headerTableContainer}>
            <div //onClick={handleSortName}
                 className={style.tableHeaderItem}>
                Name
                <div
                    //className={itemNameSort === '0name' ? style.arrowDown : style.arrowUp}
                />
            </div>
            <div //onClick={handleQuantitySort}
                 className={style.tableHeaderItem}>
                Cards
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
                Created By
                <div
                    //className={userNameSort === '0user_id' ? style.arrowDown : style.arrowUp}
                />
            </div>
            <div
                className={style.tableHeaderButton}>Actions
            </div>
        </div>
    )
}