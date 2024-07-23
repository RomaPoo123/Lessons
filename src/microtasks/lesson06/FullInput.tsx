import React, { ChangeEvent, useState } from "react";

type FullInputType = {
    addTitle: (title: string) => void,
}

export function FullInput({ addTitle }: FullInputType) {
    let [title, setTitle] = useState('')

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickHandler = () => {
        addTitle(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeTitle} />
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}