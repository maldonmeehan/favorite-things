$(function(){
  $(".blanks form").submit(function(event){
    event.preventDefault();

    var thing1Input = $("#thing1").val();
    var thing2Input = $("#thing2").val();
    var thing3Input = $("#thing3").val();
    var thing4Input = $("#thing4").val();
    var favoriteThings = [];

    favoriteThings.push(thing1Input, thing2Input, thing3Input, thing4Input);
    favoriteThings.shift(favoriteThings[0]);
    favoriteThings.unshift(favoriteThings[1]);
    favoriteThings.splice(2,1);
    alert(favoriteThings);
  });
});
