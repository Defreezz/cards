import React from 'react'
import {Range}  from 'rc-slider'
import 'rc-slider/assets/index.css';


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value: number[]
    min : number
    max : number //
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        min,
        max
    }
) => {
    const onChangeCallback = (newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[])
    }
    const track = {
        left: 0,
        height: 8,
        borderRadius: 6,
        backgroundColor: "#757576",
    }
    const handles = {
        width: 14,
        height: 14,
        cursor: "pointer",
        //cursor: -webkit-grab,
        marginTop: -3,
        borderRadius: "50%",
        border: "solid 2px #757576",
        backgroundColor: "#757576",
    }
    const rail = {
        height:7,
        backgroundColor:"#acacb0",
    }
    return (
        <>

            <Range
                value={value}
                onChange={onChangeCallback}
                allowCross={false}
                trackStyle={[track]}
                handleStyle={[handles,handles]}
                railStyle={rail}
                min={min}
                max={max}
            />
        </>
    );
}

export default SuperDoubleRange
