import {CardsResponseType} from "../../main/api/types";
import {PACK_ACTIONS} from "./packsReducerActions";


export enum CARD_ACTIONS {
    SET_CARDS = 'Cards/SET-CARDS',
    SET_PAGE_OF_CARDS = 'Cards/SET-PAGE-OF-CARDS',
    SET_SORT_CARDS = 'Cards/SET-SORT-CARDS'
}

export type CardsReducerActionsType =
    | ReturnType<typeof setCards>
    | ReturnType<typeof setPageOfCards>
    | ReturnType<typeof setSortCards>


export const setCards = (cards: CardsResponseType) =>
    ({type: CARD_ACTIONS.SET_CARDS, payload: cards} as const)
export const setPageOfCards = (page: number) =>
    ({type: CARD_ACTIONS.SET_PAGE_OF_CARDS, payload: {page}} as const)
export const setSortCards = (sortCards: string) =>
    ({type: CARD_ACTIONS.SET_SORT_CARDS, payload: {sortCards}} as const)