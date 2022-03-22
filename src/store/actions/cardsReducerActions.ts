import {CardsResponseType} from "../../main/api/types";


export enum CARD_ACTIONS {
    SET_CARDS = 'Cards/SET-CARDS',
    SET_PAGE_OF_CARDS = 'Cards/SET-PAGE-OF-CARDS'
}

export type CardsReducerActionsType =
    | ReturnType<typeof setCards>
    | ReturnType<typeof setPageOfCards>




export const setCards = (cards: CardsResponseType) =>
    ({type: CARD_ACTIONS.SET_CARDS, payload: cards} as const)
export const setPageOfCards = (page: number) =>
    ({type: CARD_ACTIONS.SET_PAGE_OF_CARDS, payload: {page}} as const)