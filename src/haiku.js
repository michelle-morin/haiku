//vowelCount
//silenSubtract
//doubleSubtract

export class Haiku {
  constructor() {
    this.poem = "";
    this.lines = [];
    this.vowels = [];
    this.lineOne = [];
    this.lineTwo = [];
    this.lineThree = [];
    this.syllables = [];
  }

  addPoem(poem) {
    this.poem = poem;
  }

  lineCount() {
    this.lines = this.poem.split("\n");
    if (this.lines.length != 3) {
      return false;
    }
  }

  wordSplit() {
    const [firstLine, secondLine, thirdLine] = this.lines;
    this.lineOne = firstLine.split(" ");
    this.lineTwo = secondLine.split(" ");
    this.lineThree = thirdLine.split(" ");
  }

  vowelCount() {
    for (let i=0; i < 3; i++) {
      let charsInLine = this.lines[i].split("");
      let alphVowels = ["a", "i", "e", "o", "u", "y"];
      let that = this;
      charsInLine.forEach(function(char) {
        if (alphVowels.includes(char)) {
          that.vowels.push(char);
        }
      });
      this.syllables.push(this.vowels.length);
      this.vowels.splice(0);
    }
  }


  silentVowelRemover() {
    let that = this;
    this.lineOne.forEach(function(word, i) {
      if (word.charAt(word.length-1) === "e") {
        that.lineOne[i] = word.slice(0, word.length-1);
      }
      // if (word.charAt(0) === "y") {
      //   word.split("").shift().join("");
      // }
    });
    this.lineTwo.forEach(function(word, i) {
      if (word.charAt(word.length-1) === "e") {
        
        console.log(that.lineTwo[i]);
        that.lineTwo[i] = word.slice(0, word.length-1);
        console.log(that.lineTwo[i]);
        
      }
    //   // if (word.charAt(0) === "y") {
    //   //   word.split("").shift().join("");
    //   // }
    });
    this.lineThree.forEach(function(word, i) {
      if (word.charAt(word.length-1) === "e") {
        that.lineThree[i] = word.slice(0, word.length-1);
      }
    //   // if (word.charAt(0) === "y") {
    //   //   word.split("").shift().join("");
    //   // }
    });
    this.lines[0] = this.lineOne.join(" ");
    this.lines[1] = this.lineTwo.join(" ");
    this.lines[2] = this.lineThree.join(" ");
   }


}