import style from './packTable.module.scss'
import {useSelector} from "react-redux";
import {selectSortPacks} from "../../../../store/selectors";
import {setSortPacks} from "../../../../store/actions/packsReducerActions";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {Sort} from "../../../enum";
import {useCallback} from "react";

export const PackTableHeader = () => {
    const dispatch = useTypedDispatch()
    const sortPacks = useSelector(selectSortPacks)

    const classSortName = useCallback ((fieldName: string) => {
        if (sortPacks === `0${fieldName}`)
            return style.arrowUp
        else if (sortPacks === `1${fieldName}`)
            return style.arrowDown
        else return ''
    },[sortPacks])

    const handleSort = useCallback((fieldName: string) => () => {
        if (sortPacks !== `1${fieldName}`)
            dispatch(setSortPacks(`1${fieldName}`))
        else
            dispatch(setSortPacks(`0${fieldName}`))

    },[dispatch,sortPacks])
    return (
        <div className={style.headerTableContainer}>
            <div onClick={handleSort(Sort.name)}
                 className={style.tableHeaderItem}>
                Name
                <div className={classSortName(Sort.name)}/>
            </div>
            <div onClick={handleSort(Sort.cardsCount)}
                 className={style.tableHeaderItem}>
                Cards
                <div className={classSortName(Sort.cardsCount)}/>
            </div>
            <div
                onClick={handleSort(Sort.lastUpdated)}
                className={style.tableHeaderItem}
            >
                Last Updated
                <div className={classSortName(Sort.lastUpdated)}/>
            </div>
            <div
                onClick={handleSort(Sort.id)}
                className={style.tableHeaderItem}
            >
                Created By
                <div className={classSortName(Sort.id)}/>
            </div>
            <div
                className={style.tableHeaderButton}>Actions
            </div>
        </div>
    )
}