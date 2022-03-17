import style from './table.module.scss'
import {useTableSort} from "../../../hooks/useTableSort";
import {useEffect} from "react";
import {getPacks} from "../../../../store/reducers/packsReducer";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectSearchPackName, selectUserId} from "../../../../store/selectors";

export const TableHeader = () => {
    const dispatch = useTypedDispatch()

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


    const user_id = useSelector(selectUserId)
    const packName = useSelector(selectSearchPackName)
    const {pathname} = useLocation()

    useEffect(() => {
        if (pathname === '/pack-list') {
            dispatch(getPacks({}))
        }else{
            dispatch(getPacks({user_id}))
        }
    }, [itemNameSort, userNameSort, quantitySort, lastUpdate,user_id,dispatch,pathname,packName])

    return (
        <div className={style.headerTableContainer}>
            <div onClick={handleSortName}
                 className={style.tableHeaderItem}>
                Name
                <div className={itemNameSort === '0name' ? style.arrowDown : style.arrowUp}/>
            </div>
            <div onClick={handleQuantitySort}
                 className={style.tableHeaderItem}>
                Cards
                <div className={quantitySort === '0cardsCount' ? style.arrowDown : style.arrowUp}/>
            </div>
            <div
                onClick={handleLastUpdateSort}
                className={style.tableHeaderItem}
            >
                Last Updated
                <div className={lastUpdate === '0updated' ? style.arrowDown : style.arrowUp}/>
            </div>
            <div
                onClick={handleUserNameSort}
                className={style.tableHeaderItem}
            >
                Created By
                <div className={userNameSort === '0user_id' ? style.arrowDown : style.arrowUp}/>
            </div>
            <div
                className={style.tableItemButton}>Actions
            </div>
        </div>
    )
}