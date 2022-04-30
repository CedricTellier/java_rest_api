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
