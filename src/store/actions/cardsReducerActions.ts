import {CardsResponseType} from "../../main/api/types";


export enum CARD_ACTIONS {
    SET_CARDS = 'Cards/SET-CARDS',
}

export type CardsReducerActionsType =
    | SetCards


type SetCards = {
    type: CARD_ACTIONS.SET_CARDS
    payload: CardsResponseType
}


export const setPack = (cards: CardsResponseType): SetCards =>
    ({type: CARD_ACTIONS.SET_CARDS, payload: cards})