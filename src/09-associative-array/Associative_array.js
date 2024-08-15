var user = {
    name: "Roma",
    age: 27,
    address: {
        city: {
            title: 'Vyborg'
        }
    }
}

console.log(user.address.city.title)
console.log(user["address"]["city"]["title"])



var user2 = {
    "name": "Roma",
    "age": 27,
    "address": {
        "city": {
            "title": 'Vyborg'
        }
    }
}

console.log(user2["address"]["city"]["title"])

let city = {}

console.log(city);

city.title = "Vyborg"

console.log(city);

city["citizensCount"] = 80000

console.log(city)


let users = ["Roman", "Sasha", "Valera", "Katya"]
users["map"]((e) => { e += e + " Sun" })

let usersObj = {
    1: "Roman",
    2: "Sasha",
    3: "Valera",
    4: "Katya",
}
console.log(usersObj)

console.log(usersObj["1"])
console.log(usersObj[1])

// Работа с Ассоциативным массивом
console.log(Object.keys(usersObj))
console.log(Object.values(usersObj))

usersObj[{}] = "Присваеваем названию свойства обьект"// свойством будет '[object Object]'
usersObj[{ name: "Roma", age: 27 }] = "Проверка" // перезатрет значение свойства '[object Object]'
usersObj[{ name: "Roma", age: 27, toString() { return "Еще одна проверка" } }] = "Проверка"// перезапишет название свойства на "Еще одна проверка"

console.log(usersObj)