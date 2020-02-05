//vowelCount
//silenSubtract
//doubleSubtract

export class Haiku {
  constructor() {
    this.poem = "";
    this.lines = [];
    this.vowelsOne = [];
    this.vowelsTwo = [];
    this.vowelsThree = [];
    this.lineOne = [];
    this.lineTwo = [];
    this.lineThree = [];
    this.syllables = [this.vowelsOne.length, this.vowelsTwo.length, this.vowelsThree.length];
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
    
  }
}