import Entry from './Entry.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { entry } from '../webpack.config.js';

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    const userTitle = $('#user-title').val();
    const userBody = $('#user-body').val();
    const entryOne = new Entry(userTitle, userBody);
    console.log(entryOne);

    const wordCountOutput = entryOne.wordCount(entryOne.body);
    $('#word-count-output').text(wordCountOutput);

    const vowelCountOutput = entryOne.vowelCount(entryOne.body);
    $('#vowel-count-output').text(vowelCountOutput);

    const consonantsCountOutput = entryOne.consonantsCount(entryOne.body);
    $('#consonants-count-output').text(consonantsCountOutput);

    const teaserSentenceOutput = entryOne.getTeaser(entryOne.body);
    $('#teaser-sentence-output').text(teaserSentenceOutput);
  });
});
