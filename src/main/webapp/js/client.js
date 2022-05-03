async function getClients() {
    try {
        const response = await fetch("http://localhost:8080/clients")
        if(response.status != 200) return;
        const clients = await response.json();
        if(clients == null) return;
        displayDatas(clients,"table_clients_body");
    }
    catch(error) {
        console.log(error);
    }
}

async function insertNewClient(event) {
    event.preventDefault();
    try{

        let client = {
            firstname: document.getElementById("clientName").value,
            lastname: document.getElementById("clientLastname").value,
            age: parseInt(document.getElementById("clientAge").value),
            company: document.getElementById("clientCompany").value,
        };

        document.getElementById("insertClientForm").reset();
        closeModal("insertClientModal");

        const response = await fetch("http://localhost:8080/clients", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        })
        if(response.status != 200) return;
        getClients();
    }
    catch(error){
        console.log(error);
    }
    return true;
}

async function deleteClient(){
    try {
        closeModal("deleteClientModal");
        const response = await fetch("http://localhost:8080/clients/" + document.getElementById("deleteClientBtn").dataset.delete, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.status != 200)return;
        getClients();
    }
    catch(error){
        console.log(error);
    }
}

async function getAClient(id){
    try {
        const response = await fetch("http://localhost:8080/clients/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.status != 200) return;
        const client = await response.json();
        if(client == null) return;
        document.getElementById("clientModifyName").value = client.firstname;
        document.getElementById("clientModifyLastname").value = client.lastname;
        document.getElementById("clientModifyCompany").value = client.company;
        document.getElementById("clientModifyAge").value = client.age;
    }
    catch(error){
        console.log(error);
    }
}


async function modifyClient(event){

    event.preventDefault();
    try {
        let client = {
            firstname: document.getElementById("clientModifyName").value,
            lastname: document.getElementById("clientModifyLastname").value,
            age: parseInt(document.getElementById("clientModifyAge").value),
            company: document.getElementById("clientModifyCompany").value,
        };
        document.getElementById("modifyClientForm").reset();
        closeModal("modifyClientModal");

        const response = await fetch("http://localhost:8080/clients/" + document.getElementById("modifyClientBtn").dataset.modify, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(client)
        })
        if(response.status != 200) return;
        getClients();
    }
    catch(error){
        console.log(error);
    }
    return true;
}
