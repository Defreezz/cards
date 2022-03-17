import style from "./profileInfo.module.scss"
import SuperButton from "../../common/SuperButton/SuperButton";
import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {selectProfileData} from "../../../../store/selectors";
import {logout} from "../../../../store/reducers/profileReducer";
import {useTypedDispatch} from "../../../utils";
import {Table} from "../../PacksList/Table/Table";
import {addPack} from "../../../../store/reducers/packsReducer";


type ProfileInfoType = {
    changeProfileEditingStatus: (status: boolean) => void
}

export const ProfileInfo = memo(({
                                     changeProfileEditingStatus,
                                 }: ProfileInfoType) => {


    const dispatch = useTypedDispatch()
    const profile = useSelector(selectProfileData)

    const handleChangeProfileEditingStatus = useCallback(() => {
        changeProfileEditingStatus(true)
    }, [changeProfileEditingStatus])

    const handleLogoutClick = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    const handleAddPackClick = useCallback(() => {
        dispatch(addPack())
    }, [dispatch])

    return (
        <div className={style.container}>
            <div className={style.info_block}>
                <div className={style.inner_info_top}>
                    <img alt={"avatar"} src={profile.avatar} className={style.ava}/>
                    <div className={style.name}>{profile.name}</div>
                    <SuperButton
                        onClick={handleChangeProfileEditingStatus}
                    >
                        Edit Profile
                    </SuperButton>
                </div>
                <div className={style.inner_info_bottom}>
                    <SuperButton
                        onClick={handleAddPackClick}
                    >
                        add
                    </SuperButton>
                    <div className={style.logout_button}>
                        <SuperButton
                        onClick={handleLogoutClick}
                    >
                        Logout
                    </SuperButton>
                    </div>
                </div>
            </div>
            <Table/>
        </div>
    )
})