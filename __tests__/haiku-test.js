import { Haiku } from './../src/haiku.js';

describe ('Haiku', () => {
  test ('should check to see if poem has three lines', () => {
    var poem = new Haiku();
    poem.lineCount();
    expect(poem.lines.length).toBe(3);
  })
});