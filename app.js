/*
$(document).ready(function(){
/*
function buttonClick() {
    $('button').click(function() {
        getText()
    })
}

function getText() {
    var text = $('#user-text').val();
    var arr = makeWordArr(text);
    return arr;
}

function makeWordArr(text) {
    var words = text.split("/[\s\.,;]+/");
    console.log(words);
    return words;
}

buttonClick()


var calculate = function() {
  var string = document.getElementById('user-text').value;
  var length = string.split(/[^\s]+/).length - 1;
  document.getElementByClass('showc').innerHTML = length;
};

});
*/
/*
function getTotalWordCount(text) {
  var numSen = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
}
*/

$(document).ready(function(){
  watchForm();
  });

function watchForm(){
  $(".js-text-form").submit(function(event){
    event.preventDefault();
    var userText = $(this).find("#user-text").val();
    reportOnText(removeReturns(userText));
  });
}

function removeReturns(text){
  return text.replace(/\r?\n|\r/g, "");
}

function tokenText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function reportOnText(text) {
  var token = tokenText(text);
  var numSpecWords = specWords(token);
  var totalWords = token.length;
  var aveWordSize = getAveWordSize(token);
  var aveWordInSen = getAveWordInSen(text);
  // Visual Mods
  var textReport = $(".js-text-report");
  textReport.find(".js-word-count").text(totalWords);
  textReport.find(".js-unique-word-count").text(numSpecWords);
  textReport.find(".js-average-word-length").text(aveWordSize + " characters");
  textReport.find(".js-average-sentence-length").text(aveWordInSen + " words");
  textReport.removeClass("hidden");
}

function specWords(token) {
  var justWords = new Set(token);
  return justWords.size;
}

function getAveWordSize(token){
  var totalsize = token.join("").length;
  return (totalsize / token.length).toFixed(2);
}

function getAveWordInSen(text) {
   var numSen = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
   var wordCount = tokenText(text).length.toFixed(2);
   return (wordCount / numSen).toFixed(2);
}