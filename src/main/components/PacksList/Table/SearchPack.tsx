import {memo, useEffect, useState} from 'react';
import style from './table.module.scss';
import {useTypedDispatch} from '../../../utils';
import SuperInputText from '../../common/SuperInputText/SuperInputText';
import {useSelector} from "react-redux";
import {selectPacks, selectSearchPackName} from "../../../../store/selectors";
import {setPackName} from "../../../../store/actions/packsReducerActions";
import {useDebounce} from "../../../hooks/useDebounce";

export const PacksSearch = memo(() => {
    const dispatch = useTypedDispatch();
    const packName = useSelector(selectSearchPackName)
    const [inputValue, setInputValue] = useState(packName)

    dispatch(setPackName(useDebounce(inputValue)))

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