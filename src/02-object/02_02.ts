//  Типизация houses
export type StreetType= {
    id: number
    title: string
}
type AddressType= {
    id: number
    number?: number
    street: StreetType
}
export type Housetype = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
//  Типизация governmentBuilding

export type GovernmentBuildingType = {
    id:number
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}



export type CityTupe = {
    title: string
    houses: Array<Housetype>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}