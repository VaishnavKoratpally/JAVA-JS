package StreamsAndLambdas;

import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Stream;

public class Capitalize {

    public static void main(String[] args){

        String[] strings = {"apple", "banana", "cat", "dog", "elephant"};
        Stream.of(strings).map(s->s.substring(0,1).toUpperCase()+s.substring(1))
                .sorted()
                .forEach(System.out::println);

    }


}
