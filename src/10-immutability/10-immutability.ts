export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string

}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {

    const copy = {
        ...u,
        address: { ...u.address, city }
    }
    return copy
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {

    const copy = {
        ...u,
        address: { ...u.address, house }
    }
    return copy
}
export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {

    const copy = {
        ...u,
        books: [...u.books, newBook]
    }
    return copy
}
export function updateNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {

    const copy = {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
    return copy
}