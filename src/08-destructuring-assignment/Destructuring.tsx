import React from "react"
import { ManType } from "./08"

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

export const ManComponent: React.FC<PropsType> = ({ title, man, ...restProps }) => {
    return (
        <>
            <h1>{title}</h1>
            <hr />
            <div>
                <ul>
                    <li>Name: {man.name}</li>
                    <li>Age: {man.age}</li>
                    <li>Car: {restProps.car.model}</li>

                </ul>
            </div>
        </>
    )
}