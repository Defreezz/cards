import {CardsResponseType, QueryCardsParamsType} from "../../main/api/types";
import {CARD_ACTIONS, CardsReducerActionsType, setCards} from "../actions/cardsReducerActions";
import {ThunkType} from "../store";
import {setOperationStatus} from "../actions/appReducerActions";
import {cardsApi} from "../../main/api/api";


const initState: CardsResponseType = {
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
    page: 0,
    pageCount: 20,
}

export const cardsReducer = (state = initState, action: CardsReducerActionsType): CardsResponseType => {
    switch (action.type) {
        case CARD_ACTIONS.SET_CARDS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const getCards = (queryParams: Partial<QueryCardsParamsType>): ThunkType => async (dispatch, getState) => {
    const {pageCount} = getState().cards
    try {
        dispatch(setOperationStatus('loading'))
        const response = await cardsApi.getCards({
            pageCount,
            ...queryParams
        })
        dispatch(setCards(response.data))
        dispatch(setOperationStatus('completed'))
    } catch (e) {

    }
}