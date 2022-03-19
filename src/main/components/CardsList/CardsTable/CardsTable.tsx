import style from './cardsTable.module.scss'
import {Search} from "../../common/Search/Search";
import {useSelector} from "react-redux";
import {selectOperationStatus} from "../../../../store/selectors";
import {Box, CircularProgress, Pagination} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {TableItem} from "../../common/TableItem/TableItem";
import {useLayoutEffect} from "react";
import {getCards} from "../../../../store/reducers/cardsReducer";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {selectCards} from "../../../../store/selectors/selectCards";
import {ArrowBack} from "@mui/icons-material";


export const CardsTable = () => {
    const dispatch = useTypedDispatch()
    const {cardsPack_id} = useParams<{ cardsPack_id: string }>();
    const cards = useSelector(selectCards)
    const operationStatus = useSelector(selectOperationStatus)
    const navigateToPacksList = useNavigate()

    const handleBackArrowClick = () => {
        navigateToPacksList('/packs-list')
    }

    useLayoutEffect(() => {
        dispatch(getCards({cardsPack_id}))
    }, [dispatch, cardsPack_id])

    return (
        <div className={style.tableContainer}>
            <div
                className={style.backArrow}
                onClick={handleBackArrowClick}
            >
                <ArrowBack/>
                Packs list
            </div>


            {
                operationStatus === 'loading'
                    ? <Box sx={{display: 'flex'}}>
                        <CircularProgress/>
                    </Box>

                    : <>
                        <Search location={"/cards-list"}/>
                        <div className={style.itemsWrapper}>
                            {cards.map(c => <TableItem key={c._id} card={c}/>)}
                        </div>
                    </>
            }
            <div>
                <Pagination count={10} variant="outlined" shape="rounded"/>
            </div>
        </div>
    )
}