package com.exceptions;

class Test {

  public static void main(String args[]) {

    try {
      Polygon square = new Polygon(3, 0);

    } catch (Polygon.InsufficientVerticesException e) {
      System.out.println(e);
    } catch (Polygon.InvalidSideLengthException e) {
      System.out.println(e);
    }

    // try {
    //   square.area();
    // } catch (Exception e) {
    //   System.out.println(e);
    // }

  }

}
