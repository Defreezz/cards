import {Dispatch, memo, useCallback, useState} from "react";
import style from "./personalInformation.module.scss"
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {selectProfileData} from "../../../../store/selectors";
import {ThunkType} from "../../../../store/store";
import {updateProfile} from "../../../../store/reducers/profileReducer";

type PersonalInformationType = {
    changeProfileEditingStatus: (status: boolean) => void

}
export const PersonalInformation = memo(({
                                             changeProfileEditingStatus,
                                         }: PersonalInformationType) => {

    const dispatch = useDispatch<Dispatch<ThunkType>>()
    const profile = useSelector(selectProfileData)

    const [nickname, setNickname] = useState<string>(profile.name)
    const [avatar, setAvatar] = useState<string|undefined>(profile.avatar)

    const handlerOnclickCancel = useCallback(() => {
        changeProfileEditingStatus(false)
    }, [changeProfileEditingStatus])

    const handlerOnclickSave = useCallback(() => {
        dispatch(updateProfile({name:nickname,avatar}))
    }, [dispatch,nickname,avatar])

    const disableButton = nickname === profile.name && avatar === profile.avatar
    return (
        <div className={style.container}>
            <div className={style.title}>Personal information</div>
            <img alt={"avatar"} src={profile.avatar} className={style.ava}/>
            <div className={style.input_container}>
                <span>Nickname:</span>
                <SuperInputText
                    value={nickname}
                    onChangeText={setNickname}
                />
                <span>Email:</span>
                <SuperInputText
                    value={profile.email}
                />
                <span>URL avatar:</span>
                <SuperInputText
                    value={avatar}
                    onChangeText={setAvatar}
                />
            </div>
            <div className={style.button_container}>
                <SuperButton
                    onClick={handlerOnclickCancel}
                >
                    Cancel
                </SuperButton>
                <SuperButton
                    disabled={disableButton}
                    onClick={handlerOnclickSave}
                >
                    Save
                </SuperButton>
            </div>
        </div>
    )
})