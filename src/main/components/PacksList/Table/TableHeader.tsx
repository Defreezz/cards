import style from './table.module.scss'
import {useTableSort} from "../../../hooks/useTableSort";

export const TableHeader = () => {

    const {
        handleLastUpdateSort,
        handleQuantitySort,
        handleUserNameSort,
        handleSortName,
        lastUpdate,
        quantitySort,
        userNameSort,
        itemNameSort
    } = useTableSort()

    return (
        <div className={style.headerTableContainer}>
            <div onClick={handleSortName}
                 className={style.tableHeaderItem}>
                Name
                <div className={itemNameSort === '0name' ? style.arrowUp : style.arrowDown}/>
            </div>
            <div onClick={handleQuantitySort}
                 className={style.tableHeaderItem}>
                Cards
                <div className={quantitySort === '0cardsCount' ? style.arrowUp : style.arrowDown}/>
            </div>
            <div
                onClick={handleLastUpdateSort}
                className={style.tableHeaderItem}
            >
                Last Updated
                <div className={lastUpdate === '0updated' ? style.arrowUp : style.arrowDown}/>
            </div>
            <div
                onClick={handleUserNameSort}
                className={style.tableHeaderItem}
            >
                Created By
                <div className={userNameSort === '0user_id' ? style.arrowUp : style.arrowDown}/>
            </div>
            <div
                className={style.tableItemButton}>Actions
            </div>
        </div>
    )
}