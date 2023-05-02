// nav logic
const sitePages = document.getElementsByTagName("section")
const pageLinks = document.querySelectorAll(".nav-link")

for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener("click", (event) => {
        console.log(event.target.innerHTML)
        // hide all site pages, display = "none"
        for (let j = 0; j < sitePages.length; j++){
            if (event.target.innerHTML === sitePages[j].id) {
                sitePages[j].style.display = "block"
            } else {
                sitePages[j].style.display = "none"
            }
        }
    })
};