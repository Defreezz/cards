import {CardsResponseType} from "../../main/api/types";
import {CardsReducerActionsType} from "../actions/cardsReducerActions";


const initState: CardsResponseType = {
    cards: [{
        _id: '',
        user_id: '',
        updated: new Date(),
        created: new Date(),
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
    pageCount: 0,
}

export const packReducer = (state = initState, action: CardsReducerActionsType): CardsResponseType => {
    switch (action.type) {
        default:
            return state;
    }
};