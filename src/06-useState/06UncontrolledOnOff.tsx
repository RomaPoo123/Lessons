import React, { useState } from "react"


type PropsType = {
}


export function UncontrolledOnnOff(props: PropsType) {

    let [value, setValue] = useState<boolean>(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: value ? "green" : "white",
        borderRadius: "2px",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: (!value) ? "red" : "white",
        borderRadius: "2px",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: value ? "green" : "red",
    }

    return (
        <div>
            <button onClick={() => setValue(true)} style={onStyle}>On</button>
            <button onClick={() => setValue(false)} style={offStyle}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}