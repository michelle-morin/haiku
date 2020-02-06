import { Haiku } from './haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let inputPoem = document.getElementById("user-poem").value;
    let userPoem = new Haiku();
    userPoem.addPoem(inputPoem);
    userPoem.poem = userPoem.poem.toLowerCase();
    userPoem.wordReplacer();
    userPoem.doubleVowelRemover();
    let linecount = userPoem.lineCount();
    if (linecount === false) {
      $(".output").html("Not a haiku");
    } else {
      userPoem.wordSplit();
      userPoem.silentVowelRemover();
      userPoem.vowelCount();
      userPoem.checkHaiku();
      if (userPoem.haiku === true) {
        $(".output").html("Haiku!");
      } else {
        $(".output").html("Not a haiku!");
      }
    }
  });
});