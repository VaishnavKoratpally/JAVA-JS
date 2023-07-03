package com.package_demo;

public class Static {
    public  static int legs;
    static {
        legs=2;
    }

    public static int returnLegs(){
        return legs;
    }
}
