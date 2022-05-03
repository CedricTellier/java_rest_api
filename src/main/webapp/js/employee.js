async function insertNewEmployee(event) {
    event.preventDefault();
    try {
        let employee = {
            firstname: document.getElementById("employeeName").value,
            lastname: document.getElementById("employeeLastname").value,
            age: parseInt(document.getElementById("employeeAge").value),
            company: document.getElementById("employeeCompany").value,
        };

        document.getElementById("insertEmployeeForm").reset();
        closeModal("insertEmployeeModal");

        const response = await fetch("http://localhost:8080/employees", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })

        if(response.status!= 200) return;
        getEmployees();
    }
    catch(error){
        console.log(error);
    }
    return true;
}

async function deleteEmployee(){
    try {
        closeModal("deleteEmployeeModal");
        const response = await fetch("http://localhost:8080/employees/" + document.getElementById("deleteEmployeeBtn").dataset.delete, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status != 200) return;
        getEmployees();
    }
    catch(error){
        console.log(error);
    }
}

async function getAnEmployee(id){
    try {
        const response = await fetch("http://localhost:8080/employees/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status != 200) return;
        const employee = await response.json();
        document.getElementById("employeeModifyName").value = employee.firstname;
        document.getElementById("employeeModifyLastname").value = employee.lastname;
        document.getElementById("employeeModifyAge").value = employee.age;
        document.getElementById("employeeModifyCompany").value = employee.company;
    }
    catch (e) {
        console.log(e);
    }
}

async function modifyEmployee(event){
    event.preventDefault();
    try {
        let employee = {
            firstname: document.getElementById("employeeModifyName").value,
            lastname: document.getElementById("employeeModifyLastname").value,
            age: parseInt(document.getElementById("employeeModifyAge").value),
            company: document.getElementById("employeeModifyCompany").value,
        };
        document.getElementById("modifyEmployeeForm").reset();
        closeModal("modifyEmployeeModal");

        const response = await fetch("http://localhost:8080/employees/" + document.getElementById("modifyEmployeeBtn").dataset.modify, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee)
        });

        if (response.status != 200) return;
        getEmployees();
    }
    catch(error){
        console.log(error);
    }
    return true;
}
