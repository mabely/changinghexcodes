var i = 0;
var lines = "i must remember to sign in.";
var message = '';
// var color = '';
// colorgen();
forloop();

function colorgen(){
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  // console.log('1'+color);
  // forloop(color);
  return color;
}

function forloop(){
  for (var i = 1; i < 101; i++) {
    color=colorgen();
    console.log(message);
// WHY DOES += NOT GET RECOGNISED IF I DONT USE GLOBAL VAR FOR MESSAGE
// BELOW ADDS THE UNIQUE IDS FOR EACH LINE TO CHANGE THE COLOR BUT UNABLE TO MAKE THE CSS SELECTOR DYNAMIC/SET VIA VARIABLE. IT IS LEFT AS A PLACEHOLDER FOR SOLUTION
    message += '<h4 class="forlines" style="color:' + color + ';">' + i + '. ' + lines + '<br />';
    console.log(color);
    document.getElementById('lines').innerHTML = message;
    // document.getElementById('idtag').style.color = color;
    $("#lines").css("color", color);

  }
}
