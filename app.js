window.addEventListener('load', function(){

    let form = document.getElementById("searchers");
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        let test = document.getElementById('searches').value;
           console.log(test);
           var param = {query:`${test}`};
           urlParam = new URLSearchParams(Object.entries(param));
        fetch(`superheroes.php?`+ urlParam)
            .then(response =>{
                if (response.ok){
                    return response.text();
                }else{
                }
            })
            .then(data =>{
                document.querySelector('#results').innerHTML = data;
                });
                })
            })