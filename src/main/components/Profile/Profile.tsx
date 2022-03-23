import {useEffect, useState} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PersonalInformation} from './PersonalInformation/PersonalInformation';
import style from './profile.module.scss'
import {useSelector} from "react-redux";
import {selectSearchPackName, selectSortPacks, selectUserId} from "../../../store/selectors";
import {selectPagePacksReducer} from "../../../store/selectors/selectPagePacksReducer";
import {useLocation} from "react-router-dom";
import {getPacks} from "../../../store/reducers/packsReducer";
import {selectMinPacksReducer} from "../../../store/selectors/selectMinPacksReducer";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {selectMaxPacksReducer} from "../../../store/selectors/selectMaxPacksReducer";
import {AppStoreType} from "../../../store/store";

export const Profile = () => {

    const [profileEditingStatus, setProfileEditingStatus] = useState<boolean>(false)
    const dispatch = useTypedDispatch()

    const user_id = useSelector(selectUserId)
    const packName = useSelector(selectSearchPackName)
    const sortPacks = useSelector(selectSortPacks)
    const min = useSelector(selectMinPacksReducer)
    const max = useSelector(selectMaxPacksReducer)
    const page = useSelector(selectPagePacksReducer)
    const isMyPack = useSelector((state: AppStoreType) => state.packs.isMyPack)

    const {pathname} = useLocation()

    useEffect(() => {

        isMyPack && dispatch(getPacks({user_id}))
    }, [sortPacks, user_id, dispatch, pathname, packName, min, max, page])

    return (
        <div className={style.container}>
            {!profileEditingStatus
                ? <ProfileInfo
                    changeProfileEditingStatus={setProfileEditingStatus}
                />
                : <PersonalInformation
                    changeProfileEditingStatus={setProfileEditingStatus}
                />}
        </div>
    )
};
