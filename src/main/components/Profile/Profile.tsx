import  {useState} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PersonalInformation} from './PersonalInformation/PersonalInformation';
import style from './profile.module.scss'

export const Profile = () => {

    const [profileEditingStatus, setProfileEditingStatus] = useState<boolean>(false)

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
