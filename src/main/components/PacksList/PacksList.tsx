import style from './packList.module.scss'
import {PacksTable} from "./PacksTable/PacksTable";
import {Sidebar} from "./Sidebar/Sidebar";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useSelector} from "react-redux";
import {selectSearchPackName, selectSortPacks} from "../../../store/selectors";
import {selectMinPacksReducer} from "../../../store/selectors/selectMinPacksReducer";
import {selectMaxPacksReducer} from "../../../store/selectors/selectMaxPacksReducer";
import {selectPagePacksReducer} from "../../../store/selectors/selectPagePacksReducer";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {getPacks} from "../../../store/reducers/packsReducer";
import {AppStoreType} from "../../../store/store";
import {selectPageCountPacksReducer} from "../../../store/selectors/selectPageCountPacksReducer";

export const PacksList = () => {

    const dispatch = useTypedDispatch()

    const packName = useSelector(selectSearchPackName)
    const sortPacks = useSelector(selectSortPacks)
    const min = useSelector(selectMinPacksReducer)
    const max = useSelector(selectMaxPacksReducer)
    const page = useSelector(selectPagePacksReducer)
    const pageCount = useSelector(selectPageCountPacksReducer)
    const isMyPack = useSelector((state: AppStoreType) => state.packs.isMyPack)

    const {pathname} = useLocation()

    useEffect(() => {
       !isMyPack &&  dispatch(getPacks())
    }, [sortPacks, dispatch, pathname, packName, min, max, page,pageCount])

    return (
        <div className={style.container}>
            <Sidebar/>
            <PacksTable/>
        </div>
    )
};
