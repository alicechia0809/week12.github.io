const pix = [
'bird.jpg', 'bullet.jpg', 'butterfly.jpg', 'cat.jpg', 'elk.jpg', 'fox.jpg', 'horse.jpg', 'kangaroo.jpg', 'rabbit.jpg', 'rhinoceros.jpg', 'tiger.jpg', 'wolf.jpg'    
]

const HTMLforPics = []

for (let picture of pix){
    
    HTMLforPics.push(`<img src="images/${picture}" alt="">`)
}

const $gallery = document.getElementById(`gallery`)

$gallery.innerHTML = HTMLforPics.join(` `)

var modal = document.getElementById("myModal");
function myFunction(imgs) {
  var expandImg = document.getElementById("img01");
  var imgText = document.getElementById("caption");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}