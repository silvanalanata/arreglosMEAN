// desafio 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];



function imprimirNombres(array){
    for(let i=0; i < array.length; i++){    
        console.log(students[i]);

    }

}

imprimirNombres(students);

//desafio 2


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 //comento este codigo porque fue el primer intento 
/*
function numCaract(arr,param){
    let count = 0;
    console.log(param);
for (let i=0; i<arr.length; i++){
    let first = users.employees[i].first_name.length;
    let last = users.employees[i].last_name.length;
    let total=first + last;
    console.log(i+1 + " - " + users.employees[i].last_name + " , " + users.employees[i].first_name + " - " + total);

}

}
numCaract(users.employees, "EMPLOYEES");
numCaract(users.managers, "MANAGERS");
*/

function contar(users){
    let count=0;
    console.log("employees")
    for(let i=0; i<users.employees.length;i++){
       
        let first = users.employees[i].first_name.length;
        let last = users.employees[i].last_name.length;
        let total=first + last;
        console.log(i+1 + " - " + users.employees[i].last_name + " , " + users.employees[i].first_name + " - " + total);
    }
    console.log("managers")
    for(let i=0; i<users.managers.length;i++){
       
        let first = users.managers[i].first_name.length;
        let last = users.managers[i].last_name.length;
        let total=first + last;
        console.log(i+1 + " - " + users.managers[i].last_name + " , " + users.managers[i].first_name + " - " + total);
    }
}

contar(users);