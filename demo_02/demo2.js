//create a pg  with two image . when the button is clicked , swap the sourse attribute of the images.
var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");
 var btn =document.querySelector("button")
 btn.addEventListener("click", function() {
    var src1 = img1.src;
    var src2 = img2.src;
    img1.src = src2;
    img2.src = src1;
})