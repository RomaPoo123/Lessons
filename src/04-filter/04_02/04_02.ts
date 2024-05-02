import { CityTupe } from "../../02-object/02_02";
import { StreetType } from "../../02-object/02_02";
import { GovernmentBuildingType } from "../../02-object/02_02";

export function demolishHousesOnTheStreet(city: CityTupe, street: string) {
    city.houses = city.houses.filter(house => !(house.address.street.title == street))

}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings: Array<GovernmentBuildingType>, people: number) {
    return governmentBuildings.filter(building => building.staffCount > people)
}