function showMessage()
{
    alert("Thank You For Visiting My Portfolio!");
}

let btn = document.getElementById("darkBtn");

btn.addEventListener("click", function()
{
    document.body.classList.toggle("dark");
});

console.log("Portfolio Loaded");

document.addEventListener("DOMContentLoaded", function()
{
    console.log("Website Ready");
});

let skills = document.querySelectorAll(".skill");

skills.forEach(function(skill)
{
    skill.addEventListener("mouseover", function()
    {
        skill.style.transform = "scale(1.1)";
    });

    skill.addEventListener("mouseout", function()
    {
        skill.style.transform = "scale(1)";
    });
});