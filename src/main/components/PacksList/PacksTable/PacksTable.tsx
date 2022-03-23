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
import {setPageOfPacks} from "../../../../store/actions/packsReducerActions";
import {selectCardPacksTotalCountPacksReducer} from '../../../../store/selectors/selectCardPacksTotalCountPacksReducer';
import {selectPageCountPacksReducer} from "../../../../store/selectors/selectPageCountPacksReducer";


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
            <Stack spacing={2} sx={{marginBottom: '10px'}}>
                <Pagination
                    count={count}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={handleChange}
                />
            </Stack>

        </div>
    )
}