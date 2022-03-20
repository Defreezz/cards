import style from '../packList.module.scss'
import SuperDoubleRange from "../../common/SuperDoubleRange/SuperDoubleRange";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../store/store";
import {useEffect} from "react";
import {setRangeCards} from "../../../../store/actions/packsReducerActions";

export const Sidebar = () => {

    //const pack = useSelector(packSelector);

    const maxCardsCount = useSelector<AppStoreType, number>(state => state.packs.maxCardsCount)
    const minCardsCount = useSelector<AppStoreType, number>(state => state.packs.minCardsCount)
    const dispatch = useDispatch()

    const onChangeRangeCards = (values: number[]) => {
        dispatch(setRangeCards(values))
    }

    useEffect(() => {
        dispatch(setRangeCards([minCardsCount, maxCardsCount]))
    }, [minCardsCount, maxCardsCount, dispatch])

    return (
        <div className={style.sidebar}>
            <div className={style.doubleRange}>
                <span>Show number of cards</span>
                <SuperDoubleRange value={[minCardsCount, maxCardsCount]}
                                  onChangeRange={onChangeRangeCards}
                />
            </div>
            <div className={style.minMaxRange}>
                <div>{minCardsCount}</div>
                <div>{maxCardsCount}</div>
            </div>
        </div>

    )
}