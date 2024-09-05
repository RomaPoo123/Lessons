import { addNewBooksToUser, makeHairstyle, moveUser, moveUserToOtherHouse, updateNewBooksToUser, UserType, UserWithBooksType, UserWithLaptopType } from "./10-immutability";


test("reference hairFunction", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32
        ,
        address: {
            city: "Minsk",
            house: 12
        }
    }

    const awasonUser = makeHairstyle(user, 2)

    expect(awasonUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Asus"
        }
    }

    const movedUser = moveUser(user, "Moscow")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Moscow")

})

test("change house", () => {
    let user: UserWithBooksType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        books: ["Гарри Потер", "Математика Золотой Век", "комикс Betman"],
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Asus"
        },
    }

    const userCopy = moveUserToOtherHouse(user, 26)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(26)
    expect(user.laptop).toBe(userCopy.laptop)
})


test("change books", () => {
    let user: UserWithBooksType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        books: ["Гарри Потер", "Математика Золотой Век", "комикс Betman"],
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Asus"
        },
    }

    const userCopy = addNewBooksToUser(user, "JS")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books.length).toBe(4)
})


test("update books", () => {
    let user: UserWithBooksType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        books: ["Гарри Потер", "Математика Золотой Век", "комикс Betman"],
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Asus"
        },
    }

    const userCopy = updateNewBooksToUser(user, user.books[0], "Гарри Потер2")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[0]).toBe("Гарри Потер2")
})


