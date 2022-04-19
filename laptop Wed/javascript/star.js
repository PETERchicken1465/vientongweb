//   tạo nút
mybutton = document.getElementById("myBtn");

// Khi người dùng cuộn xuống 20px sẽ xuất hiện nút
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// khi người dùng nhấn vào nút nó sẽ trở về đầu trang
function topFunction() {
	document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

/*cuộn lên giữ  yên*/
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("menu");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }