let tag = document.getElementById("joke");
let punch = document.getElementById("punch");
let btn = document.getElementById("btn");

btn.addEventListener("click",async function f(){
    let data = await fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    let res = await data.json();
    console.log(res);
    tag.innerText = res[0].setup;
    punch.innerText = res[0].punchline;
    });


