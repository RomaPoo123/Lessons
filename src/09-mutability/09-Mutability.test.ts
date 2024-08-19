import { User1Type } from "./09-Mutability";


function icreaseAge(u: User1Type) {
    u.age++;
}


test("reference type test", () => {

    var user = {
        name: "Roman",
        age: 27,
        address: { title: "Mira" }
    }

    icreaseAge(user);
    expect(user.age).toBe(28)

    const superman = user
    superman.age = 1000;
    expect(user.age).toBe(1000);
})

test("array reference test", () => {
    var users = [
        {
            name: "Roman",
            age: 27
        },
        {
            name: "Sasha",
            age: 23
        }
    ]
    var admins = users
    admins.push({ name: "Egor", age: 18 })
    expect(users[2]).toEqual({ name: "Egor", age: 18 })
})

test("value test", () => {
    var usersCount = 100
    var adminsCount = usersCount
    adminsCount++
    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)

})

test("reference type test_2", () => {

    var user = {
        name: "Roman",
        age: 27,
        address: { title: "Mira" }
    }
    let addr = user.address

    let user2: User1Type = {
        name: "Sasha",
        age: 23,
        address: user.address
    }
    user2.address.title = "Kanary"
    expect(user.address.title).toBe("Kanary")

})

test("array type test_2", () => {

    var user = {
        name: "Roma",
        age: 27,
        address: { title: "Mira" }
    }

    let user2: User1Type = {
        name: "Sasha",
        age: 23,
        address: user.address
    }

    let users = [user, user2, { name: 'Katya', age: 18, address: user2.address }]

    const admins = [user, user2]

    admins[0].name = "Roman"

    expect(user.name).toBe("Roman")
    expect(users[0].name).toBe("Roman")

})
