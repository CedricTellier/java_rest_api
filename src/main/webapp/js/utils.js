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
    if (modal == "modifyOperationModal") {
        document.getElementById("modifyOperationBtn").dataset.modify = id;
        window.api.send("getAnOperation", id);
    } else if (modal == "deleteOperationModal") {
        document.getElementById("deleteOperationBtn").dataset.delete = id;
    } else if (modal == "modifyPostModal") {
        document.getElementById("modifyPostBtn").dataset.modify = id;
        window.api.send("getAPost", id);
    } else if (modal == "deletePostModal") {
        document.getElementById("deletePostBtn").dataset.delete = id;
    } else if (modal == "modifyProductModal") {
        document.getElementById("modifyProductBtn").dataset.modify = id;
        window.api.send("getAProduct", id);
    } else if (modal == "deleteProductModal") {
        document.getElementById("deleteProductBtn").dataset.delete = id;
    }
}
function getEmployees(){
    fetch("http://localhost:8080/employees")
        .then(response => response.json())
        .then(function(data) {
            console.log(data);

            /* data.filter(key => {

                 let quote = document.querySelector(".quote");
                 let author = document.querySelector(".author");
                 let cleanQuote = key.content.replace(/<\/?p[^>]*>/g, ''); // This way we remove <p> tag from quote (api has quotes with p tags)

                 let share = 'https://twitter.com/home?status=' + cleanQuote + ' Author: ' + key.title;
                 console.log(share)

                 quote.innerHTML = key.content;
                 author.innerHTML = key.title;

                 document.getElementById('twitterShare').href=share;
             });*/

        })
        .catch(function(error) {
            // If there is any error you will catch them here
            console.log(error);
        });
}

function getClients() {
    fetch("http://localhost:8080/clients/")
        .then(response => response.json())
        .then(function(data) {
            console.log(data);

           /* data.filter(key => {

                let quote = document.querySelector(".quote");
                let author = document.querySelector(".author");
                let cleanQuote = key.content.replace(/<\/?p[^>]*>/g, ''); // This way we remove <p> tag from quote (api has quotes with p tags)

                let share = 'https://twitter.com/home?status=' + cleanQuote + ' Author: ' + key.title;
                console.log(share)

                quote.innerHTML = key.content;
                author.innerHTML = key.title;

                document.getElementById('twitterShare').href=share;
            });*/

        })
        .catch(function(error) {
            // If there is any error you will catch them here
            console.log(error);
        });
}

window.onload = getClients(); // new quote on page load