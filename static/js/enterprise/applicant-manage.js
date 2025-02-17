const newBanner = document.querySelector(".new-menu")
const paperBanner = document.querySelector(".paperpassed-menu")
const passBanner = document.querySelector(".pass-menu")
const failBanner = document.querySelector(".fail-menu")
const newContent = document.querySelector(".new-applicant")
const paperContent = document.querySelector(".paper-passed")
const passContent = document.querySelector(".final-passed")
const failContent = document.querySelector(".failed")


newBanner.addEventListener("click", () => {
    newContent.classList.remove("hidden")
    newBanner.classList.add("selected")
    paperContent.classList.add("hidden")
    paperBanner.classList.remove("selected")
    passContent.classList.add("hidden")
    passBanner.classList.remove("selected")
    failContent.classList.add("hidden")
    failBanner.classList.remove("selected")
})

paperBanner.addEventListener("click", () => {
    newContent.classList.add("hidden")
    newBanner.classList.remove("selected")
    paperContent.classList.remove("hidden")
    paperBanner.classList.add("selected")
    passContent.classList.add("hidden")
    passBanner.classList.remove("selected")
    failContent.classList.add("hidden")
    failBanner.classList.remove("selected")
})

passBanner.addEventListener("click", () => {
    newContent.classList.add("hidden")
    newBanner.classList.remove("selected")
    paperContent.classList.add("hidden")
    paperBanner.classList.remove("selected")
    passContent.classList.remove("hidden")
    passBanner.classList.add("selected")
    failContent.classList.add("hidden")
    failBanner.classList.remove("selected")
})

failBanner.addEventListener("click", () => {
    newContent.classList.add("hidden")
    newBanner.classList.remove("selected")
    paperContent.classList.add("hidden")
    paperBanner.classList.remove("selected")
    passContent.classList.add("hidden")
    passBanner.classList.remove("selected")
    failContent.classList.remove("hidden")
    failBanner.classList.add("selected")
})



const deleteApplicant = document.querySelectorAll("span.delete")

deleteApplicant.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.closest("tr").remove();
    })
})


const checkBox = document.querySelectorAll("table > input")

window.addEventListener("click", (e) => {
    if (e.target && e.target.matches("div.docu-pass")) {
        checkBox.forEach((buttons) => {
            if (buttons.checked) {
                console.log(buttons.parentElement.lastElementChild.innerHTML)
                buttons.parentElement.lastElementChild.innerHTML = "서류통과"
            }

        })
    }
})