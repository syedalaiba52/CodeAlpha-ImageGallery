const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    let newIndex = i;
    gallery[i].onclick = () => {
      console.log(i);

      function preview() {
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        previewImg.src = selectedImgUrl;
        console.log(selectedImgUrl);
      }
      preview();

      previewBox.classList.add("show");

      closeIcon.onclick = () => {
        previewBox.classList.remove("show");
      };
    };
  }
};
