(function () {
    function main() {
        var tabButtons = [].slice.call(
            document.querySelectorAll("ul.tab-nav li a.button")
        );

        tabButtons.map(function (button) {
            button.addEventListener("click", function () {
                document
                    .querySelector("li a.active.button")
                    .classList.remove("active");
                button.classList.add("active");

                document
                    .querySelector(".tab-pane.active")
                    .classList.remove("active");
                document
                    .querySelector(button.getAttribute("href"))
                    .classList.add("active");
            });
        });
    }

    if (document.readyState !== "loading") {
        main();
    } else {
        document.addEventListener("DOMContentLoaded", main);
    }
})();

function openModal(modal, id = null) {
    document.getElementById(modal).style.display = "block";
    getModalBehavior(modal, id);
}

function closeModal(modal) {
    document.getElementById(modal).style.display = "none";
}

function getModalBehavior(modal, id) {
    if (modal == "modifyClientModal") {
        document.getElementById("modifyClientBtn").dataset.modify = id;
        getAClient(id);
    } else if (modal == "deleteClientModal") {
        document.getElementById("deleteClientBtn").dataset.delete = id;
    } else if (modal == "modifyEmployeeModal") {
        document.getElementById("modifyEmployeeBtn").dataset.modify = id;
        window.api.send("getAPost", id);
    } else if (modal == "deleteEmployeeModal") {
        document.getElementById("deleteEmployeeBtn").dataset.delete = id;
    }
}

function getEmployees(){
    fetch("http://localhost:8080/employees")
        .then(response => response.json())
        .then(function(data) {
            displayDatas(data,"table_employees_body");
        })
        .catch(function(error) {
            console.log(error);
        });
}

function getClients() {
    fetch("http://localhost:8080/clients")
        .then(response => response.json())
        .then(function(data) {
            displayDatas(data,"table_clients_body");
        })
        .catch(function(error) {
            console.log(error);
        });
}


function displayDatas(data, table){
    document.getElementById(table).innerHTML = "";
    let lTable = document.getElementById(
        table
    );
    let i = 0;
    data.forEach(function (obj) {
        let lNewLigne = lTable.insertRow(i);

        lNewLigne.setAttribute("data-id", obj.id);
        lNewLigne.insertCell(0).appendChild(document.createTextNode(obj.id));
        lNewLigne.insertCell(1).appendChild(document.createTextNode(obj.firstname));
        lNewLigne.insertCell(2).appendChild(document.createTextNode(obj.lastname));
        lNewLigne.insertCell(3).appendChild(document.createTextNode(obj.company));
        lNewLigne.insertCell(4).appendChild(document.createTextNode(obj.age));

        if(table == "table_clients_body"){
            lNewLigne.insertCell(5).innerHTML =
                "<button id='modifyClientBtn' onclick='openModal(\"modifyClientModal\"," +
                obj.id +
                ")' class='button'><i class='far fa-edit'></i></button> <button id='deleteClientBtn'onclick='openModal(\"deleteClientModal\"," +
                obj.id +
                ")' class='button'><i class='fas fa-trash-alt'></i></button>";
        }
        else{
            lNewLigne.insertCell(5).innerHTML =
                "<button id='modifyEmployeeBtn' onclick='openModal(\"modifyEmployeeModal\"," +
                obj.id +
                ")' class='button'><i class='far fa-edit'></i></button> <button id='deleteEmployeeBtn'onclick='openModal(\"deleteEmployeeModal\"," +
                obj.id +
                ")' class='button'><i class='fas fa-trash-alt'></i></button>";
        }
        i++;
    });
}


window.onload = getClients(); // new quote on page load