import style from '../packList.module.scss'
import SuperDoubleRange from "../../common/SuperDoubleRange/SuperDoubleRange";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../store/store";
import {useEffect, useMemo, useState} from "react";
import {setRangeCards} from "../../../../store/actions/packsReducerActions";
import debounce from 'lodash.debounce';

export const Sidebar = () => {

    //const pack = useSelector(packSelector);

    const maxCardsCount = useSelector<AppStoreType, number>(state => state.packs.maxCardsCount)
    const minCardsCount = useSelector<AppStoreType, number>(state => state.packs.minCardsCount)

    const dispatch = useDispatch()

    const [rangeValues, setRangeValues] = useState([minCardsCount, maxCardsCount])

    const debouncedRange = useMemo(() => debounce( values => dispatch(setRangeCards(values)), 1000), [dispatch])

    const onChangeRangeCards = (values: number[]) => {
        setRangeValues(values)
        debouncedRange(values)
    }

    useEffect(() => {
        setRangeValues([minCardsCount, maxCardsCount])
    }, [minCardsCount, maxCardsCount])

    return (
        <div className={style.sidebar}>
            <div className={style.doubleRange}>
                <span>Show number of cards</span>
                <SuperDoubleRange value={rangeValues}
                                  onChangeRange={onChangeRangeCards}
                                  min={minCardsCount}
                                  max={maxCardsCount}
                />
            </div>
            <div className={style.minMaxRange}>
                <div>{minCardsCount}</div>
                <div>{maxCardsCount}</div>
            </div>
        </div>

    )
}