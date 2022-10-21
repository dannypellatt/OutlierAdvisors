
// herobar section
$(document).ready(function() {
  $("input[name$='projects']").click(function() {
      var test = $(this).val();

      $("div.desc").hide();
      $("#Project" + test).show();
      if ("#Project" + test == "#Project1") {
        $("#Project1").parent().parent().css({"background": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(babydashog.jpg)"});
      }
      if ("#Project" + test == "#Project2") {
        $("#Project2").parent().parent().css({"background": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(dogandperson.jpg)"});
      }
      if ("#Project" + test == "#Project3") {
        $("#Project3").parent().parent().css({"background": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(gatsby.jpeg)"});
      }      
  });
});

