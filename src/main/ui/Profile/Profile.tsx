import React, {useState} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PersonalInformation} from "./PersonalInformation/PersonalInformation";

export const Profile = () => {

    const [profileEditingStatus, setProfileEditingStatus] = useState<boolean>(false)

    return (
        !profileEditingStatus
            ? <ProfileInfo
                changeProfileEditingStatus={setProfileEditingStatus}
            />
            : <PersonalInformation
                changeProfileEditingStatus={setProfileEditingStatus}
            />
    )
};
