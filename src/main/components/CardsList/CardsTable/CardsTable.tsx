import style from './cardsTable.module.scss'
import {Search} from "../../common/Search/Search";
import {useSelector} from "react-redux";
import {
    selectCardsPage,
    selectCardsPageCount,
    selectCardsTotalCount,
    selectOperationStatus, selectSortCards
} from "../../../../store/selectors";
import {Box, CircularProgress, Pagination, Stack} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {TableItem} from "../../common/TableItem/TableItem";
import {ChangeEvent, useEffect, useLayoutEffect} from "react";
import {getCards, initState} from "../../../../store/reducers/cardsReducer";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {selectCards} from "../../../../store/selectors/selectCards";
import {ArrowBack} from "@mui/icons-material";
import {setCards, setPageOfCards} from "../../../../store/actions/cardsReducerActions";
import {CardsTableHeader} from "./CardsTableHeader";


export const CardsTable = () => {
    const dispatch = useTypedDispatch()

    const {cardsPack_id} = useParams<{ cardsPack_id: string }>();
    const navigateToPacksList = useNavigate()

    const operationStatus = useSelector(selectOperationStatus)
    const cards = useSelector(selectCards)
    const sortCards = useSelector(selectSortCards)

    const page = useSelector(selectCardsPage)
    const cardsTotalCount = useSelector(selectCardsTotalCount)
    const pageCount = useSelector(selectCardsPageCount)
    const count = Math.ceil(cardsTotalCount / pageCount)

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        dispatch(setPageOfCards(value))
    };

    const handleBackArrowClick = () => {
        navigateToPacksList('/packs-list')
    }

    useEffect(() => {
        return () => dispatch(setCards(initState))
    }, [])
    useLayoutEffect(() => {
        dispatch(getCards({cardsPack_id}))
    }, [dispatch, cardsPack_id, page,sortCards])

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
                        <CardsTableHeader/>
                        <div className={style.itemsWrapper}>
                            {cards.map(c => <TableItem key={c._id} card={c}/>)}
                        </div>
                    </>
            }
            <div>
                <Stack spacing={2}>
                    <Pagination
                        count={count}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={handleChange}
                    />
                </Stack>
            </div>
        </div>
    )
}