public class Product {
    private double price=10;
    public double getPrice() {
        return price;
    }
    public double getPrice(int quantity) {
        return price*quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
