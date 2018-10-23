function getCheckboxValues() {

  var checkboxValues = [];

    $("input:checkbox[name=transportationModes]:checked").each(function() {
      var checkboxValue = $(this).val();

      // console.log(checkboxValue);
      // debugger;
      checkboxValues.push(checkboxValue);
    });
    // console.log(checkboxValues);
    // console.log('got here yeah');
    return checkboxValues;
};

function displayCheckboxValues(checkedBoxesArray) {
  $("#results").text(checkedBoxesArray);
    console.log('got here');
    console.log('checkedBoxesArray');
    debugger;
  $(".displayResults").toggle();
};

$(document).ready(function() {
  $("form#surveyForm").submit(function(event) {
    event.preventDefault();

    var surveyValues = getCheckboxValues();
    // console.log(surveyValues);
    displayCheckboxValues(surveyValues);


  });
});
