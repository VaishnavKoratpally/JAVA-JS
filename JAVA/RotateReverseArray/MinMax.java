public class MinMax {

    public Result findMinAndMax(int[] arr){
        int min=arr[0];
        int max=arr[0];
        Result result=new Result();
        for(int i=0;i< arr.length;i++){
            if(arr[i]<min){
                min=arr[i];
            }
            if(arr[i]>max){
                max=arr[i];
            }
        }
        result.max=max;
        result.min=min;

        return result;
    }
}
