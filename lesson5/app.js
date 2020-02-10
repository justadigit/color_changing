let textpara = document.querySelector("#text");
textpara.innerHTML ="<h1>Replaced</h1>";

let namearray = ["Mg Mg","Ma Ma","Hla Hla","Mya Mya"];
let namepara = document.querySelector("#name");
namepara.innerText="";
namearray.forEach(name=>{
    namepara.innerHTML+=`<p>${name}  is replaced </p>`;
});
