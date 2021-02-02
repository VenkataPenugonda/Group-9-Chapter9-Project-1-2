
window.addEventListener("load", function() 
{
  
  var thumbs = document.getElementById("thumbnails");

  thumbs.addEventListener("click", function(e) {
      var clickedImageSource = e.target.src;
      var newSrc = clickedImageSource.replace("small", "medium");
      var featuredImage = document.querySelector("#featured img");
      featuredImage.src = newSrc;
      featuredImage.title = e.target.title;
      var Figcap = document.querySelector("#featured figcaption");
     Figcap.innerHTML=e.target.title;
    
  });
  var featured = document.getElementById("featured");
  featured.addEventListener("mouseover", function(e) {
    var caption = document.querySelector("#featured figcaption");
    caption.style.transition = "opacity 1.5s";
    caption.style.opacity = "80%";});
    var featured = document.getElementById("featured");
    featured.addEventListener("mouseout", function(e) {
      var caption = document.querySelector("#featured figcaption");
      caption.style.transition = "opacity 1.5s";
      caption.style.opacity = "0%";});
   

});

