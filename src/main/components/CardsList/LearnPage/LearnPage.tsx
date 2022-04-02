import style from './learnPage.module.scss'
import {useParams} from "react-router-dom";
import {useLayoutEffect} from "react";
import {getCards} from "../../../../store/reducers/cardsReducer";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {useSelector} from "react-redux";
import {selectCards} from "../../../../store/selectors/selectCards";


export const LearnPage = () => {
    const dispatch = useTypedDispatch()

    const {cardsPack_id} = useParams<{ cardsPack_id: string }>();
    const cards = useSelector(selectCards)


    useLayoutEffect(() => {
        dispatch(getCards({cardsPack_id,pageCount:100}))
    }, [dispatch, cardsPack_id])

    return (
        <div className={style.container}>
            {cards.map(t=><div>{t.question}</div>)}

        </div>
    )
};
