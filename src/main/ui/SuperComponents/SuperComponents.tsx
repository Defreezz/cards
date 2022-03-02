import React from "react";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";


export const SuperComponents = () => {
    return (
        <div>
            <SuperButton>Button </SuperButton>
            <br/>
            <SuperInputText/>
            <br/>
            <SuperCheckbox/>
            <br/>
        </div>
    );
};
