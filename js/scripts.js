function getCheckboxValues(anyVarHere) {
  var checkboxValues = [];
    anyVarHere.each(function() {
      var checkboxValue = $(this).val();
      checkboxValues.push(checkboxValue);
    });
    return checkboxValues;
};

function displayCheckboxValues(inputArray,destination,unHideDiv) {
  $(destination).text(inputArray);
  $(unHideDiv).show();
  return 0;
};

$(document).ready(function() {
  $("form#surveyForm").submit(function(event) {
    event.preventDefault();
    var someName = $("input")
    var surveyValues = getCheckboxValues($("input:checkbox[name=transportationModes]:checked"));
    var funValues = getCheckboxValues($("input:checkbox[name=transportationFun]:checked"));
    $("form#surveyForm").addClass("hide");
    
    displayCheckboxValues(surveyValues,"#results",".displayResults1");
    displayCheckboxValues(funValues,"#funResults",".displayResults2");
  });
});
