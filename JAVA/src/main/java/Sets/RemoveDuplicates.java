package Sets;

import java.util.HashSet;

public class RemoveDuplicates {
    public static void main(String[] args) {
        String str="repeating";
        HashSet<Character> hs=new HashSet<>();
        for (char c: str.toCharArray()) {
            hs.add(c);
        }
        StringBuilder sb = new StringBuilder();
        for (Character element : set) {
            sb.append(element);
        }
        System.out.println(hs);
    }
}
