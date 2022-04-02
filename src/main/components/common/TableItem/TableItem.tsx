import style from './tableItem.module.scss'
import {CardsType, PackType} from "../../../api/types";
import SuperButton from "../SuperButton/SuperButton";
import {memo, useCallback} from "react";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {deletePack} from "../../../../store/reducers/packsReducer";
import {useLocation, useNavigate} from "react-router-dom";
import {Path} from "../../Routes/Router";
import {Rating} from "@mui/material";

type TableItemType = {
    pack?: PackType
    card?: CardsType
}
export const TableItem = memo(({pack, card}: TableItemType) => {
    const navigateToCard = useNavigate()
    const navigateToLearnPack = useNavigate()
    const {pathname} = useLocation()

    const dispatch = useTypedDispatch()

    const handleDeleteClick = useCallback(() => {
        pack && dispatch(deletePack(pack._id))
    }, [dispatch, pack])

    const handleNameClick = useCallback(() => {
        navigateToCard(`/cards-list/${pack?._id}`)
    }, [navigateToCard, pack])

    const handleLearnClick = useCallback(() => {
       navigateToLearnPack(`/learn/${pack?._id}`)
    }, [navigateToLearnPack,pack])

    if (pack) {
        return (
            <div className={style.itemsPacksBlock}>
                <div className={style.tableItemName} onClick={handleNameClick}>{pack.name}</div>
                <div className={style.tableItem}>{pack.cardsCount}</div>
                <div className={style.tableItem}>{pack?.updated.slice(0, 10)}</div>
                <div className={style.tableItem}>{pack.user_name}</div>

                <div className={style.tableItem}>
                    {pathname !== Path.PacksList &&
                        <>
                            <SuperButton
                                onClick={handleDeleteClick}
                            >
                                Delete
                            </SuperButton>
                            <SuperButton

                            >
                                Edit
                            </SuperButton>
                        </>}
                    <SuperButton
                        onClick={handleLearnClick}
                    >
                        Learn
                    </SuperButton>
                </div>
            </div>)
    }
    if (card) {
        return (
            <div className={style.itemsCardsBlock}>
                <div className={style.tableItem}>{card?.question}</div>
                <div className={style.tableItem}>{card?.answer}</div>
                <div className={style.tableItem}>{card?.updated.slice(0, 10)}</div>
                <div className={style.tableItem}>
                    <Rating
                        name="read-only"
                        size={'small'}
                        value={card?.grade}
                        readOnly/>
                </div>
            </div>
        )
    }
    return (
        <div>'null'</div>
    )
})