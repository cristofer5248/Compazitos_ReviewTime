var timer = 30;
function countdown() {
  alert('aja');
  document.getElementById('countdownElement').style.display="block";
  var interval = setInterval(function() {
    timer--;
    $('.timer').text(timer);
    if (timer === 0) {
      clearInterval(interval);
      checkTheAnswer('e');
    }
  }, 1000);
}
