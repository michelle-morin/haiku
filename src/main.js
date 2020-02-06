import { Haiku } from './haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function showPoemResult() {
  $("form").hide();
  $(".output").show();
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    showPoemResult();
    let inputPoem = document.getElementById("user-poem").value;
    let userPoem = new Haiku();
    userPoem.addPoem(inputPoem);
    userPoem.poem = userPoem.poem.toLowerCase();
    userPoem.wordReplacer();
    userPoem.doubleVowelRemover();
    let linecount = userPoem.lineCount();
    if (linecount === false) {
      $(".result").html("Haikus have three lines, silly.");
    } else {
      userPoem.wordSplit();
      userPoem.silentVowelRemover();
      userPoem.vowelCount();
      userPoem.checkHaiku();
      if (userPoem.haiku === true) {
        $(".result").html("It's a haiku!");
        $("body").addClass("bonsai");
      } else {
        $(".result").html("Not a haiku!");
      }
    }
  });
});