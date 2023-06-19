package StreamsAndLambdas;

import java.util.Arrays;

public class AverageofSquares {
    public static void main(String[] args) {
        Integer[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9};

        double average = Arrays.stream(numbers)
                .filter(s -> s % 2 != 0)
                .mapToDouble(s -> Math.pow(s, 2))
                .average()
                .orElse(0);

        System.out.println(average);
    }
}
