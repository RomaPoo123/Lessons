import { ManType } from "../02-object/02"
import { addSkill } from "./03";
import { addActive } from "./03";
import { rusPeople } from "./03";


let man: ManType;
beforeEach(()=>{
    man = {
        id: 1,
        name: "Roman",
        age: 26,
        isActive: false,
        address: {
            country: "Russia",
            city: {
                name: "Saint-Peterburg",
                street:"Lenina",
            }
            
        },
        technologies: [
            {
                id:1,
                title: "HTML5"
            }, 
            {
                id:2,
                title: "CSS3"
            },
            {
                id:3,
                title: "Reactbib"
            },
            {
                id:4,
                title: "Vuebib"
            },
        ],
    } 
})



test ("new tech skill should be added to man", ()=>{

    const res =  addSkill(man,"Angular");


     expect(man.technologies.length).toBe(5);
     expect(man.technologies[4].title).toBe("Angular");
     expect(man.technologies[4].id).toBeDefined();
})
test ("man is active", ()=>{


    let res = addActive(man);

    expect(man.isActive).toBe(true);
})

test ("where are you from country", ()=>{


    let res = rusPeople(man, "Russia");

    expect(res).toBe(true);


})