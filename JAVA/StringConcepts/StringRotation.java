import java.util.LinkedList;
import java.util.Locale;
import java.util.Queue;

public class StringRotation {

    public boolean checkRotatedArrays(String str1, String str2){
        if(str1.length()!=str2.length()) {
            return false;
        }
        if(str1.equals(str2)){
            return true;
        }
        Queue<Character> q1 = new LinkedList<>();
        Queue<Character> q2 = new LinkedList<>();
        for (char c : str1.toLowerCase().toCharArray()) {
            q1.add(c);
        }
        for (char c : str2.toLowerCase().toCharArray()) {
            q2.add(c);
        }
        for(int i=0;i<str2.length();i++){
            char removed=q2.remove();
            q2.add(removed);
            if(q1.equals(q2)) return true;
        }
        return false;


    }
}
