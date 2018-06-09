# myCodingBootcampNotes
CBC notes 

### This is my Readme file

# Terminal Commands:

### cd < some directory >
Change Directory. This changes the current working directory. Working directory is the file path you are currently on in your terminal

< some directory > can be any folder on your system. 

if it isn't there, it will give you this error: 

`-bash: cd: Documents: No such file or directory 
`

### ls < some directory >
Lists all the files and directories in the current path or on the path designated

### pwd
Present Working Directory. Shows the current file path from root to current file

### mkdir
Makes a new directory. 

### touch < some file name >
Creates a file with the name of < some file name >

### rm < some file name >
Deletes a file, no take backs. 

### rmdir < directory >
Removes a directory, no take backs.

### cp < file > < location >

this copies file

### mv < file > < location >

moves file

# Git Commands

# git add .
Makes git add all files to its watchlist. Adds current version to inclusion. "." tells it to watch everything, but you can specifiy a file instead "index.html"

# git commit -m "Message"
Adds whatever was worked on to the master branch, and uploads it

## when do you commit?

Commit whenever you get something working, commit then 

# git push
Pushes code to github

# git clone
If the repository starts on Github, it will pull it down onto your local machine. Only will need to clone once

# git pull 
Downloads freshest version of repo

#git status
Diagnostic, Incredibly useful

## Good git rule:
Pull first, then push your changes. 
Pull often!!!

Git Kraken: GUI that shows the difference between versions (you can also do this on GitHub itself)

Gitlab is another Git hub like website, Github and Gitlab are very simialir though you may have private things on gitlab cheaper

# Cool Terminal Shortcuts

## upkey
Goes to the last command

## tab key (while typing a file name)
Autofills if it is unique

## special directories

~/ user directory

../ one directory up aka parent directory

./ current directory 

/ root directory

### HTML 

Section  tag vs Div tag

essentially the same thing accept for accessability 

# General Tips of Class

20 hours a week outside of class

Roughly broken down 8 hours independent study

12 hours on homework

# CSS Notes 5/5/2018

### Class

notated with a "." so it looks like .classItem

Class is a series of elements of which multiple can be on single page

### ID

notated with a "#" so it looks like #IDitem

ID is individual items, one per page

IF element has a ID and a Class, ID > class

# Relative File Paths

connect us with other files in our working directory

Everything, is like, relative, man. So be careful with file paths. 

../../ etc goes up multiple folder levles

# Box Model

Content, padding, border, margin

padding { top, right, bottom, left} Thinkg of it as trouble: Top Right Bottom Left ()

# Floats

default, every HTML elemented displayed in browser is governed by flow (think wrap-text options)

This means html elements FORCE their adjacent elements

block elements vs inline elements

Floats probably need to be cleared, using the "clearfix hack" 

```
.clearfix::after {
    content:"";
    display: block;
    clear: both;
}
```


Layering with Z INdex

Z-Index allows you to laywer elements, 
css:
z-index:2; vs z-index: 1; (the larger the value the closer to YOU (if you think of depth on a browser))


# 5/8/2018 Notes

Homework will be due 5/12/2018
it sounds like I will only be submitting 1 of the 2 projects, so probably the harder of the two and I can stop worrying about the first project

Watch some videos about working with git in a team setting (only have used it for personal use previously, this could be a distraction if the concepts of team git)

## Full Stack

Everything from the front end to the back end 

## CSS Positioning

### Position: fixed 
Not going to move (could use this on the HW footer)
### Position: relative
It is based on the closest parent element that specifies a position (whatever container)
### position: absolute 
A bit unclear concerning how this is different from fixed
### position: static
Falls wherever it falls on the page

Check out Smashing  Magazine News Letter

Remember that last stylesheet is the most impactful (kinda?)

## Some Other Stuff

Section vs Div
Section and article express more intent (they are semantic) but they are also containers just like div

### HTML 5 Semantic elements

...they are pretty much divs with better intent expressed through their usage EG, Header, Footer, Article, Aside, Details, Summary, etc

But a lot of places still use div instead of these semantics tags

### Chrome Dev Tools
It rocks. It is super useful. Use it all the time. You can step through javascript, you can see what file and line is causing issues. You can edit CSS in the browser.

CTRL + SHIFT + I is the short cut


## ajax

Asychonrous javascript in XML
Requests to a server to get data back
In the network tab

## Battle of the browsers

Webpages can render differently browser to browser

CSS reset (https://meyerweb.com/eric/tools/css/reset/) this makes a "standard" of sorts to do things across the browsers, wipes out all the stupid inherent special styling within each browser

Apply the Reset.css first and then apply your css. Most frameworks have something like this built in.

CSS reset is important for creating browser-compatible websites, levels the playing field. THIS IS A COMMON FRONT END INTERVIEW QUESTION

# Deploying code to Github

Github provides hosting for static websites

https://epicureanheron.github.io/

Apparenlty I can hose a project using the github.io page I have. I am a big vague on details, but I am tired.

https://help.github.com/articles/user-organization-and-project-pages/


# 5/10/2018 Notes

Overview: CSS Typography and Google Fonts, Pseudo-Classes, Twitter Bootstrap

## CSS Typography

line height should be 1.5 x the font

font size-actually size. 16px is the min

Line length, not a css property, 50-75 charagers per line on a desktop

Letter spacing

sans-serif vs serif, sans-serif doesn't have the serifs (tails and crap)

## Google Fonts

Really awesome, open source fonts https://fonts.google.com/

also check out https://fontawesome.com/get-started for open source image thingies

## Psuedo Classes

Css has keywords that can be added to selectors. These highlight the special states of the selected elements

```
a:active { 
    background-color: black
}
```

I could add this to the homework

: for psuedo class
:: for psuedo element

## Bootstrap

It is super nice. Can just link to the bootstrap stuff out there. 

Bootstrap apparenlty built by Twitter. That's cool.

getbootstrap.com

### Key boootstrap features

Glyphicons 

Navbars


### 5/12/2018

Agenda: Bootstrap CSS, media queries, and meta tag for viewports

## Bootstrap high level recap:

CDN library https://en.wikipedia.org/wiki/BootstrapCDN  ( content delivery network)

CSS in the header

bootstrap.js at the bottom of the page to make the components work (like drop down menus, etc)

Going to focus on layout today

span tag: used when glyyphicon but is more or less outdated

## Very important stuff incoming

Webpages are GRIDS focused around columns.

for junior front end developers a graphic designer usually gives you a sketch and you turn into a webpage, a lot of times just focused on the PC vwersion of website, then you may be resonspible for the tablet and mobile designs. 

Everything should be "gridable"

Magic number for grids: 12 


col-md-* is the column bread and butter for bootstrap

sub columns and sub rows to break things down further

<div class="container"> is the first part of the grid 
<div class="row"> is next
<div class="col-**-*"> is after

You can do sub rows by putting another row inside of a and this new row has 12 divisions in it!!! <div class="col-**-*">
<div class="row">
    <div class="col-**-*"></div>
</div>

 </div>


md and sm col does someting with the breakpoints (i think)

We have class on 5/26/2018

FERPA (Like hippa): How to get help:

Live Chat on BCS

Or BCS Live Ticket

NOTE: First PROJECT: Use materializer


## Media Queries

Max of 5 breaktop: Desktop, Tablet Landscapt, Tablet Portrait, Mobile Land, Mobile Portrait

Declare media queries LAST on your CSS

Max vs min

Max is probably the best, but be consistent with internal logic (don't flip flop between max and min)


## viewport

on this type of device I am going to see this device in this way

Some high pixel density devices may display as a desktop version rather than a mobile version, so you can control it with viewport. Something with the meta tag it would allow it to scale up . Use this in conjucntion with media-queries

# 5/15/2018 Joys of Javascript

New teacher works at Target in the back end

Nabeel

## Javascript

Rather than "stepping" through the code, we will be using logging

## Variables

```
var name = "Snow white";
var dwarfcount = 7;

```
lower case "true" and lowercase "false" are key word booleans in JS

put javascript in the body

```

alert("HEY LISTEN");


```

is very aggresive , using 

```

log("Hey listen);

```

is better

## Document Write

``` 
document.write("Whatever we want");

```

Just sort of writes straight to the page

## If/Else Statements (conditional or control flows)

```
if( ldjfjdjkl ) {
    alert("do it");
}

else if (somethingelse) {
    alert("trying again");
}

else {
    document.write("you don't party);
}

```

You HAVE to have a an else with an if.

## Types

```
"4" === 4

```
This is false, the triple = means it is comparing type (string, interger, etc)

```
"4" == 4

```

This ignores type, so it would be true. 


Concatenation vs mathmetical addition

You can add strings together ("5" + "5") = "55"

and you can add numbers 5+5 = 10

If you add types together such as "5" + 6 it will be default concatenate the differt types

## Array

BEGINS WITH 0

```
var zooAnimals = ["zebra", "rhino", "Giraffe", "owl"];
```

zooAnimals[2] = Giraffe

HOwever, running "length" on javaSscript, it will tell you how many items are available

Searching an array can be VERY SLow

COMMENT OUT CODE WITH A SHORT CUT

CTRL + / After highlight lines

# 5/17/2018 Jumping into Javascript

Arrays, For Loops, rock paper scissors

!== is checking value and type

!= is checking just the value (ignores string vs interger etc)

```
var vegetables = [1,2,3,4]

for (var i = 0; i < vegetables.length; i++) {
    console.loge("i Love " +vegetables[i])
}

```

for (interative variable, break loop, interations)

iterator, condition, increment

## Functions

```
fuction logArray(list) {
    for (var j = 0; j < list.length; j++>) {
        console.log(list[j]);
    }
}
```

Then you can call logArray(vegetables)

Global vs local scope

Variables established in a function are not available globally


"signature" is the inputs for a function

So function(word, thing, noun, expact)

https://docs.microsoft.com/en-us/scripting/javascript/advanced/variable-scope-javascript

or = || 

Look at the portfolio for media query assignment...because my code is being a butt to adopt.

Events are things! 


Rock, Paper, Scissors

Listen for key press R P or S

Then computer choses a random number between 0-2 which will be referred to in an array which held r p s

compare random computer choice vs pressed key based on logic:

rock beats S

S beats P

P beats R

if PC choice === Human choice, tie (end of if statement "Else" )

Determine if PC or Human won

Add to to the displayed wins, losses, and ties

# 5/19/2018 Notes 

Expect a 1 : 1 soon with Andrea (within 2 weeks)

Agenda: JavaScript Functions, JavaScript Objects, Building Simple Javascript Applications

Adding to an array

```
someArray.push(var)

```

BE verbose when logging 

DRY = Don't repeat yourself

PRobably best to have things defined before you use it...but javascript is weird and will probably let you do this

SHould updated z_umn_link data git to be a function to save myself some headaches

Functions are very useful for testing (speicfically unit testing)


Checks if x is in an array (the includes function is better than a for loop I think)

```

arr.includes(x) 

```

## Objects

OBjects can be much more effecient than arrays, keys are unique and you can call them directly rather than searching through the array. OBjects have Properties and Values.

 ### Last element in an object DOES NOT HAVE A comma at the end

can be done by object["key"] or object.key. The key is "Big Key" with a space in it, you cannot do dot notation

"method" is a function within an object

 prints outs the whole function to console (note that there is not a terminal ())

 ```
 console.log(object.method)

 ```

 within a function, once a "return" is hit, the function ends

 good debugging: set a variable to the function with some argument (as needed) and then cosnole log that variable. This is probably better than just having console logs in functions randomly

 ### ForEach()

Function for arrays 

## LOOK UP CALL BACKS 

https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

TNG hangman

2 things with deailing with front end
Information archetitecture Think layers

Data modelling: what does the data look like and how do we organize it effeciently in the code? 

# 5/22/2018 notes
 
Soon class will mostly be coding, less powerpoint (almost none)

## Agenda for tonight: DOM Manipulation using plain javascript, DOM maniuplation using jQuery, Respoding to click events

### What is the DOM
https://css-tricks.com/dom/

DOM is an object and you can manipulate it (Document Object Model)\

UUID Universally unique identifier 


This adds a div within a div (that is what append does, takes whatever the variable is and places it within the html tags we are targetting)
```
targetDiv.appendChild(newDiv)

```

Creates 

```
<div id="targetDiv">
    <div id="newDiv"></div>
</div>
```

Everything going on with the DOM: https://www.w3schools.com/jsref/dom_obj_document.asp

Basically all the DOM elements are HTML tags 

open up javascript console and type in window. It shows a bunch of stuff...including cookies! This is separate from the DOM

The below literally creates <someHtmlTag></someHtmlTag>

```
document.createElement("someHtmlTag")
```

Stay with known HTML objects for functionality 


DOM starts out common denominator, gets more specific as the you add more items 

### Career: REACT IS WHERE JOBS ARE RIGHT NOW, ANGULAR IS OLD, VUE MIGHT BE UPCOMING

### Career: Employer's like it when you submit a bug or issues on github

## jQuery

Pretty much the gold standard for DOM manipulation. It does everything pretty well and and it has been around for 10 years

jQuery magic = $ 

They changed the jQuery argument to be just $

## For Each

for each is saying "for each element do x

The function in the below does not need to be defined, just need a parameter passed and then you can do something with that paratemer for every item in that array. 

Note the last line that is }) because you need to clost the forEach 

```
array.forEach(function(parameter) {
    console.log(parameter)
});
```
example from inclass jquery assignment jquery-drinklist-unsolved.html
```
drinkList.forEach(function(drink) {
    $("#drink-options").append("<div>" + drink + "</div>")
});
```
### responding to click events

# 5/24/2018 Notes
 
 JS and jQuery Jubilee 

 Objectives:
 1. Play captian planent: the Game
 2. Practice j query on Fridge
 3. Pretend to learn scoping
 4. Understanding clicking events 

Career stuff: Check out the Career Connections in the newsletter. Go to these. 

## Captain Planet the Game

I struggled with getting the image to flip in this game. I should have started with looking at https://api.jquery.com/

GOOD LIBRARIES TIER THEIR INFO (scale up as needed  )


jQuery on click event

```
$(this).attr("data-index")

```

the $(this) is a Jquery object which allows you to reference back (provided it is on some event, clicking or scroll over) and refer back to other properties of that jQuery object

LOOK AT THE FRIDGE CLASS ASSIGNMENT FROM TODAY FOR A GOOD REFERENCE THAT USES data-letter and  .text($(this).attr("data-letter"))

if you do something like the following

```
$("<div>").attr("class", "red")
$("<div>").attr("class", "blue")
```

The div will look 
```
<div class="blue"></div>
````

The last attr COMPLETELY Overwrites

## Scope
Heavy on theory

scope = boxes in boxes 



# 5/26/2018 Class

## agenda

1. Poll/JS Exercises

2. To build a semi-complex jQuery calculator application in teams

3. 1 on 1 options!

4. complete the javascript checkpoint

## Scope and shadowing

If you create a local varialbe in a function that is established as a global variable, that is called "shadowing" 

## this

$(this) is a super useful short hand. based on something the user touches/presses .click or .on you can then use something like 

```
alert($(this).html());

```

the above code will grab whatever is pressed and the html associated with it


Window is referring to the DOM when you call 

```
console.log(this)

```

## coding a jQuery calculator

# 5/31/2018 Class

## Java script catch up

Classes are reusable objects in javascript 

like functions 

## css

Webkit and Mozilla are tools but a lot of browsers just work now


## git
Git can be the center of everything

Branching is key, and a branch with a tag of "PROD" can be pushed to the production server. HOLY CRAP. This would be great for the Drupal project

Create a branch, then ALWAYS pull from master when working a branch, then pull request (which I guess is a merge??)

## Javascript

there are special rules for the variable THIS




# 6/2/2018 Class Notes more javascript notes

code below uses the 1000 is millisecond and the setTimeout function 

clearTimeout stops/clears a timeout

below is an example of "inline lambda function" EG creating a function to do this.



```
var someTimeOut = setTimeout(function(){
    alert("Alert #1")


}, 1000);


clearTimeout(someTimeout)
```
Did coin flip game

Did simpleTimer

the example above shows how you can "inline" a function, below is basically how  you can use setTimeout and just pass it the function name without the () at the end
```
setTimeout(FUNCTION,MILLISECONDS)

setTimeout(functionName, 5000)
```

## Example lambda can be used to pass a function called within the inline a variable IE

```
var someTimeOut = setTimeout(function(){
    someFunction(parameter)


}, 1000);


somefunction(parameter) {
    parameter + 1
}

```

The above works when the function you are configuring to trigger after 1 second needs to have a parameter passed, 

## you cannot do the below!!!

```
var someTimeOut = setTimeout(someFunction(parameter), 1000);

somefunction(parameter) {
    parameter + 1
}


```

## Stop watch

### This notes
using function setInterval(), setTimeout, alert() all are attached to the window, SO if acting on variable which is defined in part by these sort of methods/functions then ... this refers to the WINDOW rather than an object.

# career question, think about what does the " 30-60-90" look like...probably need to google this term
# Geek for Geeks (website with potentially a lot of techinciai questions), binary tree

# API, AJAX, JSON 6/5/2018

For an array of objects, it is assumed they are all the same. Note that for the initative tracker...Probaly should have a basic OBJECT where everything is defined. 


## JSON (Javascript Object Notation)
https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related?hl=en
Above is a chrome plugin
Nabil uses JSON Lint 

API

You don't get to chose how the functions or formatting are for anything you are doing that is held within the API

Give some information back, probably in JSON format 

.trim() gets rid of the stupid space after an entry such as "search term "

API research questions:

What is an API?
an application programming interface (API) is a set of subroutine definitions, protocols, and tools for building application software. In general terms, it is a set of clearly defined methods of communication between various software components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer. 

## What does API stand for?
Application programming interface

## What are some examples of APIs? (Find links to specific APIs)
https://dev.npr.org/
https://developer.target.com/
https://developer.amazon.com/developer-publishing

## What do these specific APIs allow you as a developer to do?

https://developer.amazon.com/developer-publishing

The Developer Publishing API is a RESTful API that helps you manage your Android app catalog by programmatically creating and updating apps on the Amazon Appstore. You can use the Developer Publishing API to integrate your app publishing processes with the Amazon Appstore on a whole new level.

If you have a large Android app catalog, instead of publishing your apps one at a time using our developer console, you can programmatically upload thousands of apps, quickly and safely. The Developer Publishing API also enables you to more easily manage your catalog by submitting and updating your Android apps directly from your build systems without additional manual intervention.



## API 

If you want to build something that uses data, see if there is an API First

If there is not, you have to do webscrapping (unstrusctured data). APIs are structured
 
API RESTful (resource state transfer)

REST is the key here: https://en.wikipedia.org/wiki/Representational_state_transfer

Google Calendar API
https://developers.google.com/calendar/overview 

Metro Transit http://svc.metrotransit.org/ 

HTTP Methods https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

Right now we are dealing with Gets and Post

## ajax

Synchronous vs Asynchoronous 

Synchronous is akin to blocking, there is NOTHING else the system can be doing while that requeset is done 
 
Asynchronous does not wait, other things can be done (starbucks where everyone orders and they get respones out of order)


```

$.ajax({
    url: someUrl with API key,
    method: "GET"

}).then(function(respone){


})

```
If a method is not defined, use GET

AJAX just starts...then does it when it can, but other options can be done while it is going on

Ajax can make multiple calls but it is bound by the slowest


So there is a "promise" (Nabil's term) which it returns SOMETHING then .then happens


http://omdbapi.com/?t=Forrest+Gump&y=&plot=short&apikey=trilogy
? begins the query

t is the first criteria

use + signs instead of spaces 

& denotes another criteria 

class examples
```
function(obj){
    console.log(obj.Runtime)
    console.log(obj.Ratings[0].Source)
    console.log(obj.Website)
}
```

# 6/7/2018 Notes More Ajax and API

API: set of predefined routines, code snippets, and tools for building software applications

APIs often bridge between different components

Full stack discussion
    Seems like between the back end and the frontend, you could think of their relationship as communicating as an API 

book rec: cool artists steal

useful way to convert JSON  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

```
JSON.stringify(JSONthing)
```
Prevents form from trying to submit! 
```
event.preventDefault();
```

uses of attr

The below assigns the data-value = "MonsterMash"
```
$("<button>").attr("data-value", "MonsterMash")

```
The below calls the attr to return the value of whatever is assigned
```
$("<button>")attr("data-value")
```
Pulls a the attribute value from whatever (probably an html/jquery object)

the below val call should give 1000
```
<div id="mainDiv" value="1000" > </div>

$("#mainDiv").val()
```

You can use a "trash variable" as in you just set up something like

```
pOne = $(<p>).html("text!")

$("#someID").append(pOne)

pOne = $("<p>").html("Someother text!")

$("#someID").append(pOne)

```


# 6/9/2018 Class Notes

BUILDING A NEW YORK TIMES SEARCH APPLICATION TODAY

Book List...

Javascript and jQury by Jon Duckett

Javascript Bible by Danny Goodman

You Don't Know JS series by Kyle Simpson

Composing Software by Eric Elliott

The Clean Coder by Robert Martin

Imposter syndrom is a REAL THING

Nabil recommend 10 hour a month of learning outside of work will keep you "very sharp", that is 2.5 hours a month. These can be Medium articles

## API

A server may serve up parts of the API, but the API does not really live anywhere. IT is a fairly abstract concept but it is a framework

Going 