import {PacksResponseType, QueryPackParamsType} from "../../main/api/types";
import {PACK_ACTIONS, PacksReducerActionsType, setPacks} from "../actions/packsReducerActions";
import {ThunkType} from "../store";
import {packAPI} from "../../main/api/api";
import {setOperationStatus} from "../actions/appReducerActions";

export type InitStateType = PacksResponseType & QueryPackParamsType

const initState: InitStateType = {
    cardPacks: [{
        _id: '',
        cardsCount: 0,
        name: '',
        created: '',
        updated: '',
        user_id: '',
        private: false,
        user_name: '',
    }],
    packName: '',
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    min: 0,
    max: 0,
    user_id: '',
    sortPacks: '',

}

export const packsReducer = (state = initState, action: PacksReducerActionsType): InitStateType => {
    switch (action.type) {
        case PACK_ACTIONS.SET_PACKS:
        case PACK_ACTIONS.SET_SORT_PUCKS:
        case PACK_ACTIONS.SET_PACK_NAME:
        case PACK_ACTIONS.SET_RANGE_CARDS:
        case PACK_ACTIONS.SET_PAGE_OF_PACKS:
        case PACK_ACTIONS.SET_PAGE_COUNT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const getPacks = (queryParams: Partial<QueryPackParamsType>): ThunkType => async (dispatch, getState) => {
    const {packName, sortPacks, page, pageCount, max, min, user_id} = getState().packs
    try {
        dispatch(setOperationStatus('loading'))
        const response = await packAPI.getPacks({
            packName,
            sortPacks,
            page,
            pageCount,
            max,
            min,
            user_id, ...queryParams
        })
        dispatch(setPacks(response.data))
        dispatch(setOperationStatus('completed'))
    } catch (e) {

    }

}
export const addPack = (): ThunkType => async (dispatch, getState) => {
    const user_id = getState().profile._id
    try {
        dispatch(setOperationStatus('loading'))
        await packAPI.addPack({name: 'another name'})
        await dispatch(getPacks({user_id}))
        dispatch(setOperationStatus('completed'))
    } catch (e) {

    }

}
export const deletePack = (id: string): ThunkType => async (dispatch, getState) => {
    const user_id = getState().profile._id
    try {
        dispatch(setOperationStatus('loading'))
        await packAPI.deletePack(id)
        await dispatch(getPacks({user_id}))
        dispatch(setOperationStatus('completed'))
    } catch (e) {

    }
}
