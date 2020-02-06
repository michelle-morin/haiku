# _Haiku Checker_

#### _TDD practice for Epicodus_, _5 Feb. 2020_

#### By _**Michelle Morin, Patrick Kille**_

## Description

_This application checks whether a poem is a haiku._

## Specifications:


| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| Check to see if the poem has three lines | Poem has three lines | True |
| Determines that poem is not haiku if poem does not have exactly 3 lines | poem with 4 lines | "not a haiku" | 
| Break each line of poem into individual words | line of poem | array of individual words as each element |
| Subtract all silent vowels | (word)e, y(ellow) | 1, 2 |
| Replace one vowel with "x" for specific double vowel instances | woord | woxrd |
| Insert one consonant ("x") between certain vowel combinations ("io" and "eo") to consider each vowel as a syllable | ion | ixon |
| Count total vowels in each line | Word array | Vowel Count |
| Use count to determine number of syllables in each line | Vowel Count = 2 | Syllables = 2 |
| Returns whether Poem is a Haiku | 5,7,5 syllables | True |

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

#### Install this application

_Clone this repository via Terminal:_
* _Navigate to the desktop in Terminal by entering "cd desktop"_
* _Enter: "git clone" followed by the url for this repository._
* _Navigate to the project directory by entering "cd" followed by the name of this repository._
* _Confirm that you have navigated to the project directory by entering "pwd" in the Terminal._

_Next, install npm at the project's root directory_
* _Enter the command "npm install"_
* _Enter the command "npm run build"_

_Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal)._

## Known Bugs

_Does not currently account for certain edge cases. One edge case not currently supported is the double vowel "ea", which sometimes forms a single syllable (e.g., treat) and sometimes forms a double syllable (e.g., create). Another word not currently recognized by its correct syllable count is "poem"._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery, npm, webpack, Jest_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin, Patrick Kille_**