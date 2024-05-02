import React from 'react';


type LocalCityType = {
    name: string
    street: string
}

type TechnologiaType = {
    id: number
    title: string
}

type AddressType = {
    country: string
    city: LocalCityType
}

export type ManType = {
id: number
name: string
age: number
isActive: boolean
address: AddressType
technologies : Array<TechnologiaType>
}


export const man: ManType = {
    id: 1,
    name: "Roman",
    age: 26,
    isActive: true,
    address: {
        country: "Russia",
        city: {
            name: "Saint-Peterburg",
            street:"Lenina",
        }
        
    },
    technologies: [
        {
            id:1,
            title: "HTML5"
        }, 
        {
            id:2,
            title: "CSS3"
        },
        {
            id:3,
            title: "Reactbib"
        },
        {
            id:4,
            title: "Vuebib"
        },
    ],
}

