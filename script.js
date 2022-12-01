

// Dark/Light mode -theme.....

var theme = document.getElementById("theme");
theme.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if( document.body.classList.contains("dark-theme")){
    theme.src = "dark theme icon/sun.png";
  }else{
    theme.src = "dark theme icon/moon.png";
  }
}

// coupon code ..........

let popupCloseButton = document.querySelector('#popupClose')
popupCloseButton.addEventListener('click',()=>{
  document.querySelector('#coupon-div').style.display='none';
})          
