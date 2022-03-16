import {memo, useEffect, useState} from 'react';
import style from './table.module.scss';
import {useTypedDispatch} from '../../../utils';
import SuperInputText from '../../common/SuperInputText/SuperInputText';

export const PacksSearch = memo(() => {
    const dispatch = useTypedDispatch();
    const [inputValue, setInputValue] = useState("")
    //const debounced = useDebounced(inputValue);

    // useEffect(() => {
    //     dispatch(inputChangeHandlerAC(debounced))
    // }, [debounced]);

    return (
        <div className={style.searchContainer} >
            <SuperInputText
                className={style.searchInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder={"Search pack by name"}
            />
        </div>
    );
});