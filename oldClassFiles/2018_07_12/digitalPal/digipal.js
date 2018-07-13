
//constructor
function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0

    //checks to see if the pal is hungry or not
    this.feed = function() {

        if(this.hungry === true){
            console.log("That was yummy!")

        }
        else if(this.hungry ===false){
            console.log("No thanks! I’m full.")
        }
    }
    //checks if pal is sleep, if so, it puts it to bed which causes it to be bored and age
    this.sleep = function() {
        if(this.sleepy === true){
            console.log("Zzzzzzz")
            this.sleepy = false
            this.bored = true
            this.increaseAge()

        }
    
        else if(this.sleepy ===false){
            console.log("No way! I’m not tired.")
        }

    }
    this.play = function() {
        if(this.bored === true) {
            console.log("Yay! Let's play")
            this.bored = false
            this.hungry = true
        }
        else if (this.bored === false) {
            console.log("Not right now. Later?")
        }
    }

    this.increaseAge = function() {
        this.age ++ 
        console.log("Happy Birthday to me! I am " + this.age + " old!")
    }

}

var dog = new DigitalPal()



dog.outside = false



dog.bark = function() {
    console.log("Woof woof!")
}

dog.goOutside = function() {
    if(this.outside === false) {
        console.log("Yay! I love the outdoors!")
        this.outside = true;
        this.bark()
    }
    else if(this.outside === true ){
        console.log("We’re already outside though...")
    }
}

dog.goInside = function() {
    if(this.outside === true) {
        console.log("Do we have to? Fine...")
        this.outside = false;
    }
    else {
        console.log("I'm already inside...")
    }
}


dog.goOutside()
dog.goOutside()

dog.goInside()
dog.goInside()
console.log(JSON.stringify(dog))

var cat = new DigitalPal()

cat.houseCondition = 20
cat.meow = function() {
    console.log("meow meow")
}

cat.destroyFurniture = function(){
    if(this.houseCondition > 0){
        this.houseCondition -= 10
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
        this.bored = false
        this.sleepy = true
    } 
}

cat.buyNewFurniture = function(){
    this.houseCondition += 50
    console.log("Are you sure about that?")
}

cat.meow()

cat.destroyFurniture()
cat.destroyFurniture()
cat.destroyFurniture()
cat.destroyFurniture()
cat.buyNewFurniture()
cat.destroyFurniture()
cat.destroyFurniture()

cat.play()
cat.sleep()
cat.feed()







