function getCheckboxValues() {
  var checkboxValues = [];

   $("input:checkbox[name=transportationModes]:checked").each(function() {
     var checkboxValue = $(this).val();
     console.log(checkboxValue);
     checkBoxValues.push(checkboxValue);
   });
   // console.log(checkboxValues);
   return checkboxValues
};

function displayCheckboxValues() {
  $("#result").text(checkboxValues)
};

$(document).ready(function() {
  $("form#surveyForm").submit(function(event) {
    event.preventDefault();

    var surveyValues = getCheckboxValues();
    console.log(surveyValues);
  });
});
