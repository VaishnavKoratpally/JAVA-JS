package StreamsAndLambdas;
import java.util.Arrays;
import java.util.stream.Stream;

public class Descending {

        public static void main(String[] args) {
            String[] strings = {"aaaaa", "aaaaz", "cap", "dogg", "powers"};

            Stream.of(strings)
                    .sorted((s1, s2) -> {
                        if (s1.length() == s2.length()) {
                            return Character.compare(s2.charAt(s2.length() - 1), s1.charAt(s1.length() - 1));
                        } else {
                            return Integer.compare(s1.length(), s2.length());
                        }
                    })
                    .forEach(System.out::println);
        }
    }
