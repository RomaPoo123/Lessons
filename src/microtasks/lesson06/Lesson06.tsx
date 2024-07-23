import React, { useState } from "react";

import { FullInput } from "./FullInput";
import { Input } from "./Input";
import { Button } from "./Button";


export function Lesson6() {
    let [message, setMessage] = useState([
        { message: "message1" },
        { message: "message2" },
        { message: "message3" },
    ])
    let [title, setTitle] = useState('')

    const addTitle = (title: string) => {
        setMessage([{ message: title }, ...message])
        setTitle("")
    }
    { {/* Вариант с вложенным input и button */ } }

    return (
        <div>
            {/* <FullInput addTitle={(addTitleHandler)} />  */}
            <Input setTitle={setTitle} title={title} />
            <Button name={"+"} callBack={() => addTitle(title)} />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}

        </div>
    )
}