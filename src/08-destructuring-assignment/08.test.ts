import { ManType } from "./08";

let man: ManType;

beforeEach(() => {
    man = {
        name: "Roman",
        age: 27,
        lessons: [
            {
                number: 1,
                title: "HTML"
            },
            {
                number: 2,
                title: "CSS"
            },
            {
                number: 3,
                title: "JavaScript"
            },
        ],
        address: {
            street: {
                number: 125,
                title: "street world"
            }
        }
    }
})


test("a", () => {

    // 1 Присваивание переменным, свойств обьекта man
    const a = man.age;
    const l = man.lessons

    expect(a).toBe(27);// 27
    expect(l.length).toBe(3);// 3

    // Деструктурирующее присваивание

    const { age, lessons } = man;
    const { title } = man.address.street

    expect(age).toBe(27);// 27
    expect(lessons.length).toBe(3);// 3
    expect(title).toBe("street world");// "street world"
})



test("b", () => {
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]

    const [ls1, ls2] = man.lessons

    const [lss1, , ...restLess] = man.lessons

    expect(l1.title).toBe("HTML")
    expect(l2.title).toBe("CSS")

    expect(ls1.title).toBe("HTML")
    expect(l2.title).toBe("CSS")

    expect(lss1.title).toBe("HTML")
    expect(restLess[0].title).toBe("JavaScript")
    expect(restLess[0]).toStrictEqual({
        number: 3,
        title: "JavaScript"
    })
})