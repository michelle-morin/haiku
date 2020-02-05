//OBJ/Class List
//Haiku Class
//this.poem string
//this.lines []
//this.vowels []
//this.syllables = this.vowels.length

//Function List
//addPoem
//lineCount
//lineSplit
//wordSplit
//vowelCount
//silenSubtract
//doubleSubtract

export class Haiku {
  constructor() {
    this.poem = "";
    this.lines = [];
    this.vowels = [];
    this.syllables = this.vowels.length;
  }

  addPoem(poem) {
    this.poem = poem;
  }

  lineCount() {
    
  }
}