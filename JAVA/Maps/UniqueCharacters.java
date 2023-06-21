package Maps;

import java.util.HashMap;
import java.util.Map;

public class UniqueCharacters {

    public static void getUniqueCharacters(String s){
        Map<Character, Integer> map = new HashMap<>();
        for (char c : s.toCharArray()) {
            if (map.containsKey(c))
                map.put(c, map.get(c) + 1);
            else
                map.put(c, 1);
        }
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            System.out.println("key: " + entry.getKey() + " count: " + entry.getValue());
        }
    }

    public static void main(String[] args) {
        String s = "randomrandstring";
        getUniqueCharacters(s);
    }
}
