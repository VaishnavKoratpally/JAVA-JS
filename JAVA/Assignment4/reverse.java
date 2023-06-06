public class reverse {


    public int reverse(int num){
        int reversedNum=0;
        while(num!=0){
            int lastDigit=num%10;
            reversedNum=reversedNum*10 + lastDigit;
            num/=10;

        }
        return reversedNum;

    }




}
