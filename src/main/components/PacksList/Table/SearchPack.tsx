import {memo, useEffect, useState} from 'react';
import style from './table.module.scss';
import {useTypedDispatch} from '../../../utils';
import SuperInputText from '../../common/SuperInputText/SuperInputText';
import {setPackName} from "../../../../store/actions/packsReducerActions";
import {useDebounce} from "../../../hooks/useDebounce";

export const PacksSearch = memo(() => {
    const dispatch = useTypedDispatch();
    const [inputValue, setInputValue] = useState('')
    const value = useDebounce(inputValue)

    useEffect(() => {
        dispatch(setPackName(value))
    }, [value])


    return (
        <div className={style.searchContainer}>
            <SuperInputText
                autoComplete={'off'}
                className={style.searchInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder={"Search pack by name"}
            />
        </div>
    );
});