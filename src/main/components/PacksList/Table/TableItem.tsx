import style from './table.module.scss'
import {PackType} from "../../../api/types";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useSelector} from "react-redux";
import {selectProfileId} from "../../../../store/selectors/selectProfileId";
import {memo, useCallback} from "react";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {deletePack} from "../../../../store/reducers/packsReducer";
import {useLocation} from "react-router-dom";

type TableItemType = {
    pack: PackType
}
export const TableItem = memo(({pack}: TableItemType) => {
    const lastUpdate = pack.updated.slice(0, 10)

    const {pathname} = useLocation()

    const dispatch = useTypedDispatch()

    const handleDeleteClick = useCallback(() => {
        dispatch(deletePack(pack._id))
    }, [dispatch])

    return (
        <div className={style.itemsBlock}>
            <div className={style.tableItem}>{pack.name}</div>
            <div className={style.tableItem}>{pack.cardsCount}</div>
            <div className={style.tableItem}>{lastUpdate}</div>
            <div className={style.tableItem}>{pack.user_name}</div>

            <div className={style.tableItemButton}>
                {pathname !== '/pack-list' &&
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

                >
                    Learn
                </SuperButton>
            </div>
        </div>
    )
})