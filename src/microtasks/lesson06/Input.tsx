import React from "react";
import { ChangeEvent } from "react";

type InputPropsType = {
    setTitle: (title: string) => void
    title: string
}

export function Input(props: InputPropsType) {

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeTitle} />
        </div>
    )
}
