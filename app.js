window.addEventListener('load', function(){

    let search = document.querySelector("div .btn");
    var heroes = 

    search.addEventListener('click', function(e){
        e.preventDefault();

        fetch("http://localhost:8080/superheroes.php")
            .then(response =>{
                if (response.ok){
                    return response.text()
                }else{
                    return Promise.reject('Oops')
                }
            })
            .then(data =>{
                console.log(data);
                document.querySelector('#results').insertAdjacentHTML('afterbegin', data);
                
            })
    })

})