package Lists;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RemoveLast {
    public static <T> void RemoveLast(List<T> list ){
//        T value=list.get(list.size()-1);
        list.remove(list.size()-1);
        System.out.println(list.toString());

    }

    public static void main(String[] args) {
        List<String> list=new ArrayList<String>();
        list.add("Abcd");
        list.add("something");
        RemoveLast(list);

        List<Integer> list1 = new ArrayList<>(Arrays.asList(1,2,3,4));
        RemoveLast(list1);

    }
}
