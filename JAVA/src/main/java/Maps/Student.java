package Maps;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Iterator;


public class Student {
        private String lastName;
        private String firstName;
        private double GPA;
        public static List<Student> students= new ArrayList<Student>();



        public Student(String ln,String fn,double G){
            this.lastName=ln;
            this.firstName=fn;
            this.GPA=G;
        }


        public static void main(String[] args) {
            students.add(new Student("s", "s1", 4.0));
            students.add(new Student("hardy", "s2", 3.0));
            students.add(new Student("cena", "s3", 3.5));
            students.add(new Student("cena", "s4", 3.5));
            students.add(new Student("cena", "s5", 3.5));
            students.add(new Student("cena", "s6", 3.5));
            students.add(new Student("cena", "s7", 3.5));
            students.add(new Student("cena", "s8", 3.5));

            HashMap<String,Student> hm=new HashMap<String,Student>();
            for (Student st:students) {
                hm.put(st.firstName,st);
            }
            hm.forEach((key,value)-> System.out.println("Key : "+key+" "+"value :"+value));

            for (Map.Entry<String, Student> entry : hm.entrySet()) {
                String key = entry.getKey();
                Student val=entry.getValue();
                System.out.println("Key: " + key + ", Value: " + val.firstName);
            }

            Iterator<String> iterator = hm.keySet().iterator();
            while (iterator.hasNext()) {
                String key = iterator.next();
                Student value = hm.get(key);
                System.out.println("Key: " + key + ", Value: " + value.firstName);
            }




        }
}
