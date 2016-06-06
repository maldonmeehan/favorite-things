$(function(){
  $(".blanks form").submit(function(event){
    event.preventDefault();

    var thing1Input = $("#thing1").val();
    var thing2Input = $("#thing2").val();
    var thing3Input = $("#thing3").val();
    var thing4Input = $("#thing4").val();
    var favoriteThings = [];

    favoriteThings.push(thing1Input, thing2Input, thing3Input, thing4Input);
    var favoriteThings2 = favoriteThings.slice();
    favoriteThings2.shift(favoriteThings2[0]);
    favoriteThings2.unshift(favoriteThings2[1]);
    favoriteThings2.splice(2,1);
    alert(favoriteThings2);
    favoriteThings2.push(favoriteThings[0], favoriteThings[1], favoriteThings[2], favoriteThings[3]);
    alert(favoriteThings2);
  });
});
