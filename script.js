const loadingText = document.querySelector("#loadingtext")
const loadBtn = document.querySelector("#load")

loadBtn.addEventListener("click", hideText)


function hideText() {
    loadingText.style.display = "none"
}