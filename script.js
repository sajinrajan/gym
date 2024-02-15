
const threeBar = document.getElementById('three-bar');
const hiddenParentDiv = document.getElementById('hidden-parent-div');
const closeButton = document.getElementById('close-btn');

threeBar.addEventListener("click", function() {
    hiddenParentDiv.style.display = "block"
  });

threeBar.onclick=function () {
  hiddenParentDiv.style.display = "block"
  const isOpen =   hiddenParentDiv.style.contain('block')
  hiddenParentDiv.style = isOpen
  ?'fa-solid fa-xmark'
  :'fa-solid fa-bars'
};


// class
