
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};
const dogLinkCreator = (dogs) =>{
  const dogLinks = [];
  const dogNames = Object.keys(dogs);
  dogNames.forEach(dog => {
    const outerLi = document.createElement("li");
    const dogLink = document.createElement("a");
    dogLink.innerHTML = dog;
    dogLink.href = dogs[dog];
    outerLi.classList = "dog-link";
    outerLi.appendChild(dogLink);
    dogLinks.push(outerLi);
  });
  return dogLinks;
};
const attachDogLinks = () =>{
  const dogLinks = dogLinkCreator(dogs);
  const dropDownList = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach(link => dropDownList.appendChild(link));
};
attachDogLinks();
const handleLeave = ()=>{
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(child => child.classList.remove("open"));
};
const handleEnter = ()=>{
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(child => child.classList.add("open"));
};
const nav = document.querySelector(".drop-down-dog-nav");
nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handleLeave);


