const shareIcon = document.querySelector(".shareIcon");
const shareContent = document.querySelector(".shareContent");
const modelImage = document.querySelector(".modelImage");
const post = document.querySelector(".post");

shareIcon.addEventListener("click", () => {
  shareContent.classList.toggle("active");
  modelImage.classList.toggle("active");
  post.classList.toggle("active")
  if (shareContent.classList.contains("active")) {
    shareIcon.style.fill = "hsl(210, 46%, 95%)";
    shareIcon.style.backgroundColor = "hsl(212, 23%, 69%)";
  } else {
    shareIcon.style.fill = "white";
    shareIcon.style.backgroundColor = "transparent";
  }
});
