import React from 'react';
import {useSelector} from "react-redux";
import {InitStateType} from "../../../store/reducers/packsReducer";
import s from './pagination.module.css'


type PaginatoeType = {
    cardPacksTotalCount: number
    pageCount: number
    currentPage: number
    portionSize: number
    portionNumber: number
    setPortionNumber: (portionNumber: number) => void
    setCurrentPage: (page: number) => void
}


const Pagination = (props: PaginatoeType) => {



    let pagesCount = Math.ceil(props.cardPacksTotalCount / props.pageCount)     //всего страниц

    let pagesCountArr = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesCountArr.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)     //кол-во порций страниц
    let leftPortionPageNumber = (props.portionNumber - 1) * props.portionSize + 1       //стр начало порции
    let rightPortionPageNumber = props.portionNumber * props.portionSize         //стр конец порции

    const onClickPageChange = (page: number) => {
        props.setCurrentPage(page)
    }
    const onClickPreviousPortion = () => {
        props.setPortionNumber(props.portionNumber - 1)
    }
    const onClickNextPortion = () => {
        props.setPortionNumber(props.portionNumber + 1)
    }

    return (
        <div>
            <button
                    onClick={onClickPreviousPortion}>PREV</button>

            {pagesCountArr
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <button  key={p}
                                   className={`${props.currentPage === p ? s.selectedPage : ''} ${s.pages}`}
                                   onClick={() => onClickPageChange(p)}>{p}</button>
                })
            }

            {portionCount > props.portionNumber &&
            <button onClick={onClickNextPortion}>NEXT</button>
            }
        </div>
    );
};

export default Pagination;