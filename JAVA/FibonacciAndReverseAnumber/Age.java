public class Age {
    public String returnAge(int age){
        return (age<13) ?("Kid")
                     :(age > 19)?("Adult"):"Teen";
    }
}
