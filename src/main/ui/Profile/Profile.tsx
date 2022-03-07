import React, {useState} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PersonalInformation} from "./PersonalInformation/PersonalInformation";

export const Profile = () => {

    const [profileEditingStatus, setProfileEditingStatus] = useState<boolean>(false)

    return (
        !profileEditingStatus
            ? <ProfileInfo
                profileEditingStatus={profileEditingStatus}
                changeProfileEditingStatus={setProfileEditingStatus}
            />
            : <PersonalInformation
                profileEditingStatus={profileEditingStatus}
                changeProfileEditingStatus={setProfileEditingStatus}
            />
    )
};
