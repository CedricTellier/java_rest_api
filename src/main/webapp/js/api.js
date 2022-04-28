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

/*const newQuote = document.getElementById('clients')
newQuote.addEventListener('click', getClients); // new quote on button click*/
window.onload = getClients(); // new quote on page load