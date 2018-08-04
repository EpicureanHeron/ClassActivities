// Instructions

// In this activity, we are going to create a constructor function called “Programmer” which can be used to create objects containing information on various programmers.

// Your “Programmer” constructor should be able to take in the following information...

// The programmer’s name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.

// Finally, create a “Programmer” object and call the method to print its contents


function Programmer(name, job, favLang ) {
    this.name = name;
    this.job = job;
    this.favLang = favLang;

    //checks to see if the pal is hungry or not
    this.printAll = function() {
        console.log(this.name)
        console.log(this.job)
        console.log(this.favLang)    
        
    }
}


var BillGates = new Programmer("Bill Gates", "Retired", "C++")


BillGates.printAll()