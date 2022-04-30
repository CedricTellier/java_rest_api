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
