import style from './cardsTable.module.scss'
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {useCallback} from "react";
import {setSortPacks} from "../../../../store/actions/packsReducerActions";
import {useSelector} from "react-redux";
import {selectSortCards, selectSortPacks} from "../../../../store/selectors";
import {setSortCards} from "../../../../store/actions/cardsReducerActions";

export const CardsTableHeader = () => {
    const dispatch = useTypedDispatch()
    const sortCards = useSelector(selectSortCards)

    const handleSort = useCallback((fieldName: string) => () => {
        if (sortCards !== `1${fieldName}`)
            dispatch(setSortCards(`1${fieldName}`))
        else
            dispatch(setSortCards(`0${fieldName}`))

    },[dispatch,sortCards])

    const classSortName = useCallback ((fieldName: string) => {
        if (sortCards === `0${fieldName}`)
            return style.arrowUp
        else if (sortCards === `1${fieldName}`)
            return style.arrowDown
        else return ''
    },[sortCards])

    return (
        <div className={style.headerTableContainer}>
            <div onClick={handleSort('question')}
                 className={style.tableHeaderItem}>
                Question
                <div
                    className={classSortName('question')}
                />
            </div>
            <div onClick={handleSort('answer')}
                 className={style.tableHeaderItem}>
                Answer
                <div
                    className={classSortName('answer')}
                />
            </div>
            <div
                onClick={handleSort('updated')}
                className={style.tableHeaderItem}
            >
                Last Updated
                <div
                     className={classSortName('updated')}
                />
            </div>
            <div
                onClick={handleSort('grade')}
                className={style.tableHeaderItem}
            >
                Rating
                <div
                    className={classSortName('grade')}
                />
            </div>
        </div>
    )
}