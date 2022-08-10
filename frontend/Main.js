window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const funtionAPI = '';

const getVisitCount = () => {
    let count = 30;
    fetch(funtionAPI).then(response =>){
        return response.json()
    }).then(response=>{
        console.log("Website Called Funtion API.");
        count = response.count;
        document.getElementById("counter").innerText = count;

    }).catch(function(error){
        console.log(error);
    });
    return count;
}