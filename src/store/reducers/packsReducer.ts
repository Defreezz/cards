import {PacksResponseType} from "../../main/api/types";
import {PACK_ACTIONS, PacksReducerActionsType} from "../actions/packsReducerActions";

const initState:PacksResponseType = {
    cardPacks:[{
        _id:'',
        cardsCount:0,
        name:'',
        created:new Date(),
        updated:new Date(),
        user_id: '',
    }],
    cardPacksTotalCount:0,
    maxCardsCount:0,
    minCardsCount :0,
    page:0,
    pageCount:0,
}

export const packReducer = (state = initState, action: PacksReducerActionsType): PacksResponseType => {
    switch (action.type) {
        case PACK_ACTIONS.SET_PACKS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};