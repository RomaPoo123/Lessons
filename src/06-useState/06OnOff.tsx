import React, { useState } from "react"


type PropsType = {
    value: boolean
    onChange: (on: boolean) => void
}


export function OnnOff(props: PropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.value ? "green" : "white",
        borderRadius: "2px",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: (!props.value) ? "red" : "white",
        borderRadius: "2px",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red",
    }

    return (
        <div>
            <button onClick={() => { props.onChange(true) }} style={onStyle}>On</button>
            <button onClick={() => { props.onChange(false) }} style={offStyle}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}