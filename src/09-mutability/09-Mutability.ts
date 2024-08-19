
export type User1Type = {
    name: string
    age: number
    address: { title: string }
}

var user1: User1Type = {
    name: "Roman",
    age: 27,
    address: { title: "Mira" }
}

function icreaseAge(user: User1Type) {
    user.age++
}