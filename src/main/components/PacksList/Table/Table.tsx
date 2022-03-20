import style from './table.module.scss'
import {PacksSearch} from "./SearchPack";
import {TableHeader} from "./TableHeader";
import {TableItem} from "./TableItem";
import {useDispatch, useSelector} from "react-redux";
import {selectOperationStatus, selectPacks} from "../../../../store/selectors";
import {Preloader} from "../../common/Preloader/Preloader";
import {InitStateType} from "../../../../store/reducers/packsReducer";
import Pagination from "../../Pagination/Pagination";
import {useState} from "react";
import {setCurrentPage} from "../../../../store/actions/packsReducerActions";


export const Table = () => {

    const totalCountPacks = useSelector((state: InitStateType): number => state.cardPacksTotalCount)
    const packsPerPage = useSelector((state: InitStateType): number => state.pageCount)
    const currentPage = useSelector((state: InitStateType) => state.page)
    const [portionNumber, setPortionNumber] = useState(1)

    const packs = useSelector(selectPacks)
    const operationStatus = useSelector(selectOperationStatus)

    const dispatch = useDispatch()

    const PORTION_SIZE = 5;

    const handleSetCurrentPage = (page: number) => {
        dispatch(setCurrentPage(page))
    };

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

                <Pagination
                    cardPacksTotalCount={totalCountPacks}
                    pageCount={packsPerPage}
                    currentPage={currentPage || 1}
                    portionSize={PORTION_SIZE}
                    portionNumber={portionNumber}
                    setPortionNumber={setPortionNumber}
                    setCurrentPage={handleSetCurrentPage}
                />
                {/*<Pagination  page={page} count={2} variant="outlined" shape="rounded"/>*/}
            </div>
        </div>
    )
}