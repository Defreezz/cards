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
import {Box, LinearProgress, Pagination, Stack} from "@mui/material";
import {useLocation} from "react-router-dom";
import {ChangeEvent, useEffect} from "react";
import {Path} from "../../Routes/Router";
import {getPacks} from "../../../../store/reducers/packsReducer";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {selectMinPacksReducer} from "../../../../store/selectors/selectMinPacksReducer";
import {selectMaxPacksReducer} from '../../../../store/selectors/selectMaxPacksReducer';
import {selectPagePacksReducer} from "../../../../store/selectors/selectPagePacksReducer";
import {setPageCount, setPageOfPacks} from "../../../../store/actions/packsReducerActions";
import {selectCardPacksTotalCountPacksReducer} from '../../../../store/selectors/selectCardPacksTotalCountPacksReducer';
import {selectPageCountPacksReducer} from "../../../../store/selectors/selectPageCountPacksReducer";
import {countOfPacksOnPage} from "../../../constants/countOfPacksOnPage";


export const PacksTable = () => {
    const dispatch = useTypedDispatch()

    const packs = useSelector(selectPacks)
    const operationStatus = useSelector(selectOperationStatus)
    const user_id = useSelector(selectUserId)
    const packName = useSelector(selectSearchPackName)
    const sortPacks = useSelector(selectSortPacks)
    const min = useSelector(selectMinPacksReducer)
    const max = useSelector(selectMaxPacksReducer)
    const page = useSelector(selectPagePacksReducer)
    const cardPacksTotalCount = useSelector(selectCardPacksTotalCountPacksReducer)
    const pageCount = useSelector(selectPageCountPacksReducer)

    const {pathname} = useLocation()

    const count = Math.ceil(cardPacksTotalCount / pageCount)

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        dispatch(setPageOfPacks(value))
    };

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageCount(+e.target.value))
    }

    useEffect(() => {
        if (pathname === Path.PacksList) {
            dispatch(getPacks({}))
        } else {
            dispatch(getPacks({user_id}))
        }
    }, [sortPacks, user_id, dispatch, pathname, packName, min, max, page, pageCount])


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
            <div className={style.paginationAndSelect}>
                <Stack spacing={2}>
                    <Pagination count={count}
                                variant="outlined"
                                shape="rounded"
                                page={page}
                                onChange={handleChange}
                    />
                </Stack>
                <div className={style.selectBlock}>
                    <span className={style.selectName}>Packs on page:</span>
                    <select value={pageCount} onChange={onChangeSelect} className={style.select}>
                        {countOfPacksOnPage.map((c, index) => <option key={index}>{c}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}