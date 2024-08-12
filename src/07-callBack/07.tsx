import React, { ChangeEvent, MouseEvent } from "react"


const callback = (): number => {
    alert("hey")
    return 12
}



export const User = () => {
    // Функции callback
    const onNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }
    const onBluer = () => {
        console.log("focus lost")
    }
    const OnFocus = () => {
        console.log("focus input")
    }
    const deletUser = (e: MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.name === "delet" ?
            alert("user should be deleted") : alert("user should been saved")
        // console.log(e.currentTarget.name)


    }
    const saveUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
        alert("user should been saved")

    }
    // UI 
    return <div>
        <input onChange={onNameChanged} onFocus={OnFocus} onBlur={onBluer} tabIndex={1} />
        <button name="delet" onClick={deletUser} tabIndex={2}>delet</button>
        <button name="save" onClick={deletUser} tabIndex={3}>save</button>
    </div>
}