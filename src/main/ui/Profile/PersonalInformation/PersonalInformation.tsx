import {Dispatch, memo, useCallback, useState} from "react";
import style from "./personalInformation.module.scss"
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {selectAvatar, selectEmail, selectName} from "../../../../store/selectors";
import {ThunkType} from "../../../../store/store";
import {updateProfile} from "../../../../store/reducers/profileReducer";

type PersonalInformationType = {
    changeProfileEditingStatus: (status: boolean) => void
    profileEditingStatus: boolean
}
export const PersonalInformation = memo(({
                                             changeProfileEditingStatus,
                                             profileEditingStatus,
                                         }: PersonalInformationType) => {
    const dispatch = useDispatch<Dispatch<ThunkType>>()
    const email = useSelector(selectEmail)
    const avatar = useSelector(selectAvatar)

    const [nickname, setNickname] = useState<string>(useSelector(selectName))

    const handlerOnclickCancel = useCallback(() => {
        changeProfileEditingStatus(!profileEditingStatus)
    }, [changeProfileEditingStatus, profileEditingStatus])
    const handlerOnclickSave = useCallback(() => {
        dispatch(updateProfile({name:nickname}))
    }, [dispatch,nickname])

    console.log("change")
    return (
        <div className={style.container}>
            <div className={style.title}>Personal information</div>
            <img alt={"avatar"} src={avatar} className={style.ava}/>
            <div className={style.input_container}>
                Nickname
                <SuperInputText
                    value={nickname}
                    onChangeText={setNickname}
                />
                Email
                <SuperInputText
                    value={email}
                />
            </div>
            <div className={style.button_container}>
                <SuperButton
                    onClick={handlerOnclickCancel}
                >
                    Cancel
                </SuperButton

                >
                <SuperButton
                    onClick={handlerOnclickSave}>
                    Save
                </SuperButton>
            </div>
        </div>
    )
})