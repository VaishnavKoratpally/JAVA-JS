import java.util.Arrays;

public class Rotate {
    public void rotateArray(int[] arr,int p){
        int[] temp=new int[p];
        int len=arr.length;
        for(int i=0;i<p;i++){
            temp[i]=arr[i];
        }
        for(int i=p;i<len;i++){
            arr[i-p]=arr[i];
        }
        for(int i=0;i<p;i++){
            arr[i+len-p]=temp[i];
        }
        System.out.println(Arrays.toString(arr));
    }
}
