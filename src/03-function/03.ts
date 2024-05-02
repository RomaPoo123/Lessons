import React from "react";
import { man } from "../02-object/02";
import { ManType } from "../02-object/02";
import { CityTupe } from "../02-object/02_02";
import { GovernmentBuildingType } from "../02-object/02_02";
import { Housetype } from "../02-object/02_02";

const sum = (a:number, b:number) => {
    return a + b;
}

export const addSkill=(man:ManType, skill: string)=>{
    man.technologies.push({id:new Date().getTime(), title: skill })
}

export const addActive = (obj:ManType)=> {
obj.isActive = true;
}


export function rusPeople (obj:ManType, country: string) {
    return  obj.address.country === country ?  true : false;

}

export const addMoneyToBudget =(Building:GovernmentBuildingType, sum:number)=> {
    Building.budget = Building.budget + sum;
};
export const repairHouse = (house:Housetype)=> {
    house.repaired = true;
}

export const toFireStaff =(Building:GovernmentBuildingType, staff: number )=> {
    Building.staffCount -= staff;
}

export const toHireStaff =(Building:GovernmentBuildingType, staff: number)=> {
    Building.staffCount += staff;
}
export function createMessage(obj:CityTupe) {
    return `Hello ${obj.title} citizens. I want be happy. All ${obj.citizensNumber} people`;
}