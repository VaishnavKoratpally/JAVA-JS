package StreamsAndLambdas;

import java.util.stream.Stream;

import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Stream;

public class Vowels {
    public static void main(String[] args){
        String[] strings = {"aeiou", "b", "aaa"};
        Stream.of(strings)
                .filter(s -> s.matches(".*[aeiou].*"))
                .forEach(s -> {
                    long vowelCount = s.chars()
                            .filter(c -> "aeiou".indexOf(Character.toLowerCase(c)) >= 0)
                            .count();
                    System.out.println("String: " + s + ", Vowel Count: " + vowelCount);
                });


    }

}
