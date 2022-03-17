import {PacksResponseType} from "../../main/api/types";

export enum PACK_ACTIONS {
    SET_PACKS = 'Packs/SET-PACKS',
}

export type PacksReducerActionsType =
    | SetPacks


type SetPacks = {
    type: PACK_ACTIONS.SET_PACKS
    payload: PacksResponseType
}


export const setPack = (packs: PacksResponseType): SetPacks =>
    ({type: PACK_ACTIONS.SET_PACKS, payload: packs})

