// elements
const searchBar = document.querySelector('.search');
let images = document.querySelectorAll('a');


// checks value in search bar
searchBar.addEventListener("keyup", () => {
    displayHandler(searchBar.value);
});


// alts show/hide class of img with dataset including search term vs those that don't
function displayHandler(value) {
   
    for (let img of images) {
       
      
        if (img.dataset.title.includes(value)) {
            img.classList.add("show");
            img.classList.remove("hide");
        } else {
            img.classList.add("hide");
            img.classList.remove("show");
        }
    }


}