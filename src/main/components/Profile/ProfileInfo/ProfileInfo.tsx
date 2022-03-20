import style from "./profileInfo.module.scss"
import SuperButton from "../../common/SuperButton/SuperButton";
import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {selectProfileData} from "../../../../store/selectors";
import {useTypedDispatch} from "../../../utils";
import {PacksTable} from "../../PacksList/PacksTable/PacksTable";
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

    const handleAddPackClick = useCallback(() => {
        dispatch(addPack())
    }, [dispatch])

    return (
        <div className={style.container}>
            <div className={style.info_block}>
                <div className={style.inner_info_top}>
                    <img alt={"avatar"} src={profile.avatar} className={style.ava}/>
                    <div className={style.name}>{profile.name}</div>
                    <div className={style.blockButtons}>
                        <SuperButton
                            onClick={handleChangeProfileEditingStatus}
                        >
                            Edit Profile
                        </SuperButton>
                        <SuperButton
                            onClick={handleAddPackClick}
                        >
                            Add pack
                        </SuperButton>
                    </div>
                </div>
                <div className={style.inner_info_bottom}>

                </div>
            </div>
            <PacksTable/>
        </div>
    )
})