  
        let quotesDiv = document.getElementById('quotes');

        fetch('http://api.kanye.rest')
            .then(res => res.json())
            .then(quote => {
                quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
            })

        let catButton = document.getElementById('give-cat')

        catButton.addEventListener("click", evt => {
            let catDiv = document.getElementById('cat-pic')

            fetch('https://api.thecatapi.com/v1/images/search?')
                .then(res => res.json())
                .then(cats => {
                    cats.forEach(cat => {
                        catDiv.innerHTML = `<h3>Here is this cat wishing you the bestest day</h3>
                <img src="${cat.url}" alt="kitty" />`


                    });


                })



        })
    
