import java.util.HashSet;
import java.util.Set;

public class Vowels {
    public void vowelCount(String s){
//        char[] vowels={'a','e','i','o','u'};
        Set<Character> vowels = Set.of('a','e','i','o','u');
        int vowelCount=0;
        for(char c : s.toCharArray()){
            if(vowels.contains(c)){
                vowelCount++;
            }
        }
        System.out.println("Number of vowels : "+vowelCount);
    }
}
