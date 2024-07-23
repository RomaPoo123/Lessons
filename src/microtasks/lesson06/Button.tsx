import React from "react";

type buttonPropsType = {
    name: string,
    callBack: () => void
}


export function Button(props: buttonPropsType) {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    )
}