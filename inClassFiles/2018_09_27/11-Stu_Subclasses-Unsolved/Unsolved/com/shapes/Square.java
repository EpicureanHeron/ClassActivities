package com.shapes;

import java.lang.Math;

public class Square extends Shape  {

Square (int sideLength){

  //literally passing these to the SUPER
  super(4, sideLength);
}

  double area () {
    return Math.pow(this.length, 2);
  }

  int perimeter () {
    return this.length * this.sides;
  }

  int sides () {
    return this.sides;
  }
  

}
