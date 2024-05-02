const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}


const oldAges = [100];

type CourseType = {
    title: string
    price: number
}

const courses: Array<CourseType> = [
    { title: "css", price: 100 },
    { title: "js", price: 200 },
    { title: "React", price: 150 }
]

const cheapCourses = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    { title: "css", price: 100 },
    { title: "React", price: 150 }
]
// Предикатор - устройство, которое выполняет контроль.