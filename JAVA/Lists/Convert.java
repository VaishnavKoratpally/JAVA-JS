package Lists;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Convert {
    public static void main(String[] args) {
        List<String> list=new ArrayList<String>();
        list.add("Abcd");
        list.add("something");
        String[] st= list.toArray(new String[list.size()]);
        System.out.println(Arrays.toString(st));

    }
}
