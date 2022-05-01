async function insertNewClient(event) {
    event.preventDefault();

    let client = {
        firstname: document.getElementById("clientName").value,
        lastname: document.getElementById("clientLastname").value,
        age: parseInt(document.getElementById("clientAge").value),
        company: document.getElementById("clientCompany").value,
    };

    document.getElementById("insertClientForm").reset();
    closeModal("insertClientModal");

    fetch("http://localhost:8080/clients", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    }).then(response => response.json()).then(function(data) {
            getClients();
    })
    .catch(function(error) {
        console.log(error);
    });

    return true;
}

async function deleteClient(){
    closeModal("deleteClientModal");
    fetch("http://localhost:8080/clients/" + document.getElementById("deleteClientBtn").dataset.delete, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(function(data) {
        getClients();
    })
    .catch(function(error) {
        console.log(error);
    });
}

function getAClient(id){
    fetch("http://localhost:8080/clients/" + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(function(client) {
        document.getElementById("clientModifyName").value = client.firstname;
        document.getElementById("clientModifyLastname").value = client.lastname;
        document.getElementById("clientModifyCompany").value = client.company;
        document.getElementById("clientModifyAge").value = client.age;
    })
        .catch(function(error) {
            console.log(error);
        });
}


function modifyClient(event){

    event.preventDefault();
    let client = {
        firstname: document.getElementById("clientModifyName").value,
        lastname: document.getElementById("clientModifyLastname").value,
        age: parseInt(document.getElementById("clientModifyAge").value),
        company: document.getElementById("clientModifyCompany").value,
    };
    document.getElementById("modifyClientForm").reset();
    closeModal("modifyClientModal");

    fetch("http://localhost:8080/clients/" + document.getElementById("modifyClientBtn").dataset.modify, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(client)
    }).then(response => response.json()).then(function(employee) {
        getClients();
    })
        .catch(function(error) {
            console.log(error);
        });

    return true;
}
