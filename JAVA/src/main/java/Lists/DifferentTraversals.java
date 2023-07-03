package Lists;

import java.io.Console;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

public class DifferentTraversals {
    public static void main(String[] args) {

        List<String> list=new ArrayList<String>();
        list.add("Abcd");
        list.add("something");

        for(int i=0;i<list.size();i++){
            System.out.println(list.get(i));
        }
        for (String s: list) {
            System.out.println(s);

        }
       Iterator<String> it =list.iterator();
        while (it.hasNext()){
            System.out.println(it.next());
        }
        list.forEach(System.out::println);

        Stream.of(list).parallel().forEach(System.out::println);



    }
}
