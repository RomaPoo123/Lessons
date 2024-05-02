test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => age > 90;

    const oldAges = ages.filter(age => age > 90);
    ;
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses chipper 160", () => {
    const courses: Array<CourseType> = [
        { title: "css", price: 100 },
        { title: "js", price: 200 },
        { title: "React", price: 150 }
    ]

    const cheapPredicat = (course: CourseType) => course.price < 160;


    const chipCourses = courses.filter(cheapPredicat);
    ;
    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("css");
    expect(chipCourses[0].price).toBe(100);
})

test("get only completed tasks", () => {
    const tasks = [
        { id: 1, title: "Bread", isDone: true },
        { id: 2, title: "Milk", isDone: true },
        { id: 3, title: "Banana", isDone: false },
        { id: 4, title: "Apple", isDone: true },
    ]

    const complitedTasks = tasks.filter(task => task.isDone)

    expect(complitedTasks.length).toBe(3);
    expect(complitedTasks[0].title).toBe("Bread");
    expect(complitedTasks[2].id).toBe(4);
})