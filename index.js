const imageContainerEl=document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

// btnEl.addEventListener("mouseover",(event)=>{
//   const x = event.pageX - btnEl.offsetLeft;
//
//   const y = event.pageY - btnEl.offsetTop;
//
//
//     btnEl.style.setProperty("--xPos", x + "px");
//
//     btnEl.style.setProperty("--yPos", y + "px");
//
// });

btnEl.addEventListener("click", () =>{
    imageNum =10;
    addNewImages();
});
console.log(btnEl);


function addNewImages() {
  for (let index = 0; index < 10; index++) {
      const newImgEl = document.createElement("img");
      newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
      imageContainerEl.appendChild(newImgEl);
  }
}
