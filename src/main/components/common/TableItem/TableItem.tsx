import style from './tableItem.module.scss'
import {CardsType, PackType} from "../../../api/types";
import SuperButton from "../SuperButton/SuperButton";
import {memo, useCallback, useState} from "react";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {deletePack, updatePack} from "../../../../store/reducers/packsReducer";
import {useLocation, useNavigate} from "react-router-dom";
import {Path} from "../../Routes/Router";
import {Rating} from "@mui/material";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalUpdate from "../ModalUpdate/ModalUpdate";

type TableItemType = {
    pack?: PackType
    card?: CardsType
}
export const TableItem = memo(({pack, card}: TableItemType) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const dispatch = useTypedDispatch()

    const [showModalDelete, setShowModalDelete] = useState<boolean>(false)
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)
    const [name, setName] = useState<string>(pack ? pack.name : '')

    const handleDeleteClick = useCallback(() => {
        pack && dispatch(deletePack(pack._id))
        setShowModalDelete(false)
    }, [dispatch, pack])

    const handleUpdateClick = useCallback(() => {
        pack && dispatch(updatePack({cardsPack: {_id: pack._id, name}}))
        setName(pack ? pack.name : '')
    }, [dispatch, pack, name])

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
                                onClick={() => setShowModalDelete(true)}
                            >
                                Delete
                            </SuperButton>
                            <ModalDelete showModal={showModalDelete}
                                         width={600}
                                         height={200}
                                         backgroundOnClick={() => setShowModalDelete(false)}
                                         cancelOnClick={() => setShowModalDelete(false)}
                                         deleteOnClick={handleDeleteClick}
                            />
                            <SuperButton
                                onClick={() => setShowModalUpdate(true)}

                            >
                                Edit
                            </SuperButton>
                            <ModalUpdate
                                packName={name}
                                setName={setName}
                                showModal={showModalUpdate}
                                width={600}
                                height={200}
                                backgroundOnClick={() => setShowModalUpdate(false)}
                                cancelOnClick={() => setShowModalUpdate(false)}
                                updateOnClick={handleUpdateClick}
                            />
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