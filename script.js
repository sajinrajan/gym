
const threeBar = document.getElementById('three-bar');
const hiddenParentDiv = document.getElementById('hidden-parent-div');
const closeButton = document.getElementById('close-btn');

threeBar.addEventListener("click", function() {
    hiddenParentDiv.style.display = "block"
  });


//  threeBar.onclick=function () {
//   hiddenParentDiv.style.display = "block"
//   const isOpen =   hiddenParentDiv.style.contain('block')
//   hiddenParentDiv.style = isOpen
 
// };


// class


 function close() {
  console.log('close called');
  document.getElementById("hidden-parent-div").style.display ='none';
}
console.log(0);
