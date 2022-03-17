import {PacksResponseType} from '../../main/api/types';


export enum PACK_ACTIONS {
    SET_PACKS = 'Packs/SET-PACKS',
    SET_SORT_PUCKS = 'Packs/SET-SORT-PACKS',
    SET_PACK_NAME = 'Packs/SET-PACK-NAME',
}

export type PacksReducerActionsType =
    | ReturnType<typeof setPacks>
    | ReturnType<typeof setSortPacks>
    | ReturnType<typeof setItemNameSort>
    | ReturnType<typeof setPackName>

export const setPacks = (packs: PacksResponseType) =>
    ({type: PACK_ACTIONS.SET_PACKS, payload: packs} )

export const setItemNameSort = (itemNameSort:'0name' | '1name') =>
    ({type: PACK_ACTIONS.SET_SORT_PUCKS, payload: {sort: {itemNameSort}}} as const)

export const setSortPacks = (sortPacks:string) =>
    ({type: PACK_ACTIONS.SET_SORT_PUCKS, payload: {sortPacks}} as const)

export const setPackName = (packName:string) =>
    ({type: PACK_ACTIONS.SET_PACK_NAME, payload: {packName}} as const)





