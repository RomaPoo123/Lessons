import type { Meta, StoryObj } from "@storybook/react/*";
import { useState } from "react";
import { OnnOff } from "./06OnOff";
import { UncontrolledOnnOff } from "./06UncontrolledOnOff";
import { Button } from "../microtasks/lesson06/Button";
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof UncontrolledOnnOff> = {
    component: UncontrolledOnnOff,
}

export default meta;

const onChangeHandler = action("onChange")

type Story = StoryObj<typeof OnnOff>

export const FirstStory: Story = {
    args: {
        value: false,
        onChange: () => { },
    }
}

export const OnModeUncontrolledOnnOff = () => {
    let [value, setValue] = useState<boolean>(true)

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
            <button onClick={onChangeHandler} style={onStyle}>On</button>
            <button onClick={onChangeHandler} style={offStyle}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export const OffModeUncontrolledOnnOff = () => {
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
            <button onClick={() => { }} style={onStyle}>On</button>
            <button onClick={() => { }} style={offStyle}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export const WarkingUncontrolledOnnOff = () => {
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

const callback = action("on or offclicked")

export const OnMode = () => <OnnOff value={true} onChange={callback} />
export const OffMode = () => <OnnOff value={false} onChange={callback} />
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return (
        < OnnOff value={value} onChange={setValue} />
    )
}