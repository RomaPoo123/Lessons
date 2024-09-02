import React, { ChangeEvent, useRef, useState } from "react";
import { OnnOff } from "../06-useState/06OnOff";
import { action } from "@storybook/addon-actions"


export default {
    title: "input",
    component: OnnOff
};

export const UncontrolledInput = () => <input />


export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(event) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }} /> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    let inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    return <><input id={"InputLol"} ref={inputRef} /><button onClick={save}>save</button>- actual value: {value}</>
}

export const ControlledInput = () => {
    const [perentValue, setPerentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPerentValue(e.currentTarget.value)
    }
    return <input value={perentValue} onChange={onChange} />
}

export const ControlledCheckbox = () => {
    const [perentValue, setPerentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPerentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" onChange={onChange} checked={perentValue} />

}
export const ControlledSecect = () => {
    const [perentValue, setPerentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPerentValue(e.currentTarget.value)
    }
    return <select value={perentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>


}



export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"} />