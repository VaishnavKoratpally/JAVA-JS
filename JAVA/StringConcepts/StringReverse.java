import java.util.Arrays;

public class StringReverse {

    public void reverseString(String str){
        char[] c= str.toCharArray();
        int start=0;
        int end=c.length-1;
        char temp;
        while (start<end){
            temp=c[start];
            c[start]=c[end];
            c[end]=temp;
            start++;
            end--;
        }
        System.out.println("After reverse : "+ new String(c));
    }
}
