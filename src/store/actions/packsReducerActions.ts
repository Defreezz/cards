import {PacksResponseType} from '../../main/api/types';


export enum PACK_ACTIONS {
    SET_PACKS = 'Packs/SET-PACKS',
    SET_SORT_PUCKS = 'Packs/SET-SORT-PACKS',
    SET_PACK_NAME = 'Packs/SET-PACK-NAME',
    SET_CURRENT_PAGE = 'Pack/SET-CURRENT-PAGE'
}

export type PacksReducerActionsType =
    | ReturnType<typeof setPacks>
    | ReturnType<typeof setSortPacks>
    | ReturnType<typeof setItemNameSort>
    | ReturnType<typeof setPackName>
    | ReturnType<typeof setCurrentPage>

export const setPacks = (packs: PacksResponseType) =>
    ({type: PACK_ACTIONS.SET_PACKS, payload: packs} )

export const setItemNameSort = (itemNameSort:'0name' | '1name') =>
    ({type: PACK_ACTIONS.SET_SORT_PUCKS, payload: {sort: {itemNameSort}}} as const)

export const setSortPacks = (sortPacks:string) =>
    ({type: PACK_ACTIONS.SET_SORT_PUCKS, payload: {sortPacks}} as const)

export const setPackName = (packName:string) =>
    ({type: PACK_ACTIONS.SET_PACK_NAME, payload: {packName}} as const)

export const setCurrentPage = (page: number) => {
    return {
        type: PACK_ACTIONS.SET_CURRENT_PAGE,
        payload: {page},
    } as const
}



