import { CityTupe } from "../02-object/02_02";
import { addMoneyToBudget } from "./03";
import { repairHouse } from "./03";
import { toFireStaff } from "./03";
import { toHireStaff } from "./03";
import { createMessage } from "./03";

let city: CityTupe;

beforeEach(()=> {
    city = {
        title:"Viborg",
        houses: [
            {
                id:1,
                buildedAt: 2012,
                repaired: false,
                address: 
                    { 
                        id: 1,
                        number:100,
                        street: {id:1, title: "White street"}
                    }
        },
        {
            id:2,
            buildedAt: 2008,
            repaired: false,
            address: 
                { 
                    id:2,
                    number:100,
                    street: {id:2, title: "Happy street"}
                }
        },
        {
            id:3,
            buildedAt: 2020,
            repaired: false,
            address: 
                { 
                    id:3,
                    number:101,
                    street: {id:3, title: "Happy street"}
                }
    },
    
        ],
        governmentBuildings: [
            {   
                id:4,
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: 
                    { 
                        id:4,
                        street: {id:4,title: "Central Str"}
                    }
            },
            {   
                id:5,
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: 
                    { 
                        id:5,
                        street: {id:5, title: "South Str"}
                    }
            }
        ],
        citizensNumber: 1000000
    }
})



// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});
// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});


// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});


// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});
// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});
//  передать сообщение city
test('create message should be correct for city', () => {
    let message = createMessage(city);

    expect(message).toBe("Hello Viborg citizens. I want be happy. All 1000000 people");
});