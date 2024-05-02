import { CityTupe } from "./02_02";

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

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");
})

// 01. дополните тип GovernmentBuildingType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe("South Str");
})