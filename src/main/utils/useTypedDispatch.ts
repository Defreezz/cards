import {useDispatch} from "react-redux";
import {Dispatch} from "react";
import {ThunkType} from "../../store/store";

export const useTypedDispatch = () => {
    return useDispatch<Dispatch<ThunkType>>()

}