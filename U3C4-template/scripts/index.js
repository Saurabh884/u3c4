// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import sidebar from "../components/sidebar.js";

let side = sidebar();

let sideBar = document.getElementById("sidebar");
sideBar.innerHTML= side;

let initial="in";
getData(initial)
let input=document.getElementById("countries");
input.addEventListener("click",function(e){
    getData(e.target.id)
    
})



async function getData(country){
    try{
        let url = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`);
        let data= await url.json();
        console.log(data.articles)
        append(data.articles)
    }
    catch(e){
        console.log("error:",e)
    }
}
function append(data){
    document.getElementById("results").innerHTML=null;
    data.map(function(elem)
    {
        let Maindiv=document.createElement("div");
        Maindiv.style.display="flex";

         let div1=document.createElement("div")

         let image=document.createElement("img");
         image.src=elem.urlToImage;
         image.style.height="150px";
         image.style.width="200px";

         let div2=document.createElement("div");

         let heading=document.createElement("h3")
         heading.innerHTML=elem.title;

        let para=document.createElement("p");
        para.innerHTML=elem.description;
        
         div2.append(heading,para);
         div1.append(image);
         Maindiv.append(div1,div2);
         document.getElementById("results").append(Maindiv);

    })
    

}