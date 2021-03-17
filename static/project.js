var currSlide = 1;
showSlide(currSlide);

$("#BtnAdd").on("click", todoAppend);

function todoAppend() {
    var text = $(".TextBasic").val();
    if(text.length > 0) {
        $("#ListBody tr:last-child").after("<tr><td><input type='checkbox' class='BtnChk'></td><td>" + text + "</td></tr>")
    }
}

function button_click(num) {
  showSlide((currSlide += num));
}

function showSlide(num) {
  const slides = document.querySelectorAll(".slide");
  if(num > slides.length) {
    currSlide =1;
  }
  
  if(num < 1) {
    currSlide = slides.length;
  }
  
  for(var i=0; i < slides.length; i++){
    slides[i].style.display="none";
  }

  slides[currSlide - 1].style.display="block";
}