const employee = {
    name: "Chris",
    streetAddress: "1 Main Street"
};

function updateEmployeeWithKeyAndValue(object, key, value){
    return{
        ...object,
        [key]: value
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    const deletedEmployee = {...employee}
    delete deletedEmployee[key]
    return deletedEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee 
}