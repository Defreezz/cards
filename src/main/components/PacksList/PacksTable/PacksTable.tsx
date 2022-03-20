import style from './packTable.module.scss'
import {Search} from "../../common/Search/Search";
import {PackTableHeader} from "./PackTableHeader";
import {TableItem} from "../../common/TableItem/TableItem";
import {useSelector} from "react-redux";
import {
    selectOperationStatus,
    selectPacks,
    selectSearchPackName,
    selectSortPacks,
    selectUserId
} from "../../../../store/selectors";
import {Box, LinearProgress, Pagination} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {Path} from "../../Routes/Router";
import {getPacks} from "../../../../store/reducers/packsReducer";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {selectMinPacksReducer} from "../../../../store/selectors/selectMinPacksReducer";
import { selectMaxPacksReducer } from '../../../../store/selectors/selectMaxPacksReducer';


export const PacksTable = () => {
    const dispatch = useTypedDispatch()

    const packs = useSelector(selectPacks)
    const operationStatus = useSelector(selectOperationStatus)
    const user_id = useSelector(selectUserId)
    const packName = useSelector(selectSearchPackName)
    const sortPacks = useSelector(selectSortPacks)
    const min = useSelector(selectMinPacksReducer)
    const max = useSelector(selectMaxPacksReducer)

    const {pathname} = useLocation()

    useEffect(() => {
        if (pathname === Path.PacksList) {
            dispatch(getPacks({}))
        }else{
            dispatch(getPacks({user_id}))
        }
    }, [sortPacks,user_id,dispatch,pathname,packName, min, max])


    return (
        <div className={style.tableContainer}>
            <Search location={"/packs-list"}/>
            <PackTableHeader/>
            {
                operationStatus === 'loading'
                    ? <Box sx={{width: '90%', color: 'grey.500'}}>
                        <LinearProgress color={'inherit'}/>
                    </Box>

                    : <div className={style.itemsWrapper}>
                        {packs.map(p => <TableItem key={p._id} pack={p}/>)}
                    </div>

            }
            <div>
                <Pagination count={10} variant="outlined" shape="rounded"/>
            </div>
        </div>
    )
}