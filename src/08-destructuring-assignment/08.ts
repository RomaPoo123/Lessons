export type ManType = {
    name: string,
    age: number,
    lessons: Array<{
        number: number
        title: string
    }>,
    address: AddressType
}
type AddressType = {
    street: StreetType
}
type StreetType = {
    number: number
    title: string
}