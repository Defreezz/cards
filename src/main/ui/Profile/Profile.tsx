import React, {Dispatch} from "react";
import SuperInputText from "../common/SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import {selectName} from "../../../store/selectors";
import {ThunkType} from "../../../store/store";
import {updateProfile} from "../../../store/reducers/profileReducer";

export const Profile = () => {
    const name = useSelector(selectName)
    const dispatch = useDispatch<Dispatch<ThunkType>>()

const handlerRename = (name:string) => {
  dispatch(updateProfile({name}))
}
    return (
        <>
            <div>{name}</div>
            <SuperInputText/>
        </>)
};
