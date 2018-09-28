package com.shapes;

import java.lang.Math;

//  Your implementation goes here.
 class Square {

    public int sideLength;

    private static final int numberOfSides = 4;


int setSideLength() {
    this.sideLength = length;
 }

double area ()  {
    return Math.pow(this.sideLength, 2);
}

int perimeter () {
    return this.sideLength * Square.numberOfSides;
}

int getSides (){
    return Square.numberOfSides;
}

 }