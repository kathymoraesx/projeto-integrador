document.addEventListener("DOMContentLoaded", ()=>{

    const theme_switch = document.getElementById("switch-theme");
    const body = document.body
    const sun = document.getElementById("sun")
    const moon = document.getElementById("moon")

    theme_switch.addEventListener("click", ()=>{
        sun.style.display = sun.style.display === "none" ? "block": "none";
        moon.style.display = moon.style.display === "block" ? "none": "block";
    })
})