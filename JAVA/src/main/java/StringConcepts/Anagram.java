import java.util.HashSet;
import java.util.Set;

public class Anagram {
    public boolean returnAnagram(String str1, String str2){
        if(str1.length()!=str2.length()) {
            return false;
        }
        Set<Character> charSet1 = new HashSet<>();
        Set<Character> charSet2 = new HashSet<>();
        for (char c : str1.toCharArray()) {
            charSet1.add(c);
        }
        for (char c : str2.toCharArray()) {
            charSet2.add(c);
        }

        return charSet1.size()==charSet2.size() && charSet1.equals(charSet2);
    }
}
