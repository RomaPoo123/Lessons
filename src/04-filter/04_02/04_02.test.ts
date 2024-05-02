import { CityTupe } from "./../../02-object/02_02";
import { demolishHousesOnTheStreet } from "./04_02";
import { getBuildingsWithStaffCountGreaterThen } from "./04_02";

let city: CityTupe;

beforeEach(() => {
    city = {
        title: "Viborg",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address:
                {
                    id: 1,
                    number: 100,
                    street: { id: 1, title: "White street" }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address:
                {
                    id: 2,
                    number: 100,
                    street: { id: 2, title: "Happy street" }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address:
                {
                    id: 3,
                    number: 101,
                    street: { id: 3, title: "Happy street" }
                }
            },

        ],
        governmentBuildings: [
            {
                id: 4,
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address:
                {
                    id: 4,
                    street: { id: 4, title: "Central Str" }
                }
            },
            {
                id: 5,
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address:
                {
                    id: 5,
                    street: { id: 5, title: "South Str" }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})

