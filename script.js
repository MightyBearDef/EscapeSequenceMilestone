const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element

  // let thumbnailImage = document.querySelector("thumbnail");
  // thumbnailImage.append("div#thumbnail-container");

  // let imageThumbnail = <img src="thumbnail" alt="" />;
  // let container = document.getElementById("#thumbnail-container");
  // container.appendChild;

  const img = document.createElement("img");
  img.src = imageSource;
  img.classList.add("thumbnail");
  const container = document.getElementById("thumbnail-container");
  container.appendChild(img);

  // 1.2 Customize the element
  // 1.3 Append the element
  // 1.4 Add the onclick

  // img.onclick = document.getElementById("fullsize-image");
  img.onclick = function () {
    // let fullSize = document.getElementById("fullsize-image");
    // fullSize.src = imageSource;
    document.getElementById("fullsize-image").src = imageSource;
  };
}
function addAllThumbnails() {
  // 2.1 Loop through imageSources

  for (let i = 0; i < imageSources.length; i++) {
    addThumbnail(imageSources[i]);
  }
  // 2.2 Call addThumbnail each iteration
}

// 2.3 Call addAllThumbnails
addAllThumbnails();
// LevelUp Display the first image on page load
