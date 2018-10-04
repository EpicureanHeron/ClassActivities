package com.streams;

import java.util.ArrayList;

import java.util.Arrays;

import static java.util.Arrays.stream;

class Streams {

  public static void main (String[] args) {
   helloDoctors("Fink", "Rothenberg", "Gauss");
  _helloDoctors("Andrews", "Fink", "Rothenberg", "Gauss", "Alderman");
  }

  private static void helloDoctors (final String... names) {
    for (String name: names) 
    { 
      String doctor = String.format("Dr. %s" , name);
      System.out.println(doctor); 
    } 

  }

  private static void _helloDoctors (final String... names) {
   
    stream(names).forEach((String name)->{
      System.out.println(name);
  }
    );
}

}
