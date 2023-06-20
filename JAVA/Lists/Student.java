package Lists;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

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
    public static double calculateGPA(){
        double average=0;
        for (Student st:students) {
            average+=st.GPA;
        }
        return average/students.size();

    }
    public static void displayList(){
        for (Student st:students) {
            System.out.println("Name : " +st.firstName + " " + "GPA : "+ st.GPA  );
        }
    }

    public static void main(String[] args) {
        Student st1=new Student("malhotra","anish",4.0);
        Student st2=new Student("hardy","jeff",3.0);
        Student st3=new Student("cena","john",3.5);
        students.add(st1);
        students.add(st2);
        students.add(st3);
        System.out.println("student list before removing : ");
        displayList();
        double gpa=calculateGPA();
        students.removeIf(s->s.GPA<gpa);
        System.out.println("student list after removing : ");
        displayList();



    }
}
