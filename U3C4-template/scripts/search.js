// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import sidebar from "../components/sidebar.js";

let side = sidebar();

let sideBar = document.getElementById("sidebar");
sideBar.innerHTML= side;

let input = document.getElementById("search_input");
input.addEventListener("keypress",function(e){
    if(e.code=="Enter"){
        if(input.value){
            localStorage.setItem("news",input.value);
            location.href= "./search.html";
        }
    }
})

async function getData(){
    try{
        let inputData = document.getElementById("search_input").value;
        let url = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${inputData}`);
        let data= await url.json();
        console.log(data)

    }
    catch(e){
        console.log("error:",e)
    }
}
