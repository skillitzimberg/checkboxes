function getCheckboxValues(anyVarHere) {
  var checkboxValues = [];
    anyVarHere.each(function() {
      var checkboxValue = $(this).val();
      checkboxValues.push(checkboxValue);
    });
    return checkboxValues;
};

function compareStressToCoping(warnings, symptoms, copings) {
  var advice;
  if (warnings.length + symptoms.length < copings.length) {
    var encouragement = "You're doing a great job of managing your stress. Keep it up!";
    return encouragement;
  } else {
    if (warnings.includes(' Punching walls') && symptoms.includes(' Bad hygene')) {
      advice = "You need to see a doctor!"; /*return advice;*/
    } else if (warnings.includes(' Loss of sleep') && symptoms.includes(' Low energy')) {
      advice = "Take melatonin and eat better";
    }

    var resources = "Ask your doctor about these stress resources: resource1 resource2 resource3";
    return [advice, resources];
  }
};


function displayCheckboxValues(inputArray,destination,unHideDiv) {
  $(destination).text(inputArray);
  $(unHideDiv).show();
  return 0;
};

function displayAdviceAndResources() {
  $(destination).text(inputArray);
  $(unHideDiv).show();
  return 0;
};

$(document).ready(function() {
  $("form#surveyForm").submit(function(event) {
    event.preventDefault();
    var someName = $("input")
    var warnings = getCheckboxValues($("input:checkbox[name=warningSigns]:checked"));
    var symptoms = getCheckboxValues($("input:checkbox[name=healthSymptoms]:checked"));
    var copings = getCheckboxValues($("input:checkbox[name=copingSkills]:checked"));
    $("form#surveyForm").addClass("hide");

    var outputAdvice1 = compareStressToCoping(warnings, symptoms, copings);
    // var outputAdvice2 = youNeedProfessionalHelp(warnings, symptoms);

    console.log(outputAdvice1);
    // console.log(outputAdvice2);

    displayCheckboxValues(warnings,"#results1",".displayResults1");
    displayCheckboxValues(symptoms,"#results2",".displayResults2");
    displayCheckboxValues(copings,"#results3",".displayResults3");

    $("#results4").text(outputAdvice1);

  });
});
