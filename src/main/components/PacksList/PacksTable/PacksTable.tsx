import style from './packTable.module.scss'
import {Search} from "../../common/Search/Search";
import {PackTableHeader} from "./PackTableHeader";
import {TableItem} from "../../common/TableItem/TableItem";
import {useSelector} from "react-redux";
import {selectOperationStatus, selectPacks} from "../../../../store/selectors";
import {CircularProgress, Pagination, Stack} from "@mui/material";
import {ChangeEvent} from "react";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {selectPagePacksReducer} from "../../../../store/selectors/selectPagePacksReducer";
import {setPageCount, setPageOfPacks} from "../../../../store/actions/packsReducerActions";
import {selectCardPacksTotalCountPacksReducer} from '../../../../store/selectors/selectCardPacksTotalCountPacksReducer';
import {selectPageCountPacksReducer} from "../../../../store/selectors/selectPageCountPacksReducer";
import {countOfPacksOnPage} from "../../../constants/countOfPacksOnPage";


export const PacksTable = () => {
    const dispatch = useTypedDispatch()

    const packs = useSelector(selectPacks)
    const operationStatus = useSelector(selectOperationStatus)

    const page = useSelector(selectPagePacksReducer)
    const cardPacksTotalCount = useSelector(selectCardPacksTotalCountPacksReducer)
    const pageCount = useSelector(selectPageCountPacksReducer)

    const count = Math.ceil(cardPacksTotalCount / pageCount)

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        dispatch(setPageOfPacks(value))
    };

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageCount(+e.target.value))
    }

    return (
        <div className={style.tableContainer}>
            {
                operationStatus === 'loading'
                    ? <div className={style.progress}>
                        <CircularProgress/>
                    </div>

                    : <>
                        <Search location={"/packs-list"}/>
                        <PackTableHeader/>
                        <div className={style.itemsWrapper}>
                            {packs.map(p => <TableItem key={p._id} pack={p}/>)}
                        </div>
                    </>

            }
            <div className={style.paginationAndSelect}>
                <Stack spacing={2}>
                    <Pagination
                        count={count}
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