import style from './table.module.scss'
import {PacksSearch} from "./SearchPack";
import {TableHeader} from "./TableHeader";
import {TableItem} from "./TableItem";
import {useSelector} from "react-redux";
import {selectOperationStatus, selectPacks} from "../../../../store/selectors";
import {Preloader} from "../../common/Preloader/Preloader";


export const Table = () => {

    const packs = useSelector(selectPacks)
    const operationStatus = useSelector(selectOperationStatus)

    return (
        <div className={style.tableContainer}>
            <PacksSearch/>
            <TableHeader/>
            {
                operationStatus === 'loading'
                    ? <Preloader height={'40px'} width={'40px'}/>

                    : <div className={style.itemsWrapper}>
                        {packs.map(p => <TableItem pack={p}/>)}
                    </div>

            }
            <div>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    )
}