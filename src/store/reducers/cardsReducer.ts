import {CardsResponseType, QueryCardsParamsType} from "../../main/api/types";
import {CARD_ACTIONS, CardsReducerActionsType, setCards} from "../actions/cardsReducerActions";
import {ThunkType} from "../store";
import {setOperationStatus} from "../actions/appReducerActions";
import {cardsApi} from "../../main/api/api";

export type InitStateType = CardsResponseType & QueryCardsParamsType
export const initState: InitStateType = {
    cards: [{
        _id: '',
        user_id: '',
        updated: '',
        created: '',
        cardsPack_id: '',
        answer: '',
        grade: 0,
        question: '',
        shots: 0,
    }],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    packUserId: '',
    page: 1,
    pageCount: 10,
    min:0,
    max:0,
    cardsPack_id:'',
    cardAnswer:'',
    cardQuestion:'',
    sortCards:'',
}

export const cardsReducer = (state = initState, action: CardsReducerActionsType): InitStateType => {
    switch (action.type) {
        case CARD_ACTIONS.SET_CARDS:
        case CARD_ACTIONS.SET_PAGE_OF_CARDS:
        case CARD_ACTIONS.SET_SORT_CARDS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const getCards = (queryParams: Partial<QueryCardsParamsType>): ThunkType => async (dispatch, getState) => {
    const {pageCount,page,sortCards} = getState().cards
    try {
        dispatch(setOperationStatus('loading'))
        const response = await cardsApi.getCards({
            pageCount,
            page,
            sortCards,
            ...queryParams
        })
        dispatch(setCards(response.data))
        dispatch(setOperationStatus('completed'))
    } catch (e) {

    }
}