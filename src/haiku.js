export class Haiku {
  constructor() {
    this.poem = "";
    this.lines = [];
    this.vowels = [];
    this.lineOne = [];
    this.lineTwo = [];
    this.lineThree = [];
    this.syllables = [];
    this.haiku = false;
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
      if (word.charAt(0) === "y") {
        that.lineOne[i] = word.slice(1);
      }
    });
    this.lineTwo.forEach(function(word, i) {
      if (word.charAt(word.length-1) === "e") {
        that.lineTwo[i] = word.slice(0, word.length-1);        
      }
      if (word.charAt(0) === "y") {
        that.lineTwo[i] = word.slice(1);
      }
    });
    this.lineThree.forEach(function(word, i) {
      if (word.charAt(word.length-1) === "e") {
        that.lineThree[i] = word.slice(0, word.length-1);
      }
      if (word.charAt(0) === "y") {
        that.lineThree[i] = word.slice(1);
      }
    });
    this.lines[0] = this.lineOne.join(" ");
    this.lines[1] = this.lineTwo.join(" ");
    this.lines[2] = this.lineThree.join(" ");
   }

   doubleVowelRemover() {
     let regVowels = ["a", "i", "e", "o", "u"];
     let charsInPoem = this.poem.split("");
     for (let i=0; i<charsInPoem.length; i++) {
       if (regVowels.includes(charsInPoem[i]) && regVowels.includes(charsInPoem[i+1])) {
        charsInPoem.splice(i+1, 1, "x");
      }
    }
     this.poem = charsInPoem.join("");
   }

   checkHaiku() {
     
   }
}