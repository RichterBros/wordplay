$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();



    var item1Input = $("input#item1").val();

    var itemCopy = item1Input.split(' ');







    console.log(itemCopy);














  });
  

});