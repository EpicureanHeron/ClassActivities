c# myCodingBootcampNotes
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

CRUD: + Create, Read, Update, and Delete
    Basic IDEA behind APIs

# 6/12/2018 

## 7.1 - Introduction to Client-Side Storage

To Do List activity 

State and GOogle Doc example

Stuff to keep at a local level: saving passwords and profile stuff potentially

Client vs Server

Client

- Offline access 
 - Progress Web App (PWA), downloadable websites, lightweight, can be used offline and do push notifications. Only like 35 lines of flipping code
  - https://en.wikipedia.org/wiki/Progressive_Web_Apps
- Decentralized
- caching (in PWAs you can define what it needs to render, (css,html, etc) this then is able to work)

Server
- Centralized
- Collobration  
- Analytics

https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

## Local Storage
local storage is a thing!!!

Like a browser API.

You can only see it the web developer kit, under application, local storage

it acts like an object
```
localStorage.setItem("Stuff", someVar);
localStorage.getItem("Stuff"); // this would acees the someVar (key and item)
localStorage.clear();

```

## Session Storage

Session is more restrictive and time limited. Local Storage is longer and persistence https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage 

Putting in credit card info while the tab is open, but gets rid of it when the window is closed. Passwords.

When to use Session vs Local: Use case dictates what to use

Think of session vs local in terms of phone

Pretty much the same as localStorage however when it comes to interacting with the information and setting it.

```
sessionStorage.setItem("name", name)
sessionStorage.getItem("name")
sessionStorage.clear()

```

## cookies

OG way of doing client side, can be given by server 

it was an attempt to verify clients by server 

cookies are just strings, very flexible and can be a pain in the butt to work with

You have to parse them yourself because it is just a string and whatever schema you want to use

You can't just clear cookies through javascript, you have to expire the page by setting it to a date in the 1970s ... because...yeah. They persist a lot, soooo bad actors love them.

## To Do List 

Best practice is always to pull in an external list (if in local storage )

# 6/14/2018 Firebase

User Story: who (demographically) will be using your application

Translating the user story into an app is what developers do 

Rock paper scissors: probably dictated by two different databases. First person logs in and it associated with database1 (DB1), second person who jumps on is associated with DB2. THEN person 1 needs to update their DB1 BEFORE DB2 can be udpated (or the options to display that info is offered up )

Stores data to the databse. You define the database as something something firebase
```
database.ref().set({
    clickCount: clickCounter
})

```
## Databases

SQL
- Oracle
- Microsoft Oracle
- MySQL

no SQL
- MongoDB
- REDIS
- firebase is probably key value store


https://firebase.google.com/docs/reference/js/

# 6/16/2018 Firebase Application Building

## Firebase Review

```
// creates an instance of a firebase database
database = firebase.database()
//assigns values to the databse
.set({})
//grabs the data from a folder (?). Specifies folders
.ref()
//real time listener, when the data changes, (probably via set or w/e), changes things Locally! 
.on("value", function () {})
```


Fields: Employee Name, Role, Start Date, Months Work (some integer), Monthly Rate (some interger), Total Billed (months workd * monthly Rate)

FORM fields: Employee Name, Role, Start Date, MOnthly Rate + SUBMIT button 

Alerts when enter is hit 


```
database.ref().push({

    
})

```

```
//sets the time of the data inputed

dataAdded: firebase.database.ServerValue.TIMESTAMP


```
orderByChild by the field dataAdded 
```
dataRef.ref().orderBychild("dataAdded").limitToLast(1).("child_added", function(snapshot){

    $("#namedisplay").html(snapshot.val().name)); 

})
```
```

dataRef.ref().on("child_added",function(childSnapshot) {

})

```

## Moments.js

```<script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>```

https://momentjs.com/

# 6/19/2018 

Group Project Week, GitHub Collabs , Brainstorming 

## Project
5 in class work days

6th day we present
## Requirements
- 2 APIs
- AJAX to pull down data
- new library or tech 
- Polished frontend UI
- Good quality coding standards
- do not use alerts/confirms/prompts (PROBABLY MODALS)

- Repeating element (table/columns)
-Bootstrap/Alt css Framework
Deployed gitHub 
USER Input Validation (if requires number, it checks to make sure it is a number) 

NICE TO HAVE

- Firebase Presistent Data Storage
- Mobile Responsive
- Use an alt CSS framework like Materalize

Presentation to have
- ten minutes
- motivation, design process, technologies you used
- demo of functionality
- direction for upgrade

Metrics (concept, design, functionality, collaboration, presentation)

API suggestions
- simple/no auth
- JSON response
- GOOD documentation 

Good tools for remot developers:
Trello - Project Management tool
Github issues - Sorta like Trello 

https://www.programmableweb.com/api/brewery-db
```
git checkout -b BRANCHNAME

```

creates a new branch    dd

then

```

git push origin AddingFiles


```

This sends it to a PULL REQUEST 

This must be commented on by  whoever is committing 

*my recommended git workflow:*
1. pull down latest master branch:
`git pull origin master`
2. check out your own working branch:
`git checkout -b my-new-branch`
3. when you’re done working, pull down latest version of master
(others may have made changes while you were working)
`git pull origin master`
4. merge the newly updated local version of master into your working branch:
(while your current branch is `my-new-branch`!)
`git merge master`
5. resolve merge conflicts if necessary
6. push your working branch to github
`git push origin my-new-branch`
7. and finally create a pull request on github to merge `my-new-branch` into master


# 6/21/2018

Branching

You can branch a branch, etc

branches on github that aren't on local machine, do 
```
git fetch
```

```
git checkout SOMEBRANCHNAME
```

cheks out and sets the branch to 

SUPER USEFUL: https://github.com/joshnh/Git-Commands

## Project Management 

- SCRUM 
- Agile
https://www.cprime.com/resources/what-is-agile-what-is-scrum/
- waterfall has gone to the wayside

MVP = mininum viable product, first working product that manages to hit the recommendation

IDentify and prioritize essentail user stories 

"as a _______ I want to be able to _____" 

KANBAN is effecitvely a trello thing

Stand ups:

"What i'm working on, What I'm hoping to get done today, and blockers"


```

## Students Do: First Stand-up

* In this activity you will take part in your first stand-up with your group mates. This will make sure everyone is on the same page with what they are working on and everyone gets help they might need.

## Instructions

* Before your first stand-up, each member of the team should go through the To Do column of the Project Board and self-assign at least one issue.

 * To do this, click on the issue and on the right choose “self-assign”.

* Everyone should have a clear idea of what they intend to accomplish today. Now it’s time for your first stand-up!

* Stand if you are able - yep, stand-ups take place standing; this helps to ensure that the meetings are short and to the point.

* Each member of the team should say what they did yesterday, what they plan to do today, and what, if anything, is blocking their progress.

* Stand-ups should be held **daily** from this point forward - yes even days that you don’t have class (use Slack).

```


# 6/23/2018

CICD: https://en.wikipedia.org/wiki/CI/CD

Get MVP, then select feature to add, test it , boom go to prod

## Deployment
Master Branch of Group Project will be deployed...not sure WHERE yet, github 

# 07/03/2018 

## Server Side stuff

key concept: modularization 

Transfer protocols (http/https) ubiquitious and easy to use

a server is not necessarily a web server

Web client = browser 

REST vs SOAP 

Downsides of server
-latency
-security
-packet last

internet is based on "best effort"

## node.js

open source , cross-platform

one underlies 

Why node.js
1. re-uses javascript
2. it's easily extendable (npm) NODE PACKAGE MANAGER
3. fast implementation
4. single threaded async model (meaning it can handle multiple request at the same type) THREADED based on CPUs
    -so if you have 4 threaded CPU, it can only handle 1 request at a time
    -KUBERNETES allows for horizontal expansion and utilization of other threads (all 4)
    -back to point 4, you may have to WAIT if there is a queue basically




for console.log(process.argv) it is "progressive" I think, so the values that proceed the command like

```
node some.js 45 88
```

if that some.js has a process.argv in it, the 45 and 88 would be process.argv[2] and process.argv[3] respectively 

## Modules and Modular Design

Design concept: Seperations of concerns
-does this THING make since in this MODULE? 
```
module.exports = {
    key: value,
    key: value
}

```

Telling the file which files to import


```
require("some/file/path")
```

## Louis shows how to iterate over an object by its keys
```
var myObj = {
 a: 1,
 b: 2,
 c: 3
}
var keys = Object.keys(myObj)
// ['a', 'b', 'c']

for (var i = 0; i < keys.length; i++) {
 console.log('key is: ' + keys[i] + ' value is: ', myObj[keys[i]])
}

// what will be printed here?

// key is: a value is:  1
// key is: b value is:  2
// key is: c value is:  3
```

# 7/7/2018 Class

## More Node Stuff

node.js is the "javascript engine" in Google Chrome and wrapping it slightly differently. This is running a viritual machine called V8. Viritual machines running the code is super powerful, it doesn't care WHAT CPU or archetecture that the machine is running. 

Going to cover more NODE stuff in regards to working with files, also requests

You can name your imports WHATEVER you want, but you have to import them the way the import has 


## Writing a file 
```
var fs = require("fs")

fs.writeFile("movies.txt", "inception, die hard, fucnition(err){
    if (err) {
        return console.log(err)
    }
    console.log("movies.txt was updated!")
})

```
## Reading a file
usually takes a "utf8" as a second argument 

reading a file is an ASYNC function, so it MIGHT not run in the order you anticipate (there is a syncread out there)
```
var fs = require("fs")

fs.readFile("movies.txt, "utf8", function(error, data){

    if(error) {
        return console.log(error);
    }
    console.log(data)

    var dataArr = data.split(",")

    console.log(dataArr):

});
```

## Appending file
super useful for logging

takes text file, the thing to add, and a callback function
```
var fs = require("fs")

fs.appendFile(textFile, "hello kitty", function(err){
    if(err){
        return console.log("error:)
    }
})
```


## switch statements

the breaks are important

Switch statements are good at being concise so, leverage that with functions 
```
switch(somethingYouWantToCheck) {
    case "something":
    //do stuff
    break;
    case "anotherThing":
    //do stuff
    break;
}
```

## Why use node.js

Could just have database opened up to public

- In general having that exposed to the public is bad
- Seperations of concerns
- "build out business domain" 

Node is used a lot of APIs and "aggressive" web content. It sits between the client and server

## package.json and NPM

Probably see package.json in most projects
Version lock/package lock is very helpful 

run the below if a package.json exists in the directory
```
npm install
```
if it does not and you want to create a new new package.json. This will run a lot of stuff on the CLI

```
npm init
```

Can call out one library as well
```
npm install request
```

can install at global level (NOT ADVISED)
```
npm install -g request
```
### Best way to work is to have a working directory with its OWN node_modules established via npm 


## Requests

``` 
var request = require("request")

request("someURL", function(error, response, body){

    if(!error && response.statusCode === 200) {
        console.log(body)
    }
})

```

## MVP Thinnest Vertical Slice and Agile Development

MVP: Building the minimal projduct

"thinnest vertical slice"



### Layers

- Frontend

- App

- API 

- Database

And building just the PORTION of each layer to make it functional for that small slice


## PLAD and project management
Product, Agile, DevOps, and Lean

https://mxmw2016.sched.com/event/7WeU/plaid-product-lean-agile-and-devops-panel

## gitIgnore
can select files to ignore (especially for all the node stuff, it would be a lot to push up )

https://github.com/harthur/brain/issues/25


# Class 07/10/2018 MORE NODE

## Interview stuff:

least common subset (lcs problem)

barren land problem

binary search tree

---------------------------
Comparators and maps 


Best Practice

createa new direcotry
then do an
```
 npm init
```
run through all all the questions and enter what you need

This should generate a package.json 

then you can install modules 
```
npm i requests
```


(the version number works as follows 1.0.2 where 1 is the major release, 0 is the minor release, and 2 is the bug fix)


# 7/12/2018 Constructors 

Seperation of concerns: "Coupling" and "Decoupling" when it comes to changing something or breaking out a function from the code (its context)

Concerns and encupsulation: who OWNS the thing (a method within the object which checks the objects HP to see if it is alive seems reasonable to be a method rather than a FUNCTION outside of the code)
Constructors can create objects

Constructors are used in Object Oriented Programming (OOP)

Note the syntax difference between creating an object
## object example
```
var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        
        if(this.raining === true){

            console.log(this.noise)
         }
    }
}

```


## constructor example
```
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {

        if(this.raining === true){
        console.log(noise)

        }
    }
}
var dog =  new Animal(true, "woof")
var cat = new Animal(true, "meoooow")
var bird = new Animal(false, "chirp")
```

Notes on syntax differences
- this.[property] = [property] in constructor rather than [key]: [value] in an object
- the creation of a new object from that constructor utilizes the "New" and passing of properties
- the function that is the constuctor typically has a capital letter, Animal, 

Javascript is SORTA OOP but it will disappoint when it comes to inheritance 

You can add properties/functions to a constructed objects 

```

dog.fetch = function() {
    console.log("ONLY THROW, DON'T TAKE")
}

dog.breed = "Yellow Lab";
dog.neutered = true;
dog.legs = 3;

```

# 7/14/2018 Constructor and Prototypes

prototype applies to all the objects built by constructor, can be done outside of the constructor and everything created by the constructor I think gets access to it
```
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {

        if(this.raining === true){
        console.log(noise)

        }
    }
}
var dog =  new Animal(true, "woof")

Animal.prototype.addition = function(){
    var firstNumber = 1
    var secondNumber =2 
    var sum = firstNumber + secondNumber
    return sum
}
```
## Iterative vs Recursive 
Cannot just a for loop for async things, you must use recursion to make that promise THEN do whatever THEN make that same promise again.

Recursive uses something like the Fibonnoci sequencing

start with something like count = 0 

check if count is less than some number, if less than, do someAjax promise - then something happens, increment up count and call the ajax promise again

recusion is something calling itself, this is a rescursion LOOP

## Recursion Arrays 


# 7/17/2018 

## Architecture, design, and good code  

Great career sites for common interview questions:

- https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/
- https://www.hackerrank.com/
- https://leetcode.com/


Solid design lends itself to building out easier 


## UX vs UI

- UX is like when a user enters a invalid command and how we respond (do we default to something or just let the user know that it didn't work)

- UI is how it looks

## design

breaking out responsiblites (think tv.js vs actor.js for the cli.js app) and is effective because we can go back and change just one part without affecting others


# 7/19/2018

## MySQL

Structured Query Language 

https://www.w3schools.com/sql/sql_intro.asp

Standard SQL Port 3306

localhost: 127.0.0.1


Nabil on Docker and Kubernetes also stylized K8S (HE SAYS THIS IS NOT GOING ANYWHERE)
- organization system to run things locally, good way to test databases 
- containers can SCALE so if you need 12 at peak hours and 3 at midnight, this is big
- it is basically virtualizing everything and also sharing a lot resources, it creates containers 
- kunernetes orchestrates everything on the SERVER side it can:
    - keep two containers (docker) up at a time (even if one goes down)
    - monitor CPU or other resouces 
    - can handle "SECRETS" eg api keys
    - can use K8s for deploying new version and tearing down old https://en.wikipedia.org/wiki/CI/CD

## SQL and schemas
SQL requires a SCHEMA, which it means it needs sort of a template before you start adding data to and what SORT of data (characters, intergers, floats, etc)

```
CREATE TABLE some_table (
    --VARCHAR is 100 characters long 
    table_1 VARCHAR(100) NOT NULL,
    --integer allows a 10 digit integer
    table_2 INTEGER(10),
    table_3 BOOLEAN
);
```

```
    
 CREATE TABLE favorite_movies(
     --this is a way to have the database assign the ID based on the last ID
    id INTEGER NOT NULL AUTO_INCREMENT,
	film VARCHAR(100) NOT NULL,
    --the default always creates it as false unless the specified as other when entered
    five_times BOOLEAN DEFAULT false,
    score INTEGER(100),
    --sets the PRIMARY KEY which is to say, the best way to get data
    PRIMARY KEY (id)
    );
    
```

Updating data, usually the WHERE should grab a primary key 
```
UPDATE some_table
SET some_col = 6
WHERE some_col = some_value

```
## JOIN TABLES
- inner join: combines the tables and data has to exist on both the tables 
- left join: only grabs data from one of the two tables, even if the other has null values
- right join: same as above...but flipped. 

JOINING TABLES with LEFT JOIN 
THIS SHOULD SHOW ALL THE DATA ON THE some_table even if it doesn't exist on some_table_2 (I think)

https://stackoverflow.com/questions/5706437/whats-the-difference-between-inner-join-left-join-right-join-and-full-join
```
SELECT col1, col2, col3_some_table2
FROM some_table
LEFT JOIN some_table2 ON some_table.id = some_table_2.id

```


# 7/21/2018
## Docker pre class
using https://docs.docker.com/toolbox/toolbox_install_windows/ on non preminum windows 10

use https://hub.docker.com/ and pop open the docker terminal 

### new guy name is David works at Target, from OSU

## MySql and Node

can use node to require mysql

```
var mysql = require("mysql");

var connection = mysql.createConnection({
  //host: "localhost",

  host: "192.168.99.100",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  // password:"root",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

```

Using callbacks are useful for async stuff, so it is waiting for the response then the callback is executed once it is ready to go

mysql is really nice for building queries, each "?" you enter into the base query you can pass an array which maps it in order 

so genre=? becomes genre=DANCE and title=? becomes title=The

```
var query = connection.query("SELECT * FROM songs WHERE genre=? AND where title =?", ["Dance", "The'], function(err, res) {

```
## async connects and REAPING

you don't necessarily want to end.connection() in a specific function in mysql node because you do not know the run time on those async functions...one may end earlier than the other even though they are called in a specific order (promise and responses) so...don't end connection. Nabil recommended leverating the "REAP" on the SQL side, which monitors if your connect is idle or not and ending the connection on their end

## Create Read Update Delete via node.js (CRUD)

Good CRUD examples: CBC\ClassActivities\2018_07_21\09-iceCreamCRUD AND CBC\ClassActivities\2018_07_21\08-playlistRead\Solved


# 7/24/2018 More MySQL

SCHEMA FILE and SEED FILES 

You can import CSV via https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-table.html

instead of FLOAT use DECIMAL, FLOAT does not guaratee accuracy

# 7/26/2018 Introduction to Node Servers

Going over last SQL activity fron 7/22/2018

## Foreign Keys in SQL

```
DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top_albums (
  id INT NOT NULL auto_increment,
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE top_songs (
  id INT NOT NULL auto_increment,
  album_id INT NOT NULL,
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year_released INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (id),
      FOREIGN KEY (album_id) REFERENCES top_albums(id)
);

INSERT into top_albums (position, album) values (1, 'Purple Rain');

INSERT into top_songs (album_id, position, artist, song) values (1, 5, 'Prince' ,'Lets go crazy');

SELECT * FROM top_songs;
select * from top_albums;



SELECT *
FROM top_albums 
INNER JOIN top_songs 
ON (top_albums.id = top_songs.album_id ) 
WHERE (top_songs.artist = 'Prince') 
ORDER BY top_albums.year;
```

Create some_db first

Then Creating some2_db that has a FOREIGN KEY then can specify that a certain KEY is required which key word REFERENCES the some_db(id)

It presupposes you KNOW something about that first database to pass a foreign key in the second database, but there are "ways" to get around this...not specific

## Powerpoint Server Side

Node and Express Servers are one of the MOST IMPORTANT THINGS we learn

### Resources

get a pluralsight trial account https://www.pluralsight.com/ and check out "Building Blocks of Express.js"

also USE Lynda as well on express.js 


Clients and Servers use HTTP/HTTPS to communicate 


Use to be more dedicated to HARDWARE, but lots of "cloud services" like Amazon Web Services, Google Cloud Platform, Heroku, and Digital Ocean

For now, our machines will be clients and servers 

Things our servers will do:

* Listen
* URL Parsing
* Route Handling
* Send HTML 
* Send JSON
* recieve POSTS
* Server Side Logic

```
//requiring http module
var http = require("http")

//creates a server, there is a "request stream" and "result stream"
var server = http.createServer(function(request, result){
    //passing call back function and executed on every request to the server
    console.log("server received a request")
    //writing to our "results stream"
    result.end("Hello world!")
});
//makes server listen
server.listen(7000, function(){
    console.log("I'm listening")
});
```

run the above code in a node directory and then navigate to 
http://localhost:7000/ 

in a browser and it should say "hello world!" 

can use switch statements to parse URLs and send content out 

Can READ a file with node's FS library

```
function handleRequest(req, res){
    fs.readFile(_dirname + "/index.html", function(err, data){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(data)
    })
}
```

_DIRNAME, global variable which looks at the CURRENT DIRECTORY

## URL vs URI

https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn


# 7/28/2018 Express Servers

## using postman 

Postman apparently emulates the "posting, requesting, etc"

Post console
```
You did a POST with the data:
{"productionName":"A Plastic Straw"}
```

Put console
```
You did a PUT with the data:
{"productionName":"A Plastic Straw"}

```
Delete console
```
You did a DELETE with the data:
{"productionName":"A Plastic Straw"}
```

Leveraging different METHODS on the same URL can have different things done on the same URL (be it posting data, deleting data, getting data, putting data.). You can parse out the method and have a switch statement to DO whatever you need to have done. Think about out that default bootstrap form you saw on the campnow project which used a PHP action redirection and posting stuff. It probably leveraged this. 

How does a box  represent a server? Stuff needs to be put IN it for it to be something

Common "boxes" to put inside are "POST, LISTEN, Sending HTML, route handling"

## Express Notes

https://expressjs.com/ 

Web framework unopinionated, minimalist, web framework for node.js 

```
npm install express --save

```
What is a route? 
things like / or /home or /api/headlines 

These are the URIs I think (different from URLs)

Different ROUTES can have different STUFF given to them (/API can return JSON whereas / can return HTML)

Difference between GET and POST: 

GET is expecting something back from the server

POST is expecting something from the client and MIGHT have something back from the server

```
var express = require("express");

var app = express();
var PORT = 3000;

var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});


app.get("/yoda", function(req, res) {
  res.json(yoda);
});

```

require a route in express
```

app.get("/:character", function(req, res) {}

```
the notation of "/:SomeRoute" requires it. The ":" is the magic part of it

to make a route optional

```
app.get("/character?", function(req, res) {}
```

another good example of optional and required

```
app.get("/:character/:age?/:role?", function(req, res) {}

```
Show what is running on a given port
```
lsof - i :3000

```

then can KILL the process by taking the PID

```
kill [somePID]

```


## post requests

```
app.post("/some/path"), function(req,res){


}

```

If POSTING probably need to put that data somewhere, or else it will not "persist" 

## path npm

Helps give ABSOLUTE route to the file/folder etc

# 8/2/2018 Handlebars

## Reviewing Posts with jquery and Routing from 7/31 class
###
in package.json there is a "main" definition,  which if you run 
```
npm start
```
it runs whatever is at the main in the package.json

SO probably going forward use npm start instead of node server.js or node w/e to start an app

### body parser 
bodyParser parses the body (usually json) of gets and posts. It makes it easier to deal with.

### routing
making a route REQUIRED such as 
```
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app)

```
Where you have to establish the APP in your express code before you start passing it to routes

### jquery posts

find current URL by the window
```
var currentURL = window.location.origin
```

## Getting Parameters from a URL
Use colons ... also remember you can use astriks 
```
app.get("/:operator/:value1/:value2", function (req, res) {

  var operation = req.params.operator
  var value1 = req.params.value1
  var value2 = req.params.value2
```

## Working with MySql and Express to display html

See seinfeld DB in the 2018_08_02 folder

This is cumbersome and becomes very hard to read because 

People have built semantic javascript framework to solve this issue, it give syou a template to inject variables into which gives back a html file 

## Handlebars

[handlebar website](https://handlebarsjs.com/)


```
npm i handlebars
```

```
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")
```

Handlebars is a "conventional" framework, it just expects that all your templates are ain a certain directory called "views" and that directory is populated with files which end with .handlebars. These handlebar files have variables that are expressed in this way

```
{{someVar}}
```
which you can then pass variables and use this weird "each" notation like a for lopp

```
<ul>
{{#each somevariable }}
    <li>{{}}</li>
    {{/each}}
</ul>
```
Seems like the {{somevar}} can be a JSON key value such that 
```
{key: value,
name: 1,
bankAccount: 666}

```
would map to a .handlebars file if it was passed and the file was formatted such that
```
<h1>{{key}}</h1>
<p>{{bankAccount}}</p>
<h2>{{name}}</h2>

```

# 8/4/2018 More Handlebars

Could parse all the data on the template side of Handlebars using {{if}} and {{each}} and some custom blocks. But most likely not best practice

With HTTP request you define a header method (not sure if that is the proper term). These are the GETs and POSTs among others. Think CRUD.

HTTP Get, Post, Put, and Deletes 

## REST API 

Representational State Transfer  = REST 


https://spring.io/understanding/REST

https://www.restapitutorial.com/lessons/whatisrest.html

### Put: store an entity at a URI. It creates a new entity or update an existing one. IT is "UPDATE"

### Delete: remove data at a URI

```
<form action="/" method="POST">
	<textarea type="text" name="task"></textarea>

	<button type="submit">Submit</button>
</form>
```

Also in Chrome Dev Tools, use the  network tab to see the POST and GET in details.

## Putting and Deleting via HTML

Using jquery to pass something like the following

```
$.ajax("todos/" + id, {
    type: "DELETE"
}).then(
    function(){
        console.log("deleted id" , id )'
        location.reload()
    }
)
```
Unlike GET and POST, ajax needs to have the method/type of put or delete has to be specified 


# 8/7/2018 ORM

This does something...if anticipating needing to use javascript files which are held on the server but will be executed on the browser, use this code for code that is held in the public folder. Usually has a structore of public/assets 
```
app.use(express.static("public"));
```

## ORM 
Object Relational Mapping

In Class Example
* create var orm
* orm is a json object
* where it has several methods 
* Using ?? in the SQL query references the Table or Column
* using ORM, that is abstracting the queries and keeping the SQL out of the server, can help prevent SQL injection

If what you are importing is asynchronous via require, if you assign that "return" to a variable in this sort of way:

```
var data = orm.selectAll("table", "column" )
```
This will return an undefined.

See the "asynchProblem" from today's class activites

But can include a call back function
```
orm.selectAll("someTable", "someColumbn", function(result){
    var data = result;
    console.log(data)
})
```
where the orm has a parameter which refers to the callback function
```
var orm = {
    selectAll.(table, column, cb){
        connection.query("select ?? from ?? where", [column, table], function(err, res){
            cb(res)
        })
        
    }
}
```

Anonymous function: a function without a name, sort of a call back function 
This is an anonymous function
```
var doSomething = function() {
    console.log("something")
}
```
Whereas a "named" function would be something like

```

function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}

```

## Model View Controller (MVC)

* Model - database
* View - client's perspective (html, css, javascript)
* Controller - business logic that drives the app (middleware, node.js, etc )


## Handlebars Partial
Using the syntax 
```
 {{> cats/cat-block sleep=false}}

```
Is using a "partial" which expects some .handlebars file to be in partials director

in this case because it says cats/cat-block is referring to a directory within that partials folder. 

# 08/09/2018 Sequel to MySQL

## Recap ORM and MVC 

### MVC
MVC is a paradigm, organizes code so that you can seperate out business logic into 

* Model - represens the application core  (database and its connection)
* View - anything that is displayed to the user to interact with the application (HTML, CSS, public files)
* Controller - handles input into database (accepting input from the view, sending it to the model, taking a response from the model, and sending it back to view)


This is an abstract model, in reality some parts of a server are both Model and Controller. Same with the server doing both the Model and Controller aspect if you have an ORM object and connection object associated with the server 

New SQL for capturing date time

```
DATETIME
```

### ORM

Object Relational Mapping

Method of abstracting code so that MVC can 

## New framework Sequelize 

http://docs.sequelizejs.com/manual/installation/getting-started.html

Can construct tables and populate them via javascript 


Sequelize models are actually tables 
Can do A LOT with sequelize

# 08/11/2018

## Getting in the CRUD with Sequelize

Sequelize is an ORM model 

## common sequelize crud methods

* findOne: finds a single record from a table
* findAll: finds all records from a table
* create: creates a new record in a table
* update: updates a record or records in a table
* destroy: deletes a record or records from a table 


issue with sequelize on windows machine: https://github.com/sequelize/cli/pull/479

basically creates \ in the index.js config updated with the following in the index.js that is created 

```
var config    = require(__dirname + '/../config/config.json')[env];
```

Check the 07-ORM-To-Sequelize-Unsolved for lots 

validation notes: http://docs.sequelizejs.com/manual/tutorial/models-definition.html#validations


# 8/14/2018

More Sequelize pratice 

## Sequelize Associations (foreign keys)
http://docs.sequelizejs.com/manual/tutorial/associations.html

## Eager Loading (Join)

http://docs.sequelizejs.com/manual/tutorial/models-usage.html

# 8/16/2018 Project 2

Travis and LINTING

# 8/18/2018 Project 2, project management

## Agile and Waterfall

* Waterfall use to be used frequently in the 90s
* transitioned more to Agile in the early 00s 

## Kanban

* Git Hub PROJECTS tab has a KANBAN Board

# Stand Ups

* Meeting in the evening via slack

## Sprints

Every 2 weeks

## Playback

End of every sprint, show off all the delieverable features from the last sprint

# 08/21/2018

## Testing 

Currently have a directory called 'test' in the Group2 Project

Can automate tests

### Mocha

Test runner
* executes "describe/it" syntax

```
describe("someFunction", function() {
    it("should multiple proprerly when passed numbers", function(){
        //this part is chai
        expect(multipl(2,4)).to.equal(8);
    })
    it("should throw when not passed numbers", function(){
        expect(function(){
            multiply(2,"4");
///SOME MORE STUFF HERE I MISSED
        })
    })
})
```
* formats results

### Chai

Assertion library
* asserts that what "should" have happened, did in fact happen

## Error handling

* Bugs

* Errors/Exceptions

Useful code
```
try {

} catch (error){

}


```


# 08/23/2018

## End Point Testing

Unit testing is the most "atomic" version of tests. As in it is the lowest and most minute level of tests 

### ChaiHttp

Plugin which can be required via 

```
var chaiHttp = require("chai-http"); 

```

enables APIs to be tested it sees like

# 08/30/2018

## Project 2 Recap

Critiques 
* Bird in hand is worth 2 in the bush
    * Know where you are 
    * MVPs 
    * Thinnest vertical slice
* Curve Ball
    * Controlling the board means controlling the game
    * Deploying on Heroku elminates a big variable
* Make your GitHub projects better
    * Back end projects are hard to "see"
        * make a gif for github readme showing what is going on 
    * Have a Dummy account for people to play around with and mention it in ReadMe

## read ahead, how to link MongoDb and Node

## MongoDB

* Not relational 
* document oriented, add data directly via JSON to "collections"
* stores data in BSON (Binary JSON)
* lots of drivers and packages
* More "object oriented"
* Excels at heterogenous data formats and are easy to implement

### Collections

Made up of individual documents 

Database = database
table = collection
row = document
column = field 


# 9/6/2018
## Web Scrapping and Server-Side Mongo

### Web Scrapping with Cherrio

https://github.com/cheeriojs/cheerio

https://cheerio.js.org/

## Mongo Recap

Display all databases

```
show dbs
```

create/use a database

```
use <database>

```

create a collection

```
db.createCollection("<somecollectionname>")

```

# 9/8/2018 Mongoose

## Mongoose
* Helps write an object mapper which can create a schema
* Custom methods, format data in the model 
* Populate data with Mongoose, similair to SQL join 

Think like Sequelize or MySql schema, but a version for Mongoose. 

Random links NPM 

https://github.com/creationix/nvm
https://github.com/mably/lncli-web



## Mongo Population
* Think SQL join
* Foreign keys, sometimes leveraging the UUID that comes built in on mongo
```
db.book.find({title:'Coraline'}).populate("author")
```
adds a key which is "author" which might be 

# 9/11/2018

## ES6

## React
Framework which handles MVC all in the browser

## New in ES6

* let/const
* functions
    * default parameters
    * arrow functions
* promises
* classes
* template strings
* array/object helper functions 


## Let/Const

"block" scope

Whereas var is is globabl

## const 
* can not be reassigned, contents can be updated
* helps readers id such values

## let
* can be reassigned


## template strings

can use the "tick mark"

```

`how many tacos did ${classmate} eat`; 

```
which is better than what we usually do

```

"how many tacos did " + classmate + " eat"

```

Also can do line breaks and the template strings interpert it 

```
`how many 
tacos 
did ${classmate} eat`; 

```


## .map

Returns an object 

## .filter

Can be used on an array and to evaulate if a criteria is TRUE or FALSE and it returns that array

## .reduce

```
x.reduce(function(accumulator, item))
```
## arrow functions 

## object destrucuring

```
const animals = ["bird", "dog"]
//the below deconstructs the list and then adds the string in 

const myAnimals = [...animals, "cat"]

console.log(myAnimal)

```

# 09/13/2018 React

## High level summary

React manages state changes on a virutal DOM so several things can go on at the same time without interfering with one another

Pros
* Component based, breaks app's UI into reusable components 
* reactively updates in response to updteas to its "state" reduces the DOM mainpulation needed
* Can be used ot build applications on the web, server, and in native apps
* Arguably easier to learn and more populate than other competing frontend JS libraries

Cons 
* just a view library concerned with rendering user interfaces, HTTP request have to be used still
* setting up react can require more configuration than other libraries 

## Details

Needs a "build system" 
Similair to NPM but for the frontend/browser side
Using Webpack and Babel

### Babel
JS complier, allows next generation JS code ES6, ES7, etc into ES5 that most browsers will understand 

## Starting a react app

```
create-react-app <some name>
```

## yarn 

yarn is like NPM but better apparently

to start react app after it is set up run

```
yarn start
```

## JSX

JSX is a magical version of javascript that you can just write HTML with. Whenever using its syntax, make sure at the top of the document
```
import React from "react";

```

JSX looks like the <p> tags but can be much more I think
 
```

const HelloReact = () => <p>Hello World!</p>;

```

# 09/15/2018 More React

https://react-reacap.netlify.com/#/

## Components

* Layout and logic are kept bundled in a self-contained packate
* Easily be reused
* Easy to test

## JSX

* Javascript extension which uses HTML syntax
* Looks like HTML but there are a few things that are not exactly the same (class vs className)
* {} used inside to render code in JSX, needs to have a return value 

## Props
* Short for properties 
* similair to properties in terms of HTML element 
* Props are like function arguments that are passed into components

## ReactDOM.render

* Handles DOM rendering 

## .Map and components 

Iterating over a list of objects and rendering them

```
const App = () => ( <div>{someArray.map(item => <List name = {item.name} />)}</div>)

```

## State 

Every time a change has been made previously, everything on the DOM has to be rerendered.

Using STATE it doesn't need to be rerendered itself

Try to make components stateless whenver possible, according to David

## React Resources

https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f

https://reactjs.org/docs/forms.html

https://reactjs.org/docs/lifting-state-up.html

https://reactjs.org/docs/state-and-lifecycle.html

# 9/18/2018 More React

## Conditional Rendering 
Waits for everything to load before the code executes
```
componentDidMount(){
    //some code
}
```

ternary function 
https://en.wikipedia.org/wiki/%3F:

## React Routing 

```
yarn add react-router-dom

```

Can grab the current url on the following path

```
${props.match.url}

```
which can be used to render additional routes. Key word there is render.

Seems that this loading needs to happen within the component, or, more precisely it is easier to reuse if the ${props.match.url}


#9/20/2018 MERN and React

* Mongo
* Express
* React
* Node

At least for tonight, Express and React will have servers running in parallel and working together 

# 9/25/2018 Java

## Public Classes

### Some Boilerplate
```
package console; /*this details the file structure in some way. convention is something like com.google.console

import java.util.Scanner;

public class Console.IO {


}

```

Convention for starting a class (I think it is a class)

```
public static void main(String[] args) {

}
```
Java is a complied language, have to compile it every time so then the Java Virtual Machine can then run it 

Java needs object type defined when the variable is created such that

```
String name = "Cleopatara"
int age = 2000/5
boolean truth = true
boolean falsy = !truth

```
Lower case Java is "primitive" 
Upper case Java is something else...
has something to do wit the object types that are declared, not elborated on 


to compile code in java

```

javac <somefile.java>

```

This will create a java binary file that ends in .class (at least for now)

then to run that .class file

```

java -cp . folder.nameOfDotClassFile

```
THe "." notation means it is in the same directory, otherwise you need to do .. or something...not quite sure


## Arrays

Arrays need to have a set length
syntax
initalizing 
```
String[] names
```

Two ways of creating a string 
```
names = new String[3]
```

## For Loops

```
for (int i =0; someArray.length; i += 1) {
    system.out.println(
        String.format(someArray[i])
    )
}
```

## ArrayLists

ArrayLists are more powerful

```
package collections;

import java.util.ArrayList;

public class ArrayLists {

}


```

## Hashmaps

Think like key value pairs in javascript 


Hashmaps are the most frequently used, but there are other maps


## Functions

In Java nothing lives outside of a class

Functions must live inside of a class (or methods)


Must return a type

void in Java is a reserved word that tells java that nothing is expected to be returned

## Private

using the `private` modifer (which is opposite of public) which limits the accesability 


## Classes

Powerful for creating OBJECTS

Constructors can be used to create new objects with set attributes expected along with methods 

# 09/27/2018 Java Classes

## Object Oriented Programming

* Software should be able to be broken apart into individual modules
* Then those modules can be reconstructed 
* Better architecture
* Easier to modify
* In Java class is a blueprint of an object

Rule of thumb

Classes should be a "noun" 
Methods should be "verbs"

## Running bash scripts
```
./bashscript.sh
```

## Extending Classes

You can add a class to a class

Think taking an animals class and then extending it for a bird or dog.

```

class SOMECLASS extends PARENTCLASS {
    something (String name){
        super(name)
    }
}
```

SUPER refers back to the PARENTCLASS.

Can literally pass things back into the PARENTCLASS by calling super where that SUPER is referring back to the parent constructor

Abstract flag (I'm not sure what these are called, but the key words added before variables or functions) can be used to call out properties of an object which may have children objects that do not use that particular property


Resources

* https://dzone.com/refcardz
* Stack Overflow
* Oracle Documents 

## Interfaces

example
```
class Cat extends Animal implements Pet {

}
```

Interfaces are promises it sounds like

Good explanation here: https://www.geeksforgeeks.org/interfaces-in-java/

It sounds like interfaces focus on the commonalities between different classes 


# 09/29/2018 More Java

## Problem Conditions

Two general types of problem conditions
* Error, serious problems that is probably external 
* Exception, actual problems with the code


## throwable cause
* can force exceptions to be thrown
* superclass for erro and exception

Example
```
try {...} 

catch(Exception e){...}

```

Seems to be useful for debuggin
```
catch(some.conditions e) {
    e.printStackTrace()
}

```

In Class example:

```
try {
      Polygon square = new Polygon(3, 0);

    } catch (Polygon.InsufficientVerticesException e) {
      System.out.println(e);
    } catch (Polygon.InvalidSideLengthException e) {
      System.out.println(e);
    }

```
Can importan all the exceptions with the following at the top of the file:
```
import com.exceptions.custom.* 
```
and then just call out the message name in the catch block like so

```
try {
      Polygon square = new Polygon(3, 0);

    } catch (InsufficientVerticesException | InvalidSideLengthException e) {
      System.out.println(e);
    }
```


Exceptions are high level ways to handle errors. Java is a strict language, it needs everything up front and verbose. 

## Variadic Functions & Streams

Collections have a method called stream, which turns the collection into a stream

A collection is a group of things. A stream is a thing at a time.

```
List<String> items - new ArrayList<String>();

items.add("one");
items.add("two");
items.add("three");

Stream<String> stream = items.stream();

```

Collection: the entire array as one unit
Stream: each item of a string as its own unit 

Streams often use LAMBDA expressions

## Some stream methods

* .stream();
* .filter(...); filter removes items from the array 
* .map(...); alters the items from the stream and returns a new stream
* .collect(...);  


# 10/02/2018 Algorithms

## Linear Search 

For loop searching for a value

Painful when the last element in the array is the one you are looking for it

it has a 
```
O(n)

```
https://en.wikipedia.org/wiki/Big_O_notation

Which basically says that the length of the array dictates the speed of the results

## Binary Search

Split things in half just search a section at a time 

Only works in a sorted list 

split the array in half, see if the index at that halfway part is greater than or less than, then depending on the results, split the 1/2 into another 1/2 by selecting the middle index 

