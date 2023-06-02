public class Overriding {
    public String Demo(){
        return "Parent class method";
    }
}
 class Runtime extends Overriding{
    public String Demo(){
        return "Child class method";
    }
}