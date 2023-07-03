package Threads2;
import java.util.concurrent.*;

public class SumMultithread {

         public static int NUM_THREADS = 5;

        public  static int[] array = new int[100];

        public  static class SumCalculator implements Callable<Integer> {
            private final int startIndex;
            private final int endIndex;

            public SumCalculator(int startIndex, int endIndex) {
                this.startIndex = startIndex;
                this.endIndex = endIndex;
            }

            @Override
            public Integer call() {
                int sum = 0;
                for (int i = startIndex; i < endIndex; i++) {
                    sum += array[i];
                }
                return sum;
            }
        }

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        for (int i = 0; i < 100; i++) {
            array[i] = i + 1;
        }

        int range = 100 / NUM_THREADS;
        int startIndex = 0;
        int endIndex = range;
        ExecutorService executor = Executors.newFixedThreadPool(NUM_THREADS);

        Future<Integer>[] futures = new Future[NUM_THREADS];
        for (int i = 0; i < NUM_THREADS; i++) {
            futures[i] = executor.submit(new SumMultithread.SumCalculator(startIndex, endIndex));
            startIndex = endIndex;
            endIndex += range;
        }

        executor.shutdown();
        while (!executor.isTerminated()) {
        }

        int totalSum = 0;
        for (Future<Integer> future : futures) {
            totalSum += future.get();
        }

        System.out.println("Sum of array elements: " + totalSum);
    }

    }

