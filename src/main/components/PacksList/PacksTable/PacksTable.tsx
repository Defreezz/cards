import style from './packTable.module.scss'
import {Search} from "../../common/Search/Search";
import {PackTableHeader} from "./PackTableHeader";
import {TableItem} from "../../common/TableItem/TableItem";
import {useSelector} from "react-redux";
import {selectOperationStatus, selectPacks} from "../../../../store/selectors";
import {Box, LinearProgress, Pagination} from "@mui/material";


export const PacksTable = () => {
    const packs = useSelector(selectPacks)
    const operationStatus = useSelector(selectOperationStatus)

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