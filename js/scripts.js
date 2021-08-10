$(document).ready(function() {
  $(".java2").click(function() {
    $("#card2").removeClass();
    $(".java").show();
    $(".operator").hide();
    $(".variable").hide();
  });
  $(".operator2").click(function() {
    $("#card2").removeClass();
    $(".operator").show();
    $(".java").hide();
    $(".variable").hide();
  });
  $(".variable2").click(function() {
    $("#card2").removeClass();
    $(".operator").hide();
    $(".java").hide();
    $(".variable").show();
  });
});
