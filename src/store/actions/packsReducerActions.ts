import {PacksResponseType} from '../../main/api/types';


export enum PACK_ACTIONS {
    SET_PACKS = 'Packs/SET-PACKS',
    SET_SORT_PUCKS = 'Packs/SET-SORT-PACKS',
    SET_PACK_NAME = 'Packs/SET-PACK-NAME',
    SET_RANGE_CARDS = 'Packs/SET-RANGE-CARDS',
    SET_PAGE_OF_PACKS = 'Packs/SET-PAGE-OF-PACKS',
    SET_IS_MY_PACK = 'Packs/SET-IS-MY-PACK',
    SET_PAGE_COUNT = 'Packs/SET-PAGE-COUNT',
}

export type PacksReducerActionsType =
    | ReturnType<typeof setPacks>
    | ReturnType<typeof setSortPacks>
    | ReturnType<typeof setItemNameSort>
    | ReturnType<typeof setPackName>
    | ReturnType<typeof setRangeCards>
    | ReturnType<typeof setPageOfPacks>
    | ReturnType<typeof setPageCount>
    | ReturnType<typeof setModeIsMyPack>

export const setPacks = (packs: PacksResponseType) =>
    ({type: PACK_ACTIONS.SET_PACKS, payload: packs})

export const setItemNameSort = (itemNameSort: '0name' | '1name') =>
    ({type: PACK_ACTIONS.SET_SORT_PUCKS, payload: {sort: {itemNameSort}}} as const)

export const setSortPacks = (sortPacks: string) =>
    ({type: PACK_ACTIONS.SET_SORT_PUCKS, payload: {sortPacks}} as const)

export const setPackName = (packName: string) =>
    ({type: PACK_ACTIONS.SET_PACK_NAME, payload: {packName}} as const)

export const setRangeCards = (values: number[]) =>
    ({type: PACK_ACTIONS.SET_RANGE_CARDS, payload: {min : values[0], max : values[1]}} as const)

export const setPageOfPacks = (page: number) =>
    ({type: PACK_ACTIONS.SET_PAGE_OF_PACKS, payload: {page}} as const)

export const setModeIsMyPack = (isMyPack: boolean) =>
    ({type: PACK_ACTIONS.SET_IS_MY_PACK, payload: {isMyPack}} as const)

export const setPageCount = (pageCount: number) =>
    ({type: PACK_ACTIONS.SET_PAGE_COUNT, payload: {pageCount}} as const)





