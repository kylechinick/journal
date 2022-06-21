export default function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.journalId = 0;
  // this.wordCountTotal = 0;
  // this.vowelsTotal = 0;
  // this.consonantsTotal = 0;
  this.userSentence = '';
}

Entry.prototype.wordCount = function (userString) {
  const stringArray = userString.split(' ');
  return stringArray.filter(word => word !== '').length;
};

Entry.prototype.vowelCount = function (userString) {
  const vowelArray = userString.split('');
  let vowelCounter = 0;
  vowelArray.forEach(letter => {
    if (
      letter == 'a' ||
      letter == 'e' ||
      letter == 'i' ||
      letter == 'o' ||
      letter == 'u'
    ) {
      vowelCounter++;
    }
  });
  return vowelCounter;
};

Entry.prototype.consonantsCount = function (userString) {
  const consonantsArray = userString.split('');
  let consonantsCounter = 0;
  consonantsArray.forEach(letter => {
    if (
      letter == 'b' ||
      letter == 'c' ||
      letter == 'd' ||
      letter == 'f' ||
      letter == 'g' ||
      letter == 'h' ||
      letter == 'j' ||
      letter == 'k' ||
      letter == 'l' ||
      letter == 'm' ||
      letter == 'n' ||
      letter == 'n' ||
      letter == 'p' ||
      letter == 'q' ||
      letter == 'r' ||
      letter == 's' ||
      letter == 't' ||
      letter == 'v' ||
      letter == 'w' ||
      letter == 'x' ||
      letter == 'y' ||
      letter == 'z'
    ) {
      consonantsCounter++;
    }
  });
  return consonantsCounter;
};

Entry.prototype.getTeaser = function (userString) {
  const stringArray = userString.split(' ');
  let teaserArray = stringArray.slice(0, 8);
  console.log(teaserArray);
  // console.log(stringArray.slice(0, 8));
  // return stringArray.slice(0, 8);
  return teaserArray;
  // return stringArray.filter(word => word !== '').length;
};

// Create a journaling website where a user can write entries including at least a title and body.

// Create Entry objects that include a method to return the number of words in the entry.

// Then, add a separate method (or methods) to return the number of vowels and consonants in each entry.

// Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.
