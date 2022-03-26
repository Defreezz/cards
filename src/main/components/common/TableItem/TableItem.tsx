import style from './tableItem.module.scss'
import {CardsType, PackType} from "../../../api/types";
import SuperButton from "../SuperButton/SuperButton";
import {memo, useCallback, useState} from "react";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {deletePack} from "../../../../store/reducers/packsReducer";
import {useLocation, useNavigate} from "react-router-dom";
import {Path} from "../../Routes/Router";
import {Rating} from "@mui/material";
import ModalDelete from "../ModalDelete/ModalDelete";

type TableItemType = {
    pack?: PackType
    card?: CardsType
}
export const TableItem = memo(({pack, card}: TableItemType) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const dispatch = useTypedDispatch()

    const [showModal, setShowModal] = useState<boolean>(false)

    const handleDeleteClick = useCallback(() => {
        pack && dispatch(deletePack(pack._id))
        setShowModal(false)
    }, [dispatch, pack])

    const handleNameClick = useCallback(() => {
        navigate(`/cards-list/${pack?._id}`)
    }, [navigate, pack])

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
                                // onClick={handleDeleteClick}
                                onClick={() => setShowModal(true)}
                            >
                                Delete
                            </SuperButton>
                            <ModalDelete showModal={showModal}
                                         width={600}
                                         height={200}
                                         backgroundOnClick={() => setShowModal(false)}
                                         cancelOnClick={() => setShowModal(false)}
                                         deleteOnClick={handleDeleteClick}
                            />
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