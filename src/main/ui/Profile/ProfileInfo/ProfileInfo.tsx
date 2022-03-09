import style from "./profileInfo.module.scss"
import SuperButton from "../../common/SuperButton/SuperButton";
import React, {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {selectProfileData} from "../../../../store/selectors";

type ProfileInfoType = {
    changeProfileEditingStatus: (status: boolean) => void
}

export const ProfileInfo = memo(({
                                     changeProfileEditingStatus,
                                 }: ProfileInfoType) => {

    const profile = useSelector(selectProfileData)

    const handlerOnclick = useCallback(() => {
        changeProfileEditingStatus(true)
    }, [changeProfileEditingStatus])


    return (
        <div className={style.container}>
            <div className={style.info_block}>
                <div className={style.inner_info_top}>
                    <img alt={"avatar"} src={profile.avatar} className={style.ava}/>
                    <div className={style.name}>{profile.name}</div>
                    <SuperButton
                        onClick={handlerOnclick}
                    >
                        Edit Profile
                    </SuperButton>
                </div>
                <div className={style.inner_info_bottom}>
                </div>
            </div>
        </div>
    )
})