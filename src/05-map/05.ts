export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    { name: "Andrew Ivanov", age: 33 },
    { name: "Alexander Petrov", age: 24 },
    { name: "Dmitry Sidorov", age: 18 },
]


const romichTransformator = (man: ManType) => ({
    stack: ["css", "html", "js", "react", "tdd"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["css", "html", "js", "react", "tdd"],
        firstName: "Andrew",
        lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "react", "tdd"],
        firstName: "Alexander",
        lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "react", "tdd"],
        firstName: "Dmitry",
        lastName: "Sidorov"
    }
]

const dev2 = [
    romichTransformator(people[0]),
    romichTransformator(people[1]),
    romichTransformator(people[2])
]


const dev3 = people.map(man => romichTransformator(man))
console.log(dev3)