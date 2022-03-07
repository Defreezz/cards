import style from "./profileInfo.module.scss"
import SuperButton from "../../common/SuperButton/SuperButton";
import React, {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {selectAvatar, selectName} from "../../../../store/selectors";

type ProfileInfoType = {
    changeProfileEditingStatus: (status: boolean) => void
    profileEditingStatus: boolean
}

export const ProfileInfo = memo(({
                                     changeProfileEditingStatus,
                                     profileEditingStatus,
                                 }: ProfileInfoType) => {
    const name = useSelector(selectName)
    const avatar = useSelector(selectAvatar)

    const handlerOnclick = useCallback(() => {
        changeProfileEditingStatus(!profileEditingStatus)
    }, [changeProfileEditingStatus,profileEditingStatus])
    console.log("prof")
    return (
        <div className={style.container}>
            <div className={style.info_block}>
                <div className={style.inner_info_top}>
                    <img alt={"avatar"} src={avatar} className={style.ava}/>
                    <div className={style.name}>{name}</div>
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