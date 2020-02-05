import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {
  var poem;
  beforeEach(() => {
    poem = new Haiku();
    poem.addPoem(`this doesn't
    have enough
    syllables`);
  });

  test('should check to see if poem has three lines', () => {
    poem.lineCount();
    expect(poem.lines.length).toBe(3);
  });
});