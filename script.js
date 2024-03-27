const Option = document.querySelector("#Option");
const OptionBox = document.querySelector(".Option-Box");
Option.addEventListener("click", () => {
    console.log(Option);
    OptionBox.classList.toggle("Dnone");
});



