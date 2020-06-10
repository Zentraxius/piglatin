# Application Name

Pig Latin Translator

#### Brief description of application, Date of current version

Translates into Pig Latin / 6/10/2020

#### By Cody Fritz, Deryck Jackson

## Description

Application that translates into Pig Latin by following these rules:

1.  For words beginning with a vowel, add "way" to the end.

2.  For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

3.  If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

4.  For words beginning with "y", treat "y" as a consonant.

Application must meet the following specs:

1. Does nothing to non-alphabetical characters, since they do not contain consonants or vowels.

- Example: Input) 3 | Output) 3

2. Adds "way" to single-letter words beginning with a vowel.

- Example: Input) I | Output) Iway

3. Adds "way" to multi-letter words beginning with a vowel.

- Example: Input) apple | Output) appleway

4. Moves first consecutive consonants to the end of word and adds "ay"

- Example: Input) That | Output) atThay

5. When the first consonants includes "qu", move the "u" along with the "q". In the example of words such as squeal, take "s" "q" and "u". Don't forget to add "ay"

- Example: Input) Queen | output eenQuay

6. Adds "way" to all multi-letter words in a sentence beginning with a vowel.

- Example: Input) The Apple Had A Little Yam | Output) The Appleway Had Away Little Yamway

7. Moves first consecutive consonants of each word in a sentence to the end of the word and add "ay"

- Example: Input) This Love Has Taken It's Hold | isThay oveLay asHay akenTay It's oldHay

8. Moves first consonants of "q' and "u" together in a sentence to the end of the word and adds "ay"

- Example: Input) This Queen Squealed | Output isThay eenQuay ealedSquay

9. If "y" is the first letter of a word, move "y" to the end of the word and add "ay"

- Example: Input) You | Output) ouYay

10. When "y" is the first letter of any word in a sentence, move "y" to the end of word and add "ay"

- Example: Input) You can dance on yellow | Output) ouYay ancay anceday noay ellowyay

10b. Ensure all previous steps work in a sentence together

11. Ensure all specs work regardless of capitilization

- Example: Input) enSuRe aLl sPecS woRk | Output) enSuReway aLlway ecSsPay oRkway

12. (Bonus Step) Preserve Punctuation.

## Setup/Installation Requirements

1. From github ( https://github.com/Zentraxius ) navigate to "Repositories"
2. Select project from list
3. Click "Clone or download v" Download Zip
4. Open .zip with program of choice (Winrar/7zip confirmed working)
5. Extract folder to location of choice(such as desktop)
6. Run index.html with browser of choice, confirmed working on Firefox and Chrome.

## Known Bugs

No known bugs!

## Support and contact details

For support please contact clanalia55@gmail.com

## Technologies Used

HTML | CSS | JavaScript
Bootstrap | jQuery

### License

MIT

Copyright (c) 2020 **Cody Fritz, Deryck Jackson**
