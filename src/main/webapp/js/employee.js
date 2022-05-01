async function insertNewEmployee(event) {
    event.preventDefault();

    let employee = {
        firstname: document.getElementById("employeeName").value,
        lastname: document.getElementById("employeeLastname").value,
        age: parseInt(document.getElementById("employeeAge").value),
        company: document.getElementById("employeeCompany").value,
    };

    document.getElementById("insertEmployeeForm").reset();
    closeModal("insertEmployeeModal");

    fetch("http://localhost:8080/employees", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    }).then(response => response.json()).then(function(data) {
        getEmployees();
    })
    .catch(function(error) {
        console.log(error);
    });

    return true;
}

async function deleteEmployee(){
    closeModal("deleteEmployeeModal");
    fetch("http://localhost:8080/employees/" + document.getElementById("deleteEmployeeBtn").dataset.delete, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(function(data) {
        getEmployees();
    })
        .catch(function(error) {
            console.log(error);
        });
}

function getAnEmployee(id){
    fetch("http://localhost:8080/employees/" + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(function(employee) {
        document.getElementById("employeeModifyName").value = employee.firstname;
        document.getElementById("employeeModifyLastname").value = employee.lastname;
        document.getElementById("employeeModifyAge").value = employee.age;
        document.getElementById("employeeModifyCompany").value = employee.company;
    })
        .catch(function(error) {
            console.log(error);
        });
}

function modifyEmployee(event){

    event.preventDefault();
    let employee = {
        firstname: document.getElementById("employeeModifyName").value,
        lastname: document.getElementById("employeeModifyLastname").value,
        age: parseInt(document.getElementById("employeeModifyAge").value),
        company: document.getElementById("employeeModifyCompany").value,
    };
    document.getElementById("modifyEmployeeForm").reset();
    closeModal("modifyEmployeeModal");

    fetch("http://localhost:8080/employees/" + document.getElementById("modifyEmployeeBtn").dataset.modify, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee)
    }).then(response => response.json()).then(function(employee) {
        getEmployees();
    })
    .catch(function(error) {
        console.log(error);
    });

    return true;
}
