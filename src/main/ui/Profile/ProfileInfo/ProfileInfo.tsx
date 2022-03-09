import style from "./profileInfo.module.scss"
import SuperButton from "../../common/SuperButton/SuperButton";
import React, {Dispatch, memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectProfileData} from "../../../../store/selectors";
import {ThunkType} from "../../../../store/store";
import {logout} from "../../../../store/reducers/appReducer";

type ProfileInfoType = {
    changeProfileEditingStatus: (status: boolean) => void
}

export const ProfileInfo = memo(({
                                     changeProfileEditingStatus,
                                 }: ProfileInfoType) => {
    const dispatch = useDispatch<Dispatch<ThunkType>>()
    const profile = useSelector(selectProfileData)

    const handlerChangeProfileEditingStatus = useCallback(() => {
        changeProfileEditingStatus(true)
    }, [changeProfileEditingStatus])
    const handlerLogout = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    return (
        <div className={style.container}>
            <div className={style.info_block}>
                <div className={style.inner_info_top}>
                    <img alt={"avatar"} src={profile.avatar} className={style.ava}/>
                    <div className={style.name}>{profile.name}</div>
                    <SuperButton
                        onClick={handlerChangeProfileEditingStatus}
                    >
                        Edit Profile
                    </SuperButton>
                </div>
                <div className={style.inner_info_bottom}>
                    <div className={style.logout_button}>
                        <SuperButton
                        onClick={handlerLogout}
                    >
                        Logout
                    </SuperButton>
                    </div>
                </div>
            </div>
        </div>
    )
})