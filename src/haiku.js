//OBJ/Class List
//Haiku Class
//this.poem string
//this.lines []
//this.vowels []
//this.syllables = this.vowels.length

//Function List
//addPoem
//lineCount
//wordSplit
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
    this.syllables = this.vowels.length;
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
}