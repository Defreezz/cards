import {memo, useEffect, useState} from 'react';
import style from './search.module.scss';
import {useTypedDispatch} from '../../../utils';
import SuperInputText from '../SuperInputText/SuperInputText';
import {setPackName} from "../../../../store/actions/packsReducerActions";
import {useDebounce} from "../../../hooks/useDebounce";
import {Path} from "../../../enum";

type SearchType = {
    location: '/packs-list'|'/cards-list',
}


export const Search = memo(({location}: SearchType) => {
    const dispatch = useTypedDispatch();
    const [inputValue, setInputValue] = useState('')
    const value = useDebounce(inputValue)

    useEffect(() => {
        if (location === Path.Packs)
            dispatch(setPackName(value))
        //else
            //dispatch(setCardName(value))
    }, [dispatch,location, value])


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