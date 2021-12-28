// Write your solution in this file!
const employee = {name:"Ethan", streetAddress:"64 Concord"};
function  updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmp = {...employee};
    newEmp[key] = value;
    return newEmp;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmp = employee;
    newEmp[key] = value;
    return newEmp;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmp = {...employee};
    delete newEmp[key];
    return newEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmp = employee;
    delete newEmp[key];
    return newEmp;

}