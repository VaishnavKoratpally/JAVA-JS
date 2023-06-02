// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        ConcreteDepartment department= new ConcreteDepartment();
        System.out.println(department.getDepartmentSize());
        Product product=new Product();
        System.out.println("Original price is "+product.getPrice());
        System.out.println("price with quantity is "+product.getPrice(4));
        Runtime runtime=new Runtime();
        System.out.println("Overridden method is " +runtime.Demo());


    }
}